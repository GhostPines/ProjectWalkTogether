import styled from '@emotion/styled';

export const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* margin-top: 64px; */
  /* top: 65px;
  position: relative; */

  min-height: calc(100vh - 242px);
`;

export const InnerBox = styled.div`
  width: 386px;
  height: 532px;

  background: #ffffff;
  box-shadow: 0px 0px 7px rgba(190, 197, 215, 0.8);
  border-radius: 4px;
`;

export const PasswordChangeTitleBox = styled.div`
  height: 112px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PasswordChangeTitle = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  color: #24264e;
`;

export const PasswordChangeInputBox = styled.div`
  height: 82px;
`;

export const CheckBtn = styled.div`
  width: 13px;
  height: 13px;
  position: relative;
  left: 276px;
  bottom: 10px;
  cursor: pointer;
  :active {
    width: 10px;
    height: 10px;
  }
`;

export const InputBox = styled.div`
  width: 306px;
  height: 47px;
  border: 1px solid #bec5d7;
  border-radius: 8px;
  position: relative;
  left: 40px;
`;

export const ValidityTest = styled.div`
  position: relative;
  left: 40px;
  top: 6px;
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  display: flex;

  /* blue */

  color: #7d8bae;
`;

export const ConfirmBtnBox = styled.div`
  /* background-color: blue; */
  height: 135px;
`;

export const ConfirmBtn = styled.button`
  position: relative;
  left: 40px;
  top: 70px;
  width: 306px;
  height: 46px;
  background: #7d8bae;
  border-radius: 4px;
  color: #ffffff;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 15px;
`;

export const BackBtnBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const BackBtn = styled.button`
  position: relative;
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #7d8bae;
  background-color: white;
`;

export const Input = styled.input`
  outline: none;
  position: relative;
  left: 10px;
  top: 7px;
  width: 250px;

  &&::placeholder {
    font-family: 'SUIT';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #24264e;
  }
`;

export const Reddot = styled.div`
  width: 8px;
  height: 8px;
  background-color: #ff8f8f;
  border-radius: 5px;
  margin-right: 8px;
  margin-left: 8px;
`;
export const CheckIcon = styled.img`
  cursor: pointer;
`;
export const CheckIconright = styled.img``;
