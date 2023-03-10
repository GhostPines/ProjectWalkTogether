import { async } from '@firebase/util';
import { updateProfile } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { authService, dbService, storage } from '../../../common/firebase';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import { currentUserUid, username } from '../../../Rocoil/Atom';
import MypageDropBox from './MypageDropBox';
import useDetectClose from '../../../hooks/useDetectClose';
import * as S from './MyPageProfile.style';
import { UserNickName } from '../../../Rocoil/Atom';

interface Props {
  userInfo: any;
}
//부모와 자식컴포넌트가있다
//자식컴포넌트에서 데이터를 따로 받아오다보니 데이터 렌더링이 손실
//데이터를 최상위로 끌고올라와서 부모데이터를 자식 props로 전달
//새로고침해도 괜찮다.
const MyPageProfile = ({ userInfo }: Props) => {
  const navigate = useNavigate();

  const { id, email, nickname, profileImg, uid } = userInfo;

  const [newname, setNewname] = useState('');
  const [newmessage, setNewmessage] = useState('');
  const [name, setName] = useRecoilState(UserNickName);
  const [message, setMessage] = useState('');

  const setUsername = useSetRecoilState(username);
  const userUID = useRecoilValue(currentUserUid);
  const [isediting, setIsEditing] = useState(false);
  const [nameswitch, setNameSwitch] = useState(false);
  const [messageswitch, setMessagesSwitch] = useState(false);
  const [imageURL, setImageURL] = useState<string>('');

  // 모달창
  const [showBox, setShowBox] = useState<any>(false);

  // 모달 외부 클릭 시 닫기 customhook
  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);
  useEffect(() => {
    getImageURL();
  }, [uid]);
  const getImageURL = async () => {
    const docRef = doc(dbService, 'user', uid);
    const docSnap = await getDoc(docRef);

    setImageURL(docSnap.data().profileImg);
  };
  const onImageChange = (
    e: React.ChangeEvent<EventTarget & HTMLInputElement>
  ) => {
    e.preventDefault();
    const file = e.target.files;
    if (!file) return null;

    const storageRef = ref(
      storage,
      `files/userProfile/${authService.currentUser.uid}`
    ); //user.uid로 저장
    const uploadTask = uploadBytes(storageRef, file[0]);

    uploadTask
      .then((snapshot) => {
        console.log('a');
        e.target.value = '';
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          console.log('b');
          setImageURL(downloadURL);
          updateDoc(doc(dbService, 'user', authService.currentUser.uid), {
            profileImg: downloadURL,
          });
          updateProfile(authService.currentUser, {
            photoURL: downloadURL,
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onEditBtn = async () => {
    if (!isediting) {
      setNewname(authService.currentUser.displayName);
      const docSnap = await getDoc(doc(dbService, 'user', uid));
      setNewmessage(docSnap.data().introduce);
    } else {
      updateProfile(authService.currentUser, {
        displayName: newname,
      });
      updateDoc(doc(dbService, 'user', uid), {
        nickname: newname,
        introduce: newmessage,
      });

      setName(newname);
      setMessage(newmessage);
      setUsername(newname);
    }
    //textfiled;
    sessionStorage.setItem('id', newname);

    navigate('/mypage');
    setIsEditing(!isediting);
  };

  return (
    <S.MyPageProfileWrap>
      <UserProfileContainer>
        <UserProfileImgLabel htmlFor='fileInput'>
          <UserProfileImg src={profileImg} />
          <UserProfileEditIcon src={'/assets/editicon.png'} />
          <UserProfileImgBtn
            type='file'
            id='fileInput'
            onChange={onImageChange}
          />
        </UserProfileImgLabel>
      </UserProfileContainer>

      <S.UserProfileInfoContainer>
        {uid === userUID && (
          <S.UserModifyBtn onClick={onEditBtn}>
            {!isediting ? (
              <>
                수정하기
                <S.UserModifyBtnIcon
                  src={
                    require('../../../assets/MypageIcon/EditPinkIcon.svg')
                      .default
                  }
                />
              </>
            ) : (
              <>
                수정완료
                <S.UserModifyBtnIcon
                  src={require('../../../assets/MypageIcon/check2.svg').default}
                />
              </>
            )}
          </S.UserModifyBtn>
        )}

        {uid === userUID && (
          <>
            <S.MyPageButton onClick={myPageHandler} ref={myPageRef}>
              <S.MypageMoreBtn
                src={require('../../../assets/MypageIcon/More.svg').default}
                onClick={() => {
                  setShowBox(true);
                }}
              />
            </S.MyPageButton>
            {myPageIsOpen && <MypageDropBox />}
          </>
        )}
        <S.UserNickNameBox>
          {!isediting ? (
            <S.UserNickName>{!name ? '이름없음' : name}</S.UserNickName>
          ) : (
            <>
              <S.ChangeNickName
                value={newname}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (e.target.value.length > 5) {
                    setNameSwitch(true);
                  } else {
                    setNewname(e.currentTarget.value);
                  }
                }}
              />
            </>
          )}
        </S.UserNickNameBox>
        {nameswitch && (
          <S.ShowTitleFlex>
            <S.ShowIcon
              src={require('../../../assets/MypageIcon/Dot.svg').default}
            />
            <S.ShowCheckNickName>
              닉네임은 5글자를 넘을 수 없습니다.
            </S.ShowCheckNickName>
          </S.ShowTitleFlex>
        )}
        {/* 
        <UserWalkCountBox>
          <UserWalkCountIcon>아이콘</UserWalkCountIcon>
          <UserWalkCountText>
            총 {20}번의 산책을 완료하셨어요!
          </UserWalkCountText>
        </UserWalkCountBox>

        <UserIntroduceAreaBox>
          {!isediting ? (
            <UserIntroduceText>{message}</UserIntroduceText>
          ) : (
            <textarea
              value={newmessage}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setNewmessage(e.currentTarget.value);
              }}
            ></textarea>
          )}
        </UserIntroduceAreaBox> */}
        <S.UserIntroduceAreaBox>
          {!isediting ? (
            <S.UserIntroduceText>{message}</S.UserIntroduceText>
          ) : (
            <S.ChangeContent
              placeholder='자기소개를 입력해주세요'
              value={newmessage}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                if (e.currentTarget.value.length > 120) {
                  setMessagesSwitch(true);
                } else {
                  setNewmessage(e.currentTarget.value);
                }
              }}
            />
          )}
        </S.UserIntroduceAreaBox>
        {messageswitch && (
          <S.ShowTitleFlex>
            <S.ShowIcon
              src={require('../../../assets/MypageIcon/Dot.svg').default}
            />
            <S.ShowCheckNickName>
              자기소개는 120글자를 넘을 수 없습니다.
            </S.ShowCheckNickName>
          </S.ShowTitleFlex>
        )}
      </S.UserProfileInfoContainer>
    </S.MyPageProfileWrap>
  );
};
export default MyPageProfile;

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

const UserNickNameBox = styled.div`
  width: 20%;

  justify-content: center;
  align-items: center;

  background: #eef1f7;
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
