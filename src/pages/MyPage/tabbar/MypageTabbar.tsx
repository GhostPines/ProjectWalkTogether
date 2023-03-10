import * as S from './MypageTabbar.style';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentUserUid, UserNickName } from './../../../Rocoil/Atom';

const MypageTabbar = (props: {
  currentpage: string;
  setCurrentPage: (arg0: string) => void;
  uid: string;
}) => {
  const { currentpage, setCurrentPage } = props;

  // 현재 페이지의 닉네임 리코일
  const [name, setName] = useRecoilState(UserNickName);
  // 현재 유저의 UID
  const userUID = useRecoilValue(currentUserUid);

  const uid = props.uid;

  return (
    <>
      <S.TabbarWrap>
        <S.UserWriteBtn
          onClick={() => {
            setCurrentPage('Post');
          }}
          style={{
            color: currentpage === 'Post' ? '#000' : '#CBCBCB',
            borderBottom: '2px solid #CBCBCB',
            borderBottomColor: currentpage === 'Post' ? '#000' : '#CBCBCB',
          }}
        >
          {uid === userUID ? '내가 쓴 글' : `${name} 님이 쓴 글`}
        </S.UserWriteBtn>
        <S.UserInterest
          onClick={() => {
            setCurrentPage('Interest');
          }}
          style={{
            borderBottom: '2px solid #CBCBCB',
            color: currentpage === 'Interest' ? '#000' : '#CBCBCB',
            borderBottomColor: currentpage === 'Interest' ? '#000' : '#CBCBCB',
          }}
        >
          찜
        </S.UserInterest>
        <S.barWrap>
          <S.borderlinebottom></S.borderlinebottom>
        </S.barWrap>
      </S.TabbarWrap>
    </>
  );
};
export default MypageTabbar;
