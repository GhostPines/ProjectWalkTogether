import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import MainPage from '../pages/MainPage/MainPage';
import MyPage from '../pages/MyPage/MyPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import MapPage from '../pages/MapPage/MapPage';
import PostPage from '../pages/PostPage/PostPage';
import DetailPage from '../pages/DetailPage/DetailPage';
import ChattingPage from '../pages/ChatPage/ChattingPage';
import Category from './../pages/Category/Category';
import MyPage2 from '../pages/MyPage/MyPage2';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/map' element={<MapPage />} />
        <Route path='/mypage' element={<MyPage2 />} />
        <Route path='/postpage' element={<PostPage />} />
        <Route path='/category/:category' element={<Category />} />
        <Route path='/detailpage/:id' element={<DetailPage />} />
        <Route path='/chat' element={<ChattingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
