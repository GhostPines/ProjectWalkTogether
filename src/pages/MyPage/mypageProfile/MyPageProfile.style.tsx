import styled from 'styled-components';

export const MyPageProfileWrap = styled.div`
  /* width: 100%; */
  height: 163px;
  margin: 15px 78px 0px 78px;

  display: flex;
  flex-direction: row;
`;
export const UserProfileContainer = styled.div`
  /* width: 25%;
  height: 100%;
  margin: auto; */

  position: relative;

  justify-content: center;
  align-items: center;

  /* border: 1px solid black; */
`;
export const UserProfileImg = styled.img`
  /* width: 100%;
  height: 100%; */
  width: 163px;
  height: 163px;
  /* width: 66px;
  height: 60px; */
`;
export const UserProfileImgLabel = styled.label``;
export const UserProfileEditIcon = styled.img`
  width: 30px;
  height: 30px;
  right: 9px;
  bottom: 9px;
  cursor: pointer;
  position: absolute;
`;
export const UserProfileImgBtn = styled.input`
  display: none;
`;
export const UserProfileInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 20px;
  position: relative;
`;
export const UserNickNameBox = styled.div`
  /* width: fit-content; */
  /* width: 80%; */
  justify-content: center;
  align-items: center;
`;
export const UserNickName = styled.div`
  font-family: 'SUITERegular';
  font-size: 36px;
`;
export const UserNickNameBtn = styled.button`
  width: 50px;
  height: 50px;

  background-image: url('../../../assets/editicon.png');
  background-size: cover;
`;
export const UserWalkCountBox = styled.div`
  display: flex;
  height: 15px;
  margin-bottom: 13px;
`;
export const UserWalkCountIcon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`;
export const UserWalkCountText = styled.p`
  font-family: 'SUITERegular';
  font-size: 12px;
`;
export const UserIntroduceAreaBox = styled.div`
  font-family: 'SUITERegular';
  width: 100%;
  height: 100px;
  /* height: 75px; */
  display: flex;
  position: relative;
  background: #eef1f7;
  border-radius: 4px;
`;
export const UserIntroduceText = styled.div`
  font-family: 'SUITERegular';
  padding: 8px 15px 9px;
  font-size: 15px;
`;
export const UserIntroduceBtn = styled.button`
  width: 50px;
  height: 50px;
  bottom: 0px;
  right: 0px;

  position: absolute;

  background-image: url('../../../assets/editicon.png');
  background-size: cover;
`;
export const UserWrapper = styled.div`
  width: 163px;
  height: 163px;
  background: #eeeeee;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const UserModifyBtn = styled.button`
  position: absolute;
  width: 104px;
  height: 40px;
  background: #ffffff;
  /* coral */
  margin-left: 545px;

  border: 1px solid #ff8f8f;
  border-radius: 4px;
  outline: none;

  font-family: 'SUITERegular';
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ff8f8f;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  letter-spacing: -2px;
`;
export const UserModifyBtnIcon = styled.img`
  margin-left: 8px;
  width: 20px;
  height: 20px;
`;
export const MypageMoreBtn = styled.img`
  width: 10px;
  height: 15px;
  margin-top: 10px;
  position: absolute;
  margin-left: 675px;
  object-fit: contain;
`;
export const MyPageButton = styled.div``;
export const ChangeNickName = styled.input`
  width: 20%;
  height: 44px;
  background: #eef1f7;
  border-radius: 4px;
  font-family: 'SUITERegular';
  font-size: 26px;
  line-height: 32px;
  border: none;
  padding: 8px 10px;
  margin-bottom: 4px;

  &:focus {
    outline: 2px solid #7d8bae;
  }
`;
export const ChangeContent = styled.textarea`
  /* position: relative; */
  width: 100%;
  /* height: 75px; */
  border-radius: 4px;
  overflow: hidden;
  overflow-wrap: break-word;
  border: none;
  padding: 8px 15px 9px;
  font-family: 'SUITERegular';
  font-size: 15px;
  line-height: 21px;
  overflow: auto;
  /* transition: border-color 0.1s, background-color 0.1s; */
  resize: none;
  /* border: 1px solid #3d3a3a; */
  &:focus {
    outline: 2px solid #7d8bae;
  }

  background: #eef1f7;
  border-radius: 4px;
`;
export const ShowCheckNickName = styled.p`
  font-family: 'SUITERegular';
  font-size: 10px;
  line-height: 21px;
  color: #7d8bae;
  /* line-height: 21px; */
`;
export const ShowIcon = styled.img`
  width: 5px;
  height: 5px;
  margin-right: 5px;
`;
export const ShowTitleFlex = styled.div`
  display: flex;
  align-items: center;
`;
