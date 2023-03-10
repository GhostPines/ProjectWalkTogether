import styled from 'styled-components';

export const HeaderLine = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 50px;
  margin-top: 30px;
  margin-bottom: 10px;
  @media screen {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
export const HeaderLineTitle = styled.span`
  font-size: 30px;
  font-weight: 600;
  @media screen {
    font-size: Large;
  }
`;
export const HeaderLineCategory = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  width: 120px;
  height: 40px;
  @media screen {
    width: 100px;
    height: 30px;
  }
`;
export const SearchLine = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
export const SearchLineSearchByLocation = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: smaller;
`;
export const SearchLineSearchInputBox = styled.span`
  width: 100%;
  height: 15px;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid black;
`;
export const SearchLineTotalCount = styled.span`
  margin-top: 10px;
  font-family: 'SUITERegular';
  font-size: smaller;
  color: gray;

  /* margin-bottom: 30px; */
`;
export const LikedListItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 70px 49.3px;
  /* grid-template-rows: 49.3px; */

  margin-top: 46px;
`;

export const ResultList = styled.span`
  width: 868px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
export const ResultListCard = styled.span`
  display: flex;
  flex-direction: column;
  grid-gap: 1px;
  margin: 20px;
  cursor: pointer;
`;

export const ResultListCardImage = styled.img`
  width: 100%;
  height: 96px;
  margin-bottom: 5px;
`;
export const ResultListCardTitle = styled.span`
  width: 180px;
  height: 40px;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const ResultListCardLocationTimeDateWrapper = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 180px;
`;
export const ResultListCardLocation = styled.span`
  font-size: smaller;
  color: coral;
  width: 180px;
`;
export const ResultListCardLine = styled.span`
  width: 180px;
  height: 1px;
  background-color: gray;
`;
export const ResultListCardDateTimeWrapper = styled.span`
  display: flex;
  flex-direction: row;

  justify-content: start;
`;
export const ResultListCardDate = styled.span`
  font-size: smaller;
  width: 80px;
`;
export const ResultListCardTime = styled.span`
  font-size: smaller;
  width: 80px;
`;
export const ResultListTagList = styled.span`
  display: flex;
  flex-direction: row;
  font-size: smaller;
  gap: 5px;
  color: gray;
  margin-top: 5px;
`;
export const ResultListTag = styled.span``;

export const ResultListCardLike = styled.span`
  margin-left: 5px;
  color: red;
`;

export const ResultListCardDateTimeLikeWrapper = styled.span`
  display: flex;
  flex-direction: row;
`;

export const NoResult = styled.div``;

export const NoResultTitle = styled.p`
  font-family: 'SUITERegular';
  margin-top: -40px;
  font-weight: 500;
  font-size: 16px;
  line-height: 45px;
  margin-bottom: 100px;
  /* color: #7d8bae; */
`;
