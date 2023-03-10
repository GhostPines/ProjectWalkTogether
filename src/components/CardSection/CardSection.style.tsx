import styled from 'styled-components';

export const CardBox = styled.a`
  width: 180px;
  height: 207px;
`;
export const CardSectionWrapper = styled.div`
  cursor: pointer;
`;
export const ListItemWrapper = styled.div`
  width: 100%;
  height: 96px;
`;
export const ListItemThumnail = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 4px;
`;
export const ListItemThumnailTitle = styled.p`
  width: 165px;
  margin: 8px 0px 0px 0px;

  object-fit: contain;
  font-size: 16px;
  font-family: 'SUITERegular';
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -2px;
  color: #212121;
`;
export const HashTag = styled.p`
  font-family: 'SUITERegular';
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px 0px 8px 0px;
  gap: 8px;
  font-weight: 500;
  font-size: 12px;
  line-height: 21px;
`;
export const ListItemContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 1px solid #ddd;
  padding-top: 8px;
`;
export const LikedHeartFlex = styled.button`
  position: absolute;
  width: 20px;
  background: none;
  margin-left: 160px;
  margin-top: -25px;
  /* top: 86px; */

  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  cursor: pointer;
  object-fit: contain;
`;

export const LikeBtnLine = styled.img`
  width: 20px;
  height: 18px;
  object-fit: contain;
`;
export const LikeBtnFill = styled.img`
  width: 20px;
  height: 18px;
  object-fit: contain;
`;
export const ListItemAddress = styled.p`
  font-family: 'SUITERegular';
  /* margin-top: 5px; */
  font-weight: 400;
  letter-spacing: -0.5px;
  font-size: 12px;
  line-height: 15px;
  margin-right: 0;
`;
export const ListItemDate = styled.span`
  font-family: 'SUITERegular';
  letter-spacing: -0.5px;
  margin-top: 2px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  margin-right: 4px;
`;
export const ListItemHour = styled.span`
  font-family: 'SUITERegular';
  letter-spacing: -0.5px;
  margin-top: 2px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
`;
export const AddressDateHourWrapper = styled.div`
  font-size: 16px;
  line-height: 100%;
`;
export const FooterWrapper = styled.div`
  /* flex: 1; */
  /* height: auto; */
  /* min-height: calc(100% - 190px); */
  /* padding-bottom: 190px; */
  /* min-height: 100vh; */
`;
