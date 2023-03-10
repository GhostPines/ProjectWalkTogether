import styled from 'styled-components';

export const MapPageContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 20px;

  max-width: 1024px;
  margin-bottom: 80px;
`;

export const MapPageHeader = styled.span`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 868px;
`;
export const MapPageSearchBar = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding-left: 15px;
  height: 45px;

  margin-bottom: 3px;
  border: 1px solid black;
  border-radius: 5px;
  overflow: hidden;
`;

export const SearchBar = styled.input`
  width: 866px;
  height: 45px;
  font-size: 25px;
  margin-left: 20px;
  ::placeholder {
    color: #bfbfbf;
  }
`;

export const MapKaKaoMapContainer = styled.span`
  display: flex;
  flex-direction: column;
  width: 868px;
  height: 536px;

  height: 50vh;
  @media screen and (max-width: 344px) {
    width: 300px;
    height: 300px;
  }
`;
export const MapPageTitle = styled.span`
  height: 45px;
  display: flex;
  font-family: 'SUITERegular';
  font-size: 35px;

  margin-top: 50px;
  font-weight: 600;
`;

export const LineMarker = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5px;
  border-bottom: 1px solid black;
`;

export const MapPageContentsWrapper = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  height: 100%;
  gap: 10px;
  width: 868px;
  @media screen and (max-width: 344px) {
    flex-direction: column;
  }
`;

export const UserInfoContainer = styled.span`
  display: flex;
  flex-direction: column;
  height: 100%;
  @media screen and (max-width: 344px) {
  }
`;
