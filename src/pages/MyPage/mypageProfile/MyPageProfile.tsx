import styled from 'styled-components';

const MyPageProfile = () => {
  return (
    <MyPageProfileWrap>
      <UserProfileContainer>
        <UserProfileImg />
        <UserProfileImgLabel htmlFor='fileInput'>
          <UserProfileEditIcon src={'/assets/editicon.png'} />
        </UserProfileImgLabel>
        <UserProfileImgBtn type='file' id='fileInput' />
      </UserProfileContainer>

      <UserProfileInfoContainer>
        <UserNickNameBox>
          <UserNickName>김철수</UserNickName>
          <UserNickNameBtn />
        </UserNickNameBox>

        <UserWalkCountBox>
          <UserWalkCountIcon>아이콘</UserWalkCountIcon>
          <UserWalkCountText>
            총 {20}번의 산책을 완료하셨어요!
          </UserWalkCountText>
        </UserWalkCountBox>

        <UserIntroduceAreaBox>
          <UserIntroduceText>자기 소개를 입력해주세요</UserIntroduceText>
          <UserIntroduceBtn />
        </UserIntroduceAreaBox>
      </UserProfileInfoContainer>
    </MyPageProfileWrap>
  );
};
export default MyPageProfile;

const MyPageProfileWrap = styled.div`
  width: 835px;
  height: 203px;
  margin: 15px auto 0 auto;

  display: flex;
  flex-direction: row;
`;
const UserProfileContainer = styled.div`
  width: 25%;
  height: 100%;
  margin: auto;

  position: relative;

  justify-content: center;
  align-items: center;

  border: 1px solid black;
`;
const UserProfileImg = styled.img`
  width: 100%;
  height: 100%;
`;
const UserProfileImgLabel = styled.label``;
const UserProfileEditIcon = styled.img`
  width: 50px;
  height: 50px;
  right: 0px;
  bottom: 0px;

  cursor: pointer;

  position: absolute;
`;
const UserProfileImgBtn = styled.input`
  display: none;
`;
const UserProfileInfoContainer = styled.div`
  width: 75%;
  height: 100%;
  margin-left: 20px;
`;
const UserNickNameBox = styled.div`
  width: 30%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #eef1f7;
`;
const UserNickName = styled.div`
  font-size: 36px;
`;
const UserNickNameBtn = styled.button`
  width: 50px;
  height: 50px;

  background-image: url('../../../assets/editicon.png');
  background-size: cover;
`;
const UserWalkCountBox = styled.div`
  width: 50%;
  margin-bottom: 15px;

  display: flex;
`;
const UserWalkCountIcon = styled.div``;
const UserWalkCountText = styled.div``;
const UserIntroduceAreaBox = styled.div`
  width: 100%;
  height: 49%;

  display: flex;
  position: relative;

  background: #eef1f7;
`;
const UserIntroduceText = styled.div`
  width: 100%;
`;
const UserIntroduceBtn = styled.button`
  width: 50px;
  height: 50px;
  bottom: 0px;
  right: 0px;

  position: absolute;

  background-image: url('../../../assets/editicon.png');
  background-size: cover;
`;
