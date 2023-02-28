import MyPageBanner from './banner/MyPageBanner';
import MyPageProfile from './mypageProfile/MyPageProfile';
import MyPageReView from './mypageReview/MyPageReView';
import MyPageWrite from './mypageWrite/MyPageWrite';
import CommonStyles from '../../styles/CommonStyles';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { currentUserUid, isLoggedIn } from '../../Rocoil/Atom';
import { useRecoilValue } from 'recoil';
import MypageTabbar from './tabbar/MypageTabbar';
import MyPageLike from './likepage/MyPageLike';

const MyPage2 = () => {
  let { uid } = useParams();
  const navigate = useNavigate();

  const [id, setId] = useState<string>(uid || '');
  const [currentpage, setCurrentPage] = useState('Post');

  const loggedIn = useRecoilValue(isLoggedIn);
  const userUid = useRecoilValue(currentUserUid);

  useEffect(() => {
    console.log(loggedIn, userUid);
    if (id === '') {
      if (loggedIn) {
        setId(userUid);
      } else {
        // 로그아웃 상태 시 로그인 페이지로 보냄
        navigate('/login');
      }
    }
  }, [loggedIn]);

  const a = () => {
    switch (currentpage) {
      case MyPageName.Post:
        return <MyPageWrite uid={id} />;
      case MyPageName.Interest:
        return <MyPageLike uid={id} />;
      default:
        return <MyPageWrite uid={id} />;
    }
  };

  return (
    <CommonStyles>
      {id !== '' && (
        <>
          <MyPageBanner uid={id} />
          <MyPageProfile uid={id} />
          <MyPageReView />
          <MypageTabbar
            currentpage={currentpage}
            setCurrentPage={setCurrentPage}
          />

          {a()}
        </>
      )}
    </CommonStyles>
  );
};
export default MyPage2;

export enum MyPageName {
  Post = 'Post',
  Interest = 'Interest',
}
