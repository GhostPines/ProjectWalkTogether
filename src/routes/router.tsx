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
import PostListPage from './../pages/PostListPage/PostListPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/map' element={<MapPage />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/postpage/:id' element={<PostPage />} />
        <Route path='/postlistpage/' element={<PostListPage />} />
        <Route path='/detailpage' element={<DetailPage />} />
        <Route path='/chat' element={<ChattingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
