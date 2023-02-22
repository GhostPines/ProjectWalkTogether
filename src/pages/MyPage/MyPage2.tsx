import MyPageBanner from './banner/MyPageBanner';
import MyPageProfile from './mypageProfile/MyPageProfile';
import MyPageReView from './mypageReview/MyPageReView';
import MyPageWrite from './mypageWrite/MyPageWrite';
import CommonStyles from '../../styles/CommonStyles';
const MyPage2 = () => {
  return (
    <CommonStyles>
      <MyPageBanner />
      <MyPageProfile />
      <MyPageReView />
      <MyPageWrite />
    </CommonStyles>
  );
};
export default MyPage2;
