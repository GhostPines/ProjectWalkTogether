import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';

export const CardGap = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 74.5px;
  grid-row-gap: 70px;
  margin-top: 36px;
`;
export const CardBox = styled.div``;
export const CardSectionWrapper = styled.a`
  cursor: pointer;
  width: 100%;
  height: 100%;
  /* width: 180px;
  min-height: 207px; */
`;
export const ListItemWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 200px;
  height: 130px;
  /* height: 32.8888vw;
  min-height: 92.44px; */
  /* width: 100%;
  height: 100%; */
`;
export const ListItemThumnail = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;
export const ListItemThumnailTitle = styled.img`
  width: 1024px;
  height: 293px;
`;
export const HashTag = styled.p`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 10px 12px 0px;
  gap: 8px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
`;
export const ListItemContainer = styled.div`
  border-top: 1px solid #ddd;
  padding-top: 5px;
`;
export const LikedHeartFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LikeBtnLine = styled(AiOutlineHeart)`
  position: absolute;
  width: 25px;
  height: 20px;
  margin-left: 11.5rem;
  margin-top: 30px;
  cursor: pointer;
`;
export const ListItemAddress = styled.p`
  margin-top: 5px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
`;
export const ListItemDate = styled.span`
  margin-top: 2px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
`;
