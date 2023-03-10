import styled, { css } from 'styled-components';
import Slider from 'react-slick';
import nextarrow from '../../assets/Mainpage/nextarrow.svg';
import beforearrow from '../../assets/Mainpage/beforearrow.svg';
export const StyledSlider = styled(Slider)`
  margin: auto;
  width: 80%; //슬라이드 컨테이너 영역
  margin-top: 52px;

  .slick-list {
    //슬라이드 스크린
    width: 90%;
    height: 100px;
    margin: auto;
  }
  .slick-slide div {
    /* cursor: pointer; */
  }

  .slick-track {
    width: 0%;
    align-items: center;
  }
  .slick-prev {
    width: 26px;
    height: 26px;
    top: 60%;
    left: -5px;
    cursor: pointer;
    position: absolute;
  }
  .slick-prev:before {
    width: 26px;
    height: 26px;
    background-image: url(${beforearrow});
    background-size: 26px 26px;
    display: inline-block;
    content: '';
    opacity: 1;
  }
  .slick-next {
    width: 26px;
    height: 26px;
    cursor: pointer;
    right: -5px;
    position: absolute;
    top: 60%;
  }

  .slick-next:before {
    width: 26px;
    height: 26px;
    background-image: url(${nextarrow});
    background-size: 26px 26px;
    display: inline-block;
    content: '';
    opacity: 1;
  }
`;

export const Category = styled.div``;

export const Categoryitem = styled.div`
  cursor: pointer;
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: auto;

  background-color: #f2efed;
  display: inline-flex;
  align-items: center;
`;
export const ImgTitle = styled.p`
  text-align: center;
  margin: 0 auto;
  font-family: 'SUITERegular';
  letter-spacing: -2px;
  padding-top: 10px;
`;
