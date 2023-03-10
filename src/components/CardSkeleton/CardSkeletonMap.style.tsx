import styled, { keyframes } from 'styled-components';

export const CardBox = styled.div`
  width: 180px;
  height: 207px;
`;

const SkeletonLoadingAnimation = keyframes`
   0% {
    transform: translateX(-100%);
  }
  50%,
  100% {
    transform: translateX(100%);
  }
`;

export const CardImg = styled.div`
  width: 180px;
  height: 96px;
  background-color: #f2f2f2;
  border-radius: 4px;
  /* margin-bottom: 35.66px;
  border-radius: 7px; */
  overflow: hidden;
  position: relative;
  @media (max-width: 820px) {
    width: 164px;
    height: 177px;
    margin-bottom: 0px;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${SkeletonLoadingAnimation} 1s infinite linear;
    @media (max-width: 820px) {
      width: 164px;
      height: 177px;
      margin-bottom: 0px;
    }
  }
`;

export const CardTtileWrapper = styled.div``;
export const CardTtile = styled.div`
  width: 165px;
  height: 20px;
  margin: 8px 0px 0px 0px;
  background-color: #f2f2f2;
  border-radius: 4px;
  /* margin-bottom: 35.66px;
  border-radius: 7px; */
  overflow: hidden;
  position: relative;
  @media (max-width: 820px) {
    width: 164px;
    height: 177px;
    margin-bottom: 0px;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${SkeletonLoadingAnimation} 1s infinite linear;
    @media (max-width: 820px) {
      width: 164px;
      height: 177px;
      margin-bottom: 0px;
    }
  }
`;
export const CardHashWrapper = styled.div``;
export const HashTag = styled.div`
  width: 180px;
  height: 21px;
  margin: 20px 0px 8px 0px;
  background-color: #f2f2f2;
  border-radius: 4px;
  /* margin-bottom: 35.66px;
  border-radius: 7px; */
  overflow: hidden;
  position: relative;
  @media (max-width: 820px) {
    width: 164px;
    height: 177px;
    margin-bottom: 0px;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${SkeletonLoadingAnimation} 1s infinite linear;
    @media (max-width: 820px) {
      width: 164px;
      height: 177px;
      margin-bottom: 0px;
    }
  }
`;
export const CardDesWrapper = styled.div``;
export const CardDes = styled.div`
  width: 180px;
  height: 33px;
  background-color: #f2f2f2;
  border-radius: 4px;
  /* margin-bottom: 35.66px;
  border-radius: 7px; */
  overflow: hidden;
  position: relative;
  @media (max-width: 820px) {
    width: 164px;
    height: 177px;
    margin-bottom: 0px;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${SkeletonLoadingAnimation} 1s infinite linear;
    @media (max-width: 820px) {
      width: 164px;
      height: 177px;
      margin-bottom: 0px;
    }
  }
`;
