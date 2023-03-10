import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../layout/Header';
import MainPage from '../pages/MainPage/MainPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import MapPage from '../pages/MapPage/MapPage';
import PostPage from '../pages/PostPage/PostPage';
import DetailPage from '../pages/DetailPage/DetailPage';
import ChattingPage from '../pages/ChatPage/ChattingPage';
import Category from './../pages/Category/Category';
import MyPage from '../pages/MyPage/MyPage';
import Agreement from '../pages/SignUpPage/Agreement';
import Collection from '../pages/Collection/Collection';
import AuthStateListener from '../components/AuthStateListener/AuthStateListener';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import MessageWindow, {
  MessageWindowLogoType,
  MessageWindowProperties,
  messageWindowPropertiesAtom,
} from '../messagewindow/MessageWindow';
import PostEditPage from '../pages/PostEditPage/PostEditPage';
import MeetDateInitializer from './../components/MeetDateInitializer/MeetDateInitializer';
import ChangePassword from '../pages/ChangePassword/ChangePassword';
import ScrollToTopButton from './../components/ScrollToTopButton/ScrollToTopButton';
import RerouteToMyPage from './../components/RerouteToMyPage/RerouteToMyPage';
import FindPassword from '../pages/LoginPage/Findpassword';
import Footer from '../layout/Footer/Footer';
const Router = () => {
  const setState = useSetRecoilState<MessageWindowProperties>(
    messageWindowPropertiesAtom
  );

  return (
    <BrowserRouter>
      <AuthStateListener />
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/map' element={<MapPage />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/mypage/:uid' element={<MyPage />} />
        <Route path='/postpage/' element={<PostPage />} />
        <Route path='/category/:category' element={<Category />} />
        <Route path='/collection/:id' element={<Collection />} />
        <Route path='/detailpage/:id' element={<DetailPage />} />
        <Route path='/agreement' element={<Agreement />} />
        <Route path='/edit/:id' element={<PostEditPage />} />
        <Route path='/chat' element={<ChattingPage />} />
        <Route path='/changepassword' element={<ChangePassword />} />
        <Route path='/reroutetomypage' element={<RerouteToMyPage />} />
        <Route path='/find' element={<FindPassword />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
      <MeetDateInitializer />
    </BrowserRouter>
  );
};

export default Router;
