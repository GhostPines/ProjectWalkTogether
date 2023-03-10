import styled from 'styled-components';
import { BsCalendar4 } from 'react-icons/bs';

export const CategoryButtonWrapper = styled.span``;

export const CategoryTitleWrapper = styled.div``;

export const CategoryTitle = styled.p`
  margin-top: 64px;
  font-weight: 500;
  font-size: 36px;
  line-height: 45px;
`;
export const CategoryImg = styled.img`
  // 해당 카테고리 사진 넣을곳인데 안될듯하다
`;
export const LikedListItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 74.5px;
  grid-row-gap: 70px;
  margin-top: 46px;
`;
export const FilterArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;
export const CategoryFilter = styled.div`
  display: flex;
  align-items: center;
  /* margin-top: 8px; */
`;
export const CategoryFilterWarpper = styled.div`
  display: flex;
  padding: 0px 10px 0px 10px;
  // 텍스트 길이에 따라 width 자동조절
  width: auto;
  height: 27px;
  align-items: center;
  border: 1px solid #c7c7c7;
  border-radius: 4px;
  margin-right: 8px;
`;
export const FilterCategory = styled.p`
  width: auto;
  font-family: 'SUITERegular';
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #a6a6a6;
  margin-right: 4px;
`;
export const FilterCalendarIcon = styled.img`
  width: 10px;
  height: 10px;
  object-fit: contain;
`;

export const FilterSortWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const FilterNewest = styled.div`
  font-family: 'SUITERegular';
  display: inline-flex;
  align-items: center;
  color: #524f4d;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -1.5px;
  &:hover {
    cursor: pointer;
    font-weight: 600;
  }
`;
export const FilterAreaLine = styled.span`
  margin: 1px 8px 0;
  width: 1px;
  height: 16px;
  background-color: #e7e3e2;
  display: inline-block;
`;
