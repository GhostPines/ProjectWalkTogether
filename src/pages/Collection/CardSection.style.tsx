import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';

export const CardBox = styled.div``;
export const CardSectionWrapper = styled.a`
  cursor: pointer;
  width: 100%;
  height: 100%;
`;
export const ListItemWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 130px;
`;
export const ListItemThumnail = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;
export const ListItemThumnailTitle = styled.p`
  width: 200px;
  margin: 8px 0px 0px 0px;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.97px;
  letter-spacing: normal;
  color: #212121;
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
  margin-left: 144px;
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

export const LikedListItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 49.3px;
  margin-top: 36px;
`;

export const CategoryTitleWrapper = styled.div``;
export const CategoryTitle = styled.p`
  margin-top: 64px;
  font-weight: 500;
  font-size: 36px;
  line-height: 45px;
`;
