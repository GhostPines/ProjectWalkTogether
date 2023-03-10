import styled from '@emotion/styled';

export const ChattingBox = styled.div`
  border: 1px solid #bec5d7;
  width: 577px;
  height: 564px;
  border-radius: 4px;
`;

export const ChattingNickname = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 0px 2px 16px;
  gap: 8px;

  position: relative;
  width: 576px;
  height: 40px;

  /* light blue */
  /* background-color: blue; */
  border-bottom: 1px solid #bec5d7;
`;

export const ChattingNicknamePhoto = styled.div`
  width: 24px;
  height: 24px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const ChattingNicknameto = styled.div`
  height: 20px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #24264e;
  flex: none;
  order: 1;
  flex-grow: 0;
  overflow: hidden;
`;

export const ChattingInputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 16px;
  gap: 10px;

  position: relative;
  width: 566px;
  height: 64px;
  border-radius: 4px;
  /* border-right: 1px solid #bec5d7; */
`;

export const ChattingInputouter = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 79px 10px 16px;
  gap: 147px;

  width: 529px;
  height: 40px;

  background: #ffffff;
  /* light blue */

  border: 1px solid #bec5d7;
  border-radius: 33px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const ChattingInput = styled.input`
  width: 331px;
  height: 20px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;

  color: #7d8bae;

  flex: none;
  order: 0;
  flex-grow: 0;
  outline: none;
`;

export const ChattingButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4px 1px 2px;
  gap: 10px;

  width: 16px;
  height: 18px;

  background-color: white;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

//?????? ????????? ??????
export const ChattingContent = styled.div`
  height: 460px;
  width: 576px;
  /* border-right: 1px solid #bec5d7; */
  border-bottom: 1px solid #bec5d7;
  color: rgba(125, 139, 174, 1);
  overflow-y: auto;
  //????????? ????????????????????? 3?????????
  display: flex; // ???????????? ?????????????????? ???????????? ?????? ????????? ??? ?????? ???????????? ?????? ?????? ??????????
  flex-direction: column-reverse; //?????? ???????????? ????????????=> ?????? ????????? ?????? ???????????? ????????????
`;

//?????????
export const ChattingTextBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const ChattingTime = styled.div`
  font-size: 10px;
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  bottom: 10px;
  /* background-color: blue; */
`;

export const ChattingForm = styled.form``;

// ?????? ??????
export const ChattingText = styled.div`
  max-width: 430px;
  border: 1px solid #bec5d7;
  margin: 12px;
  border-radius: 4px;
  padding: 10px;
  font-size: 12px;
  display: inline-block;
  /* position: relative;
  left: 100px; */
  text-align: left;
`;

//??????
export const ChattingTextBoxLeft = styled.div`
  display: flex;
`;

export const ChattingTextLeft = styled.div`
  max-width: 430px;
  border: 1px solid #bec5d7;
  margin: 12px;
  border-radius: 4px;
  padding: 10px;
  font-size: 12px;
  display: inline-block;

  text-align: left;
`;

export const ChattingImg = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  /* background-color: black; */
  margin: 12px 0px 12px 12px;
`;

export const PlaneImg = styled.img``;

//????????? ????????? ????????? ?????????
export const ChattingBoxheaderImg = styled.img`
  width: 21.33px;
  height: 21.33px;
  border-radius: 30px;
`;

export const ChattingBoxheaderImgCover = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 30px;

  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(53, 100, 187, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChattingIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 130px;
  height: 200px;
`;

export const ChattingIntroTextTop = styled.div``;

export const ChattingIntroTextBottom = styled.div``;
