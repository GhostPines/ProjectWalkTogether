import styled from 'styled-components';

const MyPageReView = () => {
  const a = [1, 2, 3];
  return (
    <MyPageReViewWrap>
      <MyPageReViewText>총 {20}건의 후기를 받으셨어요.</MyPageReViewText>

      <MyPageReViewListContainer>
        {a.map((el) => {
          return (
            <ReViewCard>
              <UserEvaluationImg />
              <UserEvaluationScore>{7}</UserEvaluationScore>
              <UserEvaluationText>친절하고 매너가 좋아요!</UserEvaluationText>
            </ReViewCard>
          );
        })}
        {/* <ReViewCard>
          <UserEvaluationImg />
          <UserEvaluationScore>{7}</UserEvaluationScore>
          <UserEvaluationText>친절하고 매너가 좋아요!</UserEvaluationText>
        </ReViewCard> */}
      </MyPageReViewListContainer>
    </MyPageReViewWrap>
  );
};
export default MyPageReView;
const MyPageReViewWrap = styled.div`
  width: 868px;
  height: 94px;

  margin: 28px auto 0 95px;
`;
const MyPageReViewText = styled.div`
  height: 40%;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #7d8bae;
`;
const MyPageReViewListContainer = styled.div`
  height: 80%;

  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ReViewCard = styled.div`
  height: 50px;
  margin-right: 15px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 30px;
  background: #eef1f7;
`;
const UserEvaluationImg = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 24px;
  background: red;
`;
const UserEvaluationScore = styled.div`
  margin-left: 13px;
  margin-right: 13px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
`;
const UserEvaluationText = styled.div`
  width: 140px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #7d8bae;
`;
