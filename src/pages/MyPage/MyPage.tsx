import MyPageBanner from './banner/MyPageBanner';
import MyPageProfile from './mypageProfile/MyPageProfile';
import MyPageReview from './mypageReview/MyPageReView';
import MyPageWrite from './mypageWrite/MyPageWrite';
import CommonStyles from '../../styles/CommonStyles';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { kakaoUserState, currentUserUid, isLoggedIn } from '../../Rocoil/Atom';
import { useRecoilValue } from 'recoil';
import MypageTabbar from './tabbar/MypageTabbar';
import MyPageLike from './likepage/MyPageLike';
import styled from 'styled-components';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { dbService } from '../../common/firebase';

const MyPage = () => {
  let { uid } = useParams();

  const userUid = useRecoilValue(currentUserUid);
  const kakaoUser = useRecoilValue(kakaoUserState);
  const loggedIn = useRecoilValue(isLoggedIn);

  const navigate = useNavigate();

  const [id, setId] = useState<string>(userUid);
  const [userInfo, setUserInfo] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState('Post');

  const fatchInfo = async () => {
    const docSnap = await getDoc(doc(dbService, 'user', userUid));
    setUserInfo(docSnap.data());
  };
  useEffect(() => {
    fatchInfo();
  }, [userUid]);

  useEffect(() => {
    setTimeout(() => {
      if (id === '') {
        if (loggedIn) {
          setId(userUid);
        } else {
          // 로그아웃 상태 시 로그인 페이지로 보냄
          navigate('/login');
        }
      }
    }, 3000);
  }, [loggedIn]);
  //다른사람페이지로 가서 새로고침을 했을때 로그아웃을 하면 로그인페이지로 간다
  //id가없어서 안된다 파라미터 uid 방식이 아니라 mypage그대로 쓰자
  //mypage안에서 컴포넌트로 들어오면 유저 로그인상태 판단 -리코일
  //로그인 할때 리코일 상태 세팅
  const TabContent = () => {
    if (id) {
      switch (currentPage) {
        case MyPageName.Post:
          return <MyPageWrite uid={userInfo} />;
        case MyPageName.Interest:
          return <MyPageLike uid={userInfo} />;
        default:
          return <MyPageWrite uid={userInfo} />;
      }
    }
  };

  return (
    <CommonStyles>
      <MyPageWrap>
        <MyPageBanner userInfo={userInfo} />
        <MyPageProfile userInfo={userInfo} />
        {/* <MyPageReview /> */}
        <MypageTabbar
          uid={id}
          currentpage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        <TabContent />
      </MyPageWrap>
    </CommonStyles>
  );
};
export default MyPage;

const MyPageWrap = styled.div`
  /* width: 868px; */
  margin: auto;
`;

export enum MyPageName {
  Post = 'Post',
  Interest = 'Interest',
}
