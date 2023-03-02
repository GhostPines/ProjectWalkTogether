import styled from 'styled-components';
import { BsCalendar4 } from 'react-icons/bs';

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 868px;
  margin: auto;
`;
export const CategoryTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 84px;
`;
export const CategoryTitle = styled.p`
  font-family: 'SUITERegular';
  font-weight: 500;
  font-size: 36px;
  line-height: 45px;
`;
export const CategoryImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 4px;
  margin-right: 12px;
`;
export const LikedListItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 70px 49.3px;
  /* grid-template-rows: 49.3px; */

  margin-top: 36px;
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

  /* margin-left: 6px; */

  /* color: #a6a6a6; */
`;
export const FilterSortWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const FilterNewest = styled.div`
  font-family: 'SUITERegular';
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
