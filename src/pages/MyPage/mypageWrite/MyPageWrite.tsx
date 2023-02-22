import styled from 'styled-components';

const MyPageWrite = () => {
  return (
    <MyPageWriteWrap>
      <MyPageWriteTapContainer>
        <UserWriteBtn>내가 쓴 글</UserWriteBtn>
        <UserInterest>찜</UserInterest>
      </MyPageWriteTapContainer>
      <div></div>
    </MyPageWriteWrap>
  );
};
export default MyPageWrite;

const MyPageWriteWrap = styled.div`
  width: 868px;
  height: 735px;
  margin: 0 auto 0 95px;
`;
const MyPageWriteTapContainer = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 40px;

  border-bottom: 3px solid #cbcbcb;
`;
const UserWriteBtn = styled.button`
  width: 90px;
  height: 47px;
  margin-right: 13px;

  background: none;
`;
const UserInterest = styled.button`
  width: 38px;
  height: 47px;

  background: none;
`;
