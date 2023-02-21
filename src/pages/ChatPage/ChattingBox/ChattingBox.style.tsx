import styled from '@emotion/styled';

export const ChattingBox = styled.div`
  border: 1px solid #bec5d7;
  width: 577px;
  height: 564px;

  margin-top: 28px;
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
  width: 120px;
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

//채팅 최상위 박스
export const ChattingContent = styled.div`
  height: 460px;
  width: 566px;
  /* border-right: 1px solid #bec5d7; */
  border-bottom: 1px solid #bec5d7;
  color: rgba(125, 139, 174, 1);
  overflow-y: auto;
  //왼쪽에 채팅창뜨게하는 3종세트
  display: flex; // 그러므로 내림차순으로 가져오면 가장 나중에 쓴 글이 최하단에 위치 하지 않을까?
  flex-direction: column-reverse; //값을 가져올때 오름차순=> 가장 먼저쓴 글이 최하단에 위치한다
`;

//오른쪽
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

// 채팅 내용
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

//왼쪽
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
  background-color: black;
  margin: 12px 0px 12px 12px;
`;
