import styled from 'styled-components';
import { BsCalendar4 } from 'react-icons/bs';

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
  /* display: flex;
  flex-wrap: wrap;
  grid-gap: 74.5px;
  grid-row-gap: 70px;
  margin-top: 36px; */
`;
export const FilterArea = styled.div`
  /* margin-bottom: -26px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CategoryFilter = styled.div`
  display: flex;
  align-items: center;
`;
export const CategoryFilterWarpper = styled.div`
  display: flex;
  padding: 0px 10px 0px 10px;
  width: 90px;
  height: 27px;
  align-items: center;
  border: 1px solid #c7c7c7;
  border-radius: 4px;
  margin-right: 8px;
  margin-top: 10px;
`;
export const FilterCategory = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #a6a6a6;
`;
export const FilterCalendarIcon = styled(BsCalendar4)`
  width: 11px;
  height: 11px;
  top: 52px;
  margin-left: 6px;
  color: #a6a6a6;
`;
export const FilterSortWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const FilterNewest = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: #524f4d;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
`;
export const FilterAreaLine = styled.span`
  margin: 1px 8px 0;
  width: 1px;
  height: 16px;
  background-color: #e7e3e2;
  display: inline-block;
`;
