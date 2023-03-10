import Slider from 'react-slick';
import styled from '@emotion/styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './Banner.style';
// import BannerImage from '../assets/SlideContainer/BannerSlide.png';
import Banner from '../../assets/Mainpage/Bannerslides.svg';
import Slide from '../../assets/Mainpage/slides.svg';
const settings = {
  arrows: true,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
};

const MainBanner = () => {
  return (
    <S.SliderWrapper {...settings}>
      <S.SlideWrapper>
        <S.BannerContainer>
          <S.BannerTextBox>
            <S.BannerTitle>
              일상에서 함께하는 <br />
              <S.BannerSubTitle>나의 이야기</S.BannerSubTitle>
            </S.BannerTitle>
          </S.BannerTextBox>
          <S.BannerFirstImg src={Banner} />
        </S.BannerContainer>
      </S.SlideWrapper>
      <S.SlideWrapper>
        <S.BannerContainer>
          <S.BannerTextBox>
            <S.BannerTitle>
              걸으면서 공유하는 <br />
              <S.BannerSubTitle>나의 이야기</S.BannerSubTitle>
            </S.BannerTitle>
          </S.BannerTextBox>
          <S.BannerSecondImg src={Slide} />
        </S.BannerContainer>
      </S.SlideWrapper>
    </S.SliderWrapper>
  );
};

export default MainBanner;
