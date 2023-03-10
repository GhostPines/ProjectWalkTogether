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
  overflow: hidden;
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
  text-overflow: ellipsis;
  font-size: 16px;
  font-family: 'SUITERegular';
  letter-spacing: -2px;
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
  font-family: 'SUITERegular';
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
  font-family: 'SUITERegular';
  letter-spacing: -0.1px;
  margin-top: 2px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  margin-right: 3px;
`;

export const LikedListItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 49.3px;
  margin-top: 36px;
`;

export const Collection = styled.div``;

export const CategoryTitle = styled.p`
  font-weight: 500;
  font-size: 36px;
  line-height: 45px;
  margin-top: 74px;
`;

export const Category = styled.div``;
export const Button = styled.button`
  float: right;
  background-color: transparent;
  font-family: 'SUITERegular';
  letter-spacing: -0.1px;
  margin-right: 5px;
`;
export const InsideText = styled.p`
  margin-top: 19px;
  font-family: 'SUITERegular';
  letter-spacing: -1px;
  color: #7d8bae;
  width: 300px;
`;
export const TitleLayout = styled.div`
  display: flex;
  align-items: center;
`;

export const HotShoesImg = styled.img`
  width: 76px;
  height: 76px;
  display: flex;
  margin-top: 40px;
`;
export const TextTitle = styled.p`
  font-family: 'SUITEBold';
  letter-spacing: -3px;
  font-size: 36px;
  font-weight: 400;
  display: flex;
`;
export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 868px;
  margin: auto;
  margin-bottom: 80px;
`;

export const FirstLayout = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Line = styled.div`
  height: 74px;
  background-color: white;
  width: 100%;
  border-bottom: 2px solid #bec5d7;
`;
export const ButtonIcon = styled.img`
  width: 12px;
  height: 12px;
  object-fit: contain;
  cursor: pointer;
`;
export const ButtonWrap = styled.div`
  margin-top: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContentLayout = styled.div``;
export const Collectionitem = styled.div``;
