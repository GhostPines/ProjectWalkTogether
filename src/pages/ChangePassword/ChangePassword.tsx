/* eslint-disable jsx-a11y/alt-text */
import { async } from '@firebase/util';
import {
  getAuth,
  signInWithEmailAndPassword,
  updatePassword,
} from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authService } from '../../common/firebase';
import MessageWindow, {
  MessageWindowLogoType,
  MessageWindowProperties,
  messageWindowPropertiesAtom,
} from '../../messagewindow/MessageWindow';
import { isLoggedIn } from '../../Rocoil/Atom';
import * as S from './ChangePassword.style';
import CommonStyles from '../../styles/CommonStyles';

const ChangePassword = () => {
  const userloggedin = useRecoilValue(isLoggedIn);

  const [currentpassword, setCurrentPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [checkpassword, setCheckPassword] = useState('');
  const navigate = useNavigate();

  const [isCurrentPasswordValid, setIsCurrentPasswordValid] =
    useState<boolean>(false);
  const [hasUserAttemptedPasswordChange, setHasUserAttemptedPasswordChange] =
    useState<boolean>(false);

  const [isNewPasswordValid, setIsNewPasswordValid] = useState<boolean>(false);
  const [doNewPasswordsMatch, setDoNewPasswordsMatch] =
    useState<boolean>(false);
  const [hasUserChangedNewPassword, setHasUserChangedNewPassword] =
    useState<boolean>(false);

  const setState = useSetRecoilState<MessageWindowProperties>(
    messageWindowPropertiesAtom
  );

  const props = new MessageWindowProperties(
    true, // true로 하셔야 창 띄워집니다.
    '비밀번호가 변경되었어요!', // 보여줄 메시지
    '', // 보여줄 메시지
    [
      {
        text: '이전으로 돌아가기',
        callback: () => {
          navigate(-1); // 여기에 할 거 하시면 됩니다.
        },
      },
    ],
    MessageWindowLogoType.Checkmark
  );

  const passwordChangeBtn = async () => {
    setHasUserAttemptedPasswordChange(true);

    // Check if new password is empty
    if (newpassword === '') {
      setIsNewPasswordValid(false);
      return;
    } else {
      setIsNewPasswordValid(true);
    }

    // Check if new password matches password check
    if (newpassword !== checkpassword) {
      setDoNewPasswordsMatch(false);
      return;
    } else {
      setDoNewPasswordsMatch(true);
    }

    if (userloggedin) {
      signInWithEmailAndPassword(
        getAuth(),
        authService.currentUser.email,
        currentpassword
      )
        .then((user) => {
          // 비밀번호 검증 성공
          setIsCurrentPasswordValid(true);
          updatePassword(getAuth().currentUser, newpassword).then(() => {
            MessageWindow.showWindow(props, setState);
          });
        })
        .catch(() => {
          setIsCurrentPasswordValid(false);
        });
    } else {
      // 비밀번호 찾기 페이지에서 들어왔을때 비밀번호 재설정 버튼을 누르면 여기가 실행됩니다.
    }
  };

  const currentPasswordValidationCheckComponent = () => {
    if (hasUserAttemptedPasswordChange) {
      if (!isCurrentPasswordValid) {
        return (
          <S.ValidityTest>
            <S.Reddot></S.Reddot>비밀번호를 확인해주세요.
          </S.ValidityTest>
        );
      }
    }

    return <></>;
  };

  const nowPasswordConfrim = () => {
    setCurrentPassword('');
  };

  const newPassword = () => {
    setNewPassword('');
  };

  const newPasswordConfrim = () => {
    setCheckPassword('');
  };

  console.log('newpassword:', newpassword);

  return (
    <CommonStyles>
      <S.Outer>
        <S.InnerBox>
          <S.PasswordChangeTitleBox>
            <S.PasswordChangeTitle>
              비밀번호를 재설정 하세요
            </S.PasswordChangeTitle>
          </S.PasswordChangeTitleBox>

          {userloggedin && (
            <>
              <S.PasswordChangeInputBox>
                <S.InputBox>
                  <S.Input
                    value={currentpassword}
                    type='password'
                    placeholder='현재 비밀번호 확인'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setCurrentPassword(e.currentTarget.value);
                    }}
                  ></S.Input>
                  {currentpassword === '' ? (
                    <S.CheckBtn onClick={nowPasswordConfrim}>
                      <S.CheckIconright
                        src={
                          require('../../assets/ChattingIcon/check.svg').default
                        }
                      />
                    </S.CheckBtn>
                  ) : (
                    <S.CheckBtn onClick={nowPasswordConfrim}>
                      <S.CheckIcon
                        src={
                          require('../../assets/ChattingIcon/clearbtn.svg')
                            .default
                        }
                      ></S.CheckIcon>
                    </S.CheckBtn>
                  )}
                </S.InputBox>

                {currentPasswordValidationCheckComponent()}
              </S.PasswordChangeInputBox>
            </>
          )}
          <S.PasswordChangeInputBox>
            <S.InputBox>
              <S.Input
                value={newpassword}
                type='password'
                placeholder='새로운 비밀번호를 입력해주세요'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setHasUserChangedNewPassword(true);
                  setIsNewPasswordValid(e.currentTarget.value !== '');
                  setNewPassword(e.currentTarget.value);
                  setDoNewPasswordsMatch(
                    e.currentTarget.value === checkpassword
                  );
                }}
              ></S.Input>
              {newpassword === '' ? (
                <S.CheckBtn onClick={newPassword}>
                  <S.CheckIconright
                    src={require('../../assets/ChattingIcon/check.svg').default}
                  />
                </S.CheckBtn>
              ) : (
                <S.CheckBtn onClick={newPassword}>
                  <S.CheckIcon
                    src={
                      require('../../assets/ChattingIcon/clearbtn.svg').default
                    }
                  ></S.CheckIcon>
                </S.CheckBtn>
              )}
            </S.InputBox>

            {hasUserChangedNewPassword && !isNewPasswordValid && (
              <S.ValidityTest>
                <S.Reddot></S.Reddot> 새로운 비밀번호가 유효하지 않습니다.
              </S.ValidityTest>
            )}
          </S.PasswordChangeInputBox>
          <S.PasswordChangeInputBox>
            <S.InputBox>
              <S.Input
                value={checkpassword}
                type='password'
                placeholder='새로운 비밀번호를 재입력 해주세요'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setDoNewPasswordsMatch(e.currentTarget.value === newpassword);
                  setCheckPassword(e.currentTarget.value);
                }}
              ></S.Input>
              {checkpassword === '' ? (
                <S.CheckBtn onClick={newPasswordConfrim}>
                  <S.CheckIconright
                    src={require('../../assets/ChattingIcon/check.svg').default}
                  />
                </S.CheckBtn>
              ) : (
                <S.CheckBtn onClick={newPasswordConfrim}>
                  <S.CheckIcon
                    src={
                      require('../../assets/ChattingIcon/clearbtn.svg').default
                    }
                  ></S.CheckIcon>
                </S.CheckBtn>
              )}
            </S.InputBox>

            {hasUserChangedNewPassword && !doNewPasswordsMatch && (
              <S.ValidityTest>
                <S.Reddot></S.Reddot>비밀번호가 일치하지 않습니다.
              </S.ValidityTest>
            )}
          </S.PasswordChangeInputBox>

          <S.ConfirmBtnBox>
            <S.ConfirmBtn onClick={passwordChangeBtn}>
              비밀번호 재설정
            </S.ConfirmBtn>
          </S.ConfirmBtnBox>

          <S.BackBtnBox>
            <S.BackBtn>이전으로 돌아가기</S.BackBtn>
          </S.BackBtnBox>
        </S.InnerBox>
      </S.Outer>
    </CommonStyles>
  );
};
export default ChangePassword;
