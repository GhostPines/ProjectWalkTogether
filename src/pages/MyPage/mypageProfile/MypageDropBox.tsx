import { deleteUser, getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import * as S from './MypageDropBox.style';
import MessageWindow, {
  MessageWindowLogoType,
  MessageWindowProperties,
  messageWindowPropertiesAtom,
} from '../../../messagewindow/MessageWindow';
import { useSetRecoilState } from 'recoil';

// MessageWindow 세팅
const MypageDropBox = () => {
  const navigate = useNavigate();

  const setState = useSetRecoilState<MessageWindowProperties>(
    messageWindowPropertiesAtom
  );

  const onDeleteAccount = async () => {
    MessageWindow.showWindow(
      new MessageWindowProperties(
        true,
        '회원 탈퇴를 하시겠어요?',
        '탈퇴 후 계정 복구는 불가능해요',
        [
          {
            text: '이전으로 돌아가기',
            callback: () => {
              return;
            },
          },
          {
            text: '계정 탈퇴하기',
            callback: () =>
              deleteUser(getAuth().currentUser).then(() => {
                navigate('/');
              }),
          },
        ],
        MessageWindowLogoType.CryingFace
      ),
      setState
    );
  };

  return (
    <>
      <S.DropBoxWrapper>
        <S.DropBoxDeleteAccountBtn
          onClick={() => {
            navigate('/changepassword');
          }}
        >
          비밀번호 변경
        </S.DropBoxDeleteAccountBtn>
        <S.DropBoxModifyAccountBtn onClick={onDeleteAccount}>
          회원 탈퇴
        </S.DropBoxModifyAccountBtn>
      </S.DropBoxWrapper>
    </>
  );
};

export default MypageDropBox;
