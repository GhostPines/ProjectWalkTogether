import styled from 'styled-components';

export const SignUPBox = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  /* background-color: blue; */
  /* min-height: calc(100vh - 292px); */
  position: relative;
  /* bottom: 39px; */
  top: 50px;
`;

export const InputBox = styled.div`
  display: flex;

  flex-wrap: wrap;
  width: 386px;
  height: 582px;

  border-radius: 10px;
  padding: 5px;
  position: relative;

  top: 100px;

  box-shadow: 0 0 10px #bec5d7;
  z-index: 1;
`;

//Inputholder안의 진짜 input태그
export const Input = styled.input`
  :-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #fff inset;
    -webkit-text-fill-color: #000;
  }
  outline: none;
  position: relative;
  left: 10px;
  top: 7px;
  width: 230px;

  ::-ms-reveal {
    display: none;
  }

  &&::placeholder {
    font-family: 'SUIT';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #24264e;
  }
`;

//Input태그의 테두리
export const Inputholder = styled.div`
  margin: auto;
  border-radius: 10px;
  width: 306px;
  height: 47px;
  border: 2px solid #bec5d7;
  color: #b2c8df;

  margin-top: 15px;
`;

//인풋을 둘러싼 박스
export const InputBoxContent = styled.div`
  width: 306px;
  margin: auto;
`;

//잠깐만 !
export const LoginLogo = styled.div`
  text-align: center;
  margin-top: 14px;
  margin-bottom: 25px;
  font-size: 32px;
  color: black;
  font-family: 'SUITESemiBold';
  font-weight: 600;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//회원 가입 버튼
export const LoginBtn = styled.button`
  border-radius: 5px;
  width: 306px;
  height: 46px;
  font-size: 16px;
  color: black;
  font-weight: 400;
  margin-top: 15px;
  background-color: #d1d1d1;
  cursor: pointer;

  background: #7d8bae;
  color: white;

  font-family: 'SUITERegular';
`;

export const ThirdBox = styled.div`
  display: flex;
  align-items: center;
`;
export const RegisterBtn = styled.button`
  background-color: transparent;
  padding-left: 5px;
  font-weight: 300;
  font-family: 'SUITEBold';
  margin: auto;
  margin-top: 16px;
`;

export const FindBox = styled.div`
  display: flex;
`;

export const Validityfontbox = styled.div`
  border: none;
  font-family: 'SUITERegular';
  font-size: 10px;
  position: relative;
  right: 10px;
  margin-top: 5px;
  outline: none;
  color: #7d8bae;
  margin-left: 17px;
`;

//유효성검사시 글자

// `;
export const ValidityEmailCircle = styled.img<{ validateEmailColor: boolean }>`
  background-color: ${(Props) =>
    Props.validateEmailColor ? '#1BE08D' : '#FF8F8F'};
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-top: 10px;

  z-index: 99;
`;

export const ValidityNameCircle = styled.img<{
  validateDisplaynameColor: boolean;
}>`
  background-color: ${(Props) =>
    Props.validateDisplaynameColor ? '#1BE08D' : '#FF8F8F'};
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-top: 10px;

  z-index: 99;
`;

export const VConfirmCircle = styled.img<{
  validatePwColor: boolean;
}>`
  background-color: ${(Props) =>
    Props.validatePwColor ? '#1BE08D' : '#FF8F8F'};
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-top: 10px;

  z-index: 99;
`;

export const PassConfirmCircle = styled.img<{
  validatePwconfirmColor: boolean;
}>`
  background-color: ${(Props) =>
    Props.validatePwconfirmColor ? '#1BE08D' : '#FF8F8F'};
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-top: 10px;

  z-index: 99;
`;

export const CheckBox = styled.div`
  display: flex;
`;
export const CheckPassBox = styled.div`
  display: flex;
  position: relative;
`;
export const CheckEmailBox = styled.div`
  display: flex;
  position: relative;
`;
export const CheckPassWordBtn = styled.div`
  width: 20px;
  height: 15px;
  position: absolute;
  left: 248px;
  bottom: 10px;
  cursor: pointer;
  :active {
    width: 20px;
    height: 15px;
  }
`;

export const OpenPassCnCheckBtn = styled.div`
  width: 22px;
  height: 27px;
  position: absolute;
  left: 247px;
  bottom: 5px;
  cursor: pointer;
  :active {
    width: 22px;
    height: 27px;
  }
`;

export const OpenCheckBtn = styled.div`
  width: 22px;
  height: 27px;
  position: absolute;
  left: 247px;
  bottom: 5px;
  cursor: pointer;
  :active {
    width: 22px;
    height: 27px;
  }
`;

export const DeleteCheckCnBtn = styled.div`
  width: 13px;
  height: 13px;
  position: relative;
  left: 280px;
  bottom: 12px;
  cursor: pointer;
  :active {
    width: 13px;
    height: 13px;
  }
`;
export const DeleteEmailCheckBtn = styled.div`
  width: 13px;
  height: 13px;
  position: relative;
  left: 280px;
  bottom: 12px;
  cursor: pointer;
  :active {
    width: 13px;
    height: 13px;
  }
`;

export const CheckNickBox = styled.div`
  position: relative;
`;

export const DeleteNameCheckBtn = styled.div`
  width: 13px;
  height: 13px;
  position: absolute;
  left: 280px;
  bottom: -2px;
  cursor: pointer;
  :active {
    width: 13px;
    height: 13px;
  }
`;

export const DeletePassCheckBtn = styled.div`
  width: 13px;
  height: 13px;
  position: relative;
  left: 280px;
  bottom: 12px;
  cursor: pointer;
  :active {
    width: 13px;
    height: 13px;
  }
`;
export const ValidBox = styled.div`
  display: flex;
  width: 306px;
  height: 15px;
  margin: auto;
`;
export const EtcBtn = styled.div`
  margin-top: 40px;
`;
export const CheckcnBox = styled.div`
  position: relative;
`;

export const CheckCnPassBtn = styled.div`
  width: 20px;
  height: 15px;
  position: absolute;
  left: 247px;
  bottom: 11px;
  cursor: pointer;
  :active {
    width: 20px;
    height: 15px;
  }
`;

export const CheckIconright = styled.img``;
export const Checkeye = styled.img``;
