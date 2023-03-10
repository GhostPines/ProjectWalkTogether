import { authService } from '../../common/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import MessageWindow, {
  MessageWindowLogoType,
  MessageWindowProperties,
  messageWindowPropertiesAtom,
} from '../../messagewindow/MessageWindow';
import { useSetRecoilState } from 'recoil';
import CommonStyles from '../../styles/CommonStyles';
import * as S from './LoginPage.style';
import { useNavigate } from 'react-router';
import { emailRegex } from '../../utils/UserInfoRegex';

const FindPassword = () => {
  const [validate, setValidate] = useState<string>('');
  const setState = useSetRecoilState<MessageWindowProperties>(
    messageWindowPropertiesAtom
  );
  const [findPwd, setFindPwd] = useState('');
  const email = findPwd;
  //비밀번호 초기화 버튼
  const findPasswordClear = () => {
    setFindPwd(() => '');
  };

  const navigate = useNavigate();
  // 비밀번호 재설정 함수 (비밀번호 찾기)

  const findPasswordfnc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFindPwd(e.target.value);
  };

  const resetPassword = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (emailRegex.test(findPwd) === true) {
      await sendPasswordResetEmail(authService, email)
        .then(() => {
          MessageWindow.showWindow(
            new MessageWindowProperties(
              true,
              '이메일을 발송했습니다',
              '',
              [
                {
                  text: '보관함을 확인해주세요',
                  callback: () => {
                    navigate('/login', { replace: true });
                  },
                },
              ],
              MessageWindowLogoType.Confetti
            ),
            setState
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
          MessageWindow.showWindow(
            new MessageWindowProperties(
              true,
              '등록되지 않은 이메일입니다',
              '',
              [
                {
                  text: '닫 기',
                  callback: () => {
                    MessageWindow.showWindow(
                      new MessageWindowProperties(),
                      setState
                    );
                  },
                },
              ],
              MessageWindowLogoType.CryingFace
            ),
            setState
          );
          // ..
        });
    } else if (findPwd.length === 0) {
      setValidate('이메일을 입력해주세요');
    } else {
      setValidate('이메일을 정확히 입력해 주세요.');
    }
  };

  console.log('findPwd:', findPwd);

  return (
    <>
      <CommonStyles>
        <S.InputLayout>
          <S.InputBox>
            {/* <S.leftBox /> */}
            <S.InputBoxContent>
              <S.LoginLogo>
                <S.LogoText style={{ top: 20 }}>비밀번호 찾기</S.LogoText>
              </S.LoginLogo>

              <S.Inputholder style={{ top: 60 }}>
                <S.Input
                  type='text'
                  name='비밀번호'
                  placeholder='비밀번호를 변경할 이메일을 입력하세요.'
                  value={findPwd}
                  onChange={findPasswordfnc}
                ></S.Input>
                {findPwd === '' ? (
                  <S.CheckBtn onClick={findPasswordClear}>
                    <S.CheckIconright
                      src={
                        require('../../assets/ChattingIcon/check.svg').default
                      }
                    />
                  </S.CheckBtn>
                ) : (
                  <S.CheckBtn onClick={findPasswordClear}>
                    <S.CheckIconright
                      src={
                        require('../../assets/ChattingIcon/clearbtn.svg')
                          .default
                      }
                    />
                  </S.CheckBtn>
                )}
              </S.Inputholder>
              <S.ButtonBox>
                <S.FindBtn onClick={resetPassword}>
                  <S.FindBtnText>다음으로</S.FindBtnText>
                </S.FindBtn>
                <S.Validityfontbox>{validate}</S.Validityfontbox>
                <S.BackBtn>이전으로 돌아가기</S.BackBtn>
              </S.ButtonBox>
            </S.InputBoxContent>
          </S.InputBox>
        </S.InputLayout>
      </CommonStyles>
    </>
  );
};

export default FindPassword;
