import styled from 'styled-components';

export const MapPageSearchBar = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 10px;
  height: 48px;

  margin-bottom: 0px;
  border: 1px solid #bfbfbf;
  border-radius: 5px;
  overflow: hidden;
`;
export const SearchBar = styled.input`
  width: 85%;
  height: 45px;
  font-size: 20px;
  font-weight: 500;
  margin-left: 10px;
  border: none;
  border-right: 0px;
  border-left: 0px;
  border-top: 0px;
  border-bottom: 0px;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #bfbfbf;
  }
`;

export const MapAndControlContainer = styled.span`
  width: 100%;
  height: 536px;
  position: relative;
`;
export const Mapbox = styled.div`
  width: 100%;
  height: 100%;
`;

export const InfoWindow = styled.span`
  display: flex;
  flex-direction: row;
  width: 332px;
  height: 90px;
  padding: 12px;
  cursor: pointer;
`;
export const ResultListCard = styled.span`
  display: flex;
  flex-direction: column;
`;

export const ResultListCardImage = styled.img`
  width: 88px;
  height: 88px;
  margin-right: 12px;
  border-radius: 5px;
`;
export const ResultListCardTitle = styled.span`
  font-family: 'SUITERegular';
  font-size: 16px;
  font-weight: 600;
`;

export const ResultListCardLocationTimeDateWrapper = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 96px;
`;
export const ResultListCardLocation = styled.span`
  font-size: smaller;
  color: coral;
  width: 121px;
`;
export const ResultListCardLine = styled.span`
  width: 208px;
  height: 1px;
  background-color: gray;
`;
export const ResultListCardDateTimeWrapper = styled.span`
  display: flex;
  flex-direction: row;
`;
export const ResultListCardDate = styled.span`
  font-size: 12px;
  width: 80px;
  height: 12px;
`;
export const ResultListCardTime = styled.span`
  font-size: 12px;

  width: 90px;
  height: 12px;
`;
export const ResultListTagList = styled.span`
  display: flex;
  flex-direction: row;
  font-size: smaller;
  width: 139px;
  height: 27px;
  color: gray;
`;
export const ResultListTag = styled.span``;

export const ResultListCardLike = styled.span`
  margin-left: 20px;
  color: red;
`;

export const ResultListCardDateTimeLikeWrapper = styled.span`
  display: flex;
  flex-direction: row;
`;
export const CustomZoomControl = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  bottom: 180px;
  left: 818px;
  z-index: 1;
  gap: 3px;
  width: 44px;
  color: white;
`;
export const ZoomInButton = styled.span`
  width: 40px;
  height: 40px;
`;
export const ZoomOutButton = styled.span`
  width: 40px;
  height: 40px;
`;
export const FindMyLocationButton = styled.span`
  width: 40px;
  height: 40px;
`;
export const LinkToKaKaoNavibutton = styled.span`
  width: 40px;
  height: 40px;
`;

export const ZoomInSVG = styled.img`
  width: 40px;
  height: 40px;
`;

export const ZoomOutSVG = styled.img`
  width: 40px;
  height: 40px;
`;

export const FindMyLocationSVG = styled.img`
  width: 40px;
  height: 40px;
`;

export const LinkToKaKaoNaviSVG = styled.img`
  width: 40px;
  height: 40px;
`;

export const SearchSVG = styled.img`
  width: 40px;
  height: 40px;
`;
export const DeleteTextWapper = styled.div`
  cursor: pointer;
`;
