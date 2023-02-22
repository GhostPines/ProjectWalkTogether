import React, { useCallback } from 'react';
import styled from 'styled-components';
import LikePage from './LikePost';
import WhatIWorte from './WhatIWrote';
import { AiFillEdit } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';
import { useState } from 'react';
import {
  authService,
  storage,
  onUserStateChange,
  dbService,
} from '../../common/firebase';
import { updateProfile } from 'firebase/auth';
import { useEffect } from 'react';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { FiCheck } from 'react-icons/fi';
import { BsFillBrushFill } from 'react-icons/bs';
import { FaPen } from 'react-icons/fa';
import CommonStyles from './../../styles/CommonStyles';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { BsFillHandThumbsUpFill } from 'react-icons/bs';
import { FaHandPeace } from 'react-icons/fa';
import { FaHandPaper } from 'react-icons/fa';
import { BsFillCloudUploadFill } from 'react-icons/bs';
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  getDoc,
  query,
} from 'firebase/firestore';

interface UserInfoTypes {
  nickname: string | null;
  email: string;
  photoUrl: string | null;
  photoBackImg: string | null;
  userid: string | null;
}
const KEY = `firebase:authUser:${process.env.REACT_APP_FIREBASE_API_KEY}:[DEFAULT]`;

const MyPage = () => {
  //범인
  const uid = JSON.parse(sessionStorage.getItem(KEY));
  console.log(uid);
  const [_user, _setUser] = useState<any>([]);

  const [imgChange, setImgChange] = useState<any>();
  const [user, setUser] = useState<any>(false);
  const [userInfo, setUserInfo] = useState<UserInfoTypes>();
  const [photoURL, setPhotoURL] = useState<any>(user?.photoURL);

  const [photoBackImg, setPhotoBackImg] = useState<any>(user?.photoURL);

  const [text, setText] = useState('');
  const [newNickName, setNewNickName] = useState(user?.displayName);
  const [showNickNameChangeBtn, setShowNickNameChangeBtn] = useState(false);

  const [Introduce, setIntroduce] = useState('');
  const [newIntroduce, setNewIntroduce] = useState(user?.displayName);
  const [showIntroduceChangeBtn, setShowIntroduceChangeBtn] = useState(false);

  const [showBackImgbtn, setShowBackImgbtn] = useState(false);
  const [inputConvert, setInputConvert] = useState(false);

  const [imgBtn, setImgBtn] = useState(false);
  const getUser = (user) => {
    setUserInfo({
      nickname: user?.displayName ?? '익명',
      email: user?.email ?? '',
      photoUrl: user?.photoURL ? user?.photoURL : '/assets/default_profile.png',
      photoBackImg: user?.photoURL ?? '',
      userid: user.uid,
    });

    setImgChange(user);
    setUser(true);
  };

  const uploadBackImg = async (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPhotoBackImg(reader.result);
    };
    const uploaded_file = await uploadBytes(
      ref(storage, `images/${e.target.files[0].name}`),
      e.target.files[0]
    );
    const file_url = await getDownloadURL(uploaded_file.ref);
    updateProfile(imgChange, {
      photoURL: file_url,
    })
      .then(() => {})
      .catch((error) => {
        console.log(error);
        alert('이미지 업로드 실패');
      });
  };
  const uploadFB = async (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPhotoURL(reader.result);
    };
    const uploaded_file = await uploadBytes(
      ref(storage, `images/${e.target.files[0].name}`),
      e.target.files[0]
    );
    const file_url = await getDownloadURL(uploaded_file.ref);

    updateProfile(imgChange, {
      photoURL: file_url,
    })
      .then(() => {})
      .catch((error) => {
        alert('이미지 업로드 실패');
      });
  };
  const editNickName = async () => {
    setNewNickName(userInfo.nickname);
    await updateProfile(imgChange, { displayName: imgChange.nickname })
      .then(() => {
        alert('닉네임 변경 완료');
      })
      .catch((error) => {
        alert('닉네임 변경 실패');
      });
  };
  //유저컬렉션에서 유저 아이디가 포함된 문서를 가지오는 코드
  const getTeamID = async () => {
    const userDoc = await getDoc(doc(dbService, 'user', uid.uid));
    // const q=query(collection(dbService,'user',uid))
    // const snapshot=await getDocs(q)

    _setUser(userDoc.data());
  };
  useEffect(() => {
    onUserStateChange(getUser);
    getTeamID();
  }, []);
  console.log(_user);
  const handleNickNameBtn = async () => {
    console.log('클릭');
    const washingtonRef = doc(dbService, 'user', user.userid);
    await updateDoc(washingtonRef, { nickname: text })
      .then(() => {
        editNickName();
        setInputConvert(false);
        alert('닉네임 변경 완료');
      })
      .catch((error) => {
        alert('닉네임 변경 실패');
      });
  };

  const editIntroduce = async () => {
    setNewIntroduce(Introduce);
    await updateProfile(imgChange, { displayName: Introduce })
      .then(() => {
        alert('자기소개 변경 완료');
      })
      .catch((error) => {
        alert('자기소개 변경 실패');
      });
  };
  const handleIntroduceBtn = () => {
    editIntroduce();
    setShowIntroduceChangeBtn(false);
  };
  const ConvertImgBtn = () => {
    setImgBtn(!imgBtn);
  };
  if (user) {
    return (
      <CommonStyles>
        {user === user ? (
          <CommonStyles>
            <BannerImgWrap>
              <BannerImg
                src={
                  userInfo.photoBackImg
                    ? userInfo.photoBackImg
                    : '/assets/thumbnailImg.png'
                }
              />
              {imgBtn ? (
                <ImgUploadModal>
                  <UploadBox>
                    <label htmlFor='back'>
                      <input
                        type='file'
                        onChange={uploadBackImg}
                        style={{ display: 'none' }}
                        accept='image/*'
                        id='back'
                      ></input>
                      <UploadImgIcon />
                    </label>
                  </UploadBox>
                  <div>1500픽셀 이상의 이미지가 가장 이상적입니다.</div>
                </ImgUploadModal>
              ) : (
                <></>
              )}
              <ImgEditBtn onClick={ConvertImgBtn} />
            </BannerImgWrap>
            <ImgNickNameMannerWrap>
              <ImgAndNameWrap>
                <ImgAndNameContainer>
                  <ImgWrap>
                    <ImgChange
                      src={
                        userInfo.photoUrl
                          ? userInfo.photoUrl
                          : '/assets/default_profile.png'
                      }
                    />
                    <label htmlFor='img'>
                      <input
                        type='file'
                        onChange={uploadFB}
                        accept='image/*'
                        id='img'
                        style={{ display: 'none' }}
                      ></input>
                      <ImgChangeBtn />
                    </label>
                  </ImgWrap>
                  <NameContainer>
                    <NickNameWrap>
                      {inputConvert ? (
                        <>
                          <InputStyle
                            type='text'
                            placeholder='이름입력'
                            onChange={(event) => {
                              if (event.target.value.length > 5) {
                                alert('5자리 제한');
                                event.target.value = event.target.value.slice(
                                  0,
                                  5
                                );
                              }
                              setText(event.target.value);
                            }}
                          />
                          <NickNameChangeBtn onClick={handleNickNameBtn} />
                        </>
                      ) : (
                        <NickNameArea>
                          <NewNickName>{_user.nickname}</NewNickName>
                          <EditIcon
                            onClick={() => {
                              setInputConvert(!inputConvert);
                            }}
                          />
                        </NickNameArea>
                      )}
                    </NickNameWrap>
                    <DoneCnt>총 20번의 산책을 완료하셨어요!</DoneCnt>
                    {showIntroduceChangeBtn ? (
                      <>
                        <IntroduceInput
                          placeholder='자기소개를 입력해주세요.'
                          onChange={(event) => {
                            // if (event.target.value.length > 30) {
                            //   alert('30자리 제한');
                            //   event.target.value = event.target.value.slice(
                            //     0,
                            //     30
                            //   );
                            // }
                            setIntroduce(event.target.value);
                          }}
                        />
                        <CheckIcon onClick={handleIntroduceBtn}>변경</CheckIcon>
                      </>
                    ) : (
                      <MyIntroduce>
                        <Two>{newIntroduce ?? '자기소개'}</Two>
                        <EditIntroduceIcon
                          onClick={() =>
                            setShowIntroduceChangeBtn(!showIntroduceChangeBtn)
                          }
                        />
                      </MyIntroduce>
                    )}
                  </NameContainer>
                </ImgAndNameContainer>
              </ImgAndNameWrap>
            </ImgNickNameMannerWrap>
            <MannerWrap>
              <MannerContainer>
                <ReceiveScore>총 20건의 후기를 받으셨어요.</ReceiveScore>
                {/* <ReceiveManner>받은 매너 평가</ReceiveManner> */}
                <MannerBox>
                  <MannerDetail>
                    <ThumbUp />
                    <MannerScore>2</MannerScore>
                    <MannerComment>친절하고 매너가 좋아요!</MannerComment>
                  </MannerDetail>
                  <MannerDetail>
                    <HandPeace />
                    <MannerScore>5</MannerScore>
                    <MannerComment>재미있어요!</MannerComment>
                  </MannerDetail>
                  <MannerDetail>
                    <HeartIcon />
                    <MannerScore>1</MannerScore>
                    <MannerComment>자상하고 편안했어요!</MannerComment>
                  </MannerDetail>
                  <MannerDetail>
                    <HandPaper />
                    <MannerScore>2</MannerScore>
                    <MannerComment>대화의 폭이 넓었어요!</MannerComment>
                  </MannerDetail>
                </MannerBox>
              </MannerContainer>
            </MannerWrap>
            <MyPageWrapper>
              <ChangePost>
                <GoMyPost>내가 쓴 글</GoMyPost>
                <GoLiked>찜</GoLiked>
              </ChangePost>
              <LikedWrapper>
                <LikePage />
              </LikedWrapper>
            </MyPageWrapper>
          </CommonStyles>
        ) : (
          <CommonStyles>
            <BannerImgWrap>
              <BannerImg
                src={photoBackImg ? photoBackImg : '/assets/thumbnailImg.png'}
              />
            </BannerImgWrap>
            <ImgNickNameMannerWrap>
              <ImgAndNameWrap>
                <ImgAndNameContainer>
                  <ImgWrap>
                    <ImgChange
                      src={photoURL ? photoURL : '/assets/default_profile.png'}
                    />
                  </ImgWrap>
                  <NameContainer>
                    <NickNameWrap>
                      {newNickName ?? '익명'}
                      <SetNameWrap>
                        {showNickNameChangeBtn === true ? (
                          <>
                            <InputStyle
                              type='text'
                              placeholder='변경할 닉네임을 입력해주세요.'
                              value={text}
                              onChange={(event) => {
                                setText(event.target.value);
                              }}
                            />
                            <CheckIcon
                              onClick={() => {
                                handleNickNameBtn();
                              }}
                            >
                              변경
                            </CheckIcon>
                          </>
                        ) : null}
                      </SetNameWrap>
                    </NickNameWrap>
                    <DoneCnt>서울특별시 강남구 대치동</DoneCnt>
                    <MyIntroduce>자기소개</MyIntroduce>
                  </NameContainer>
                </ImgAndNameContainer>
              </ImgAndNameWrap>
            </ImgNickNameMannerWrap>
            <MannerWrap>
              <MannerContainer>
                <ReceiveScore>총 20건의 후기를 받으셨어요.</ReceiveScore>
                {/* <ReceiveManner>받은 매너 평가</ReceiveManner> */}
                <MannerBox>
                  <MannerDetail>
                    <One>
                      <ThumbUp />
                      <MannerScore>2</MannerScore>
                      <MannerComment>친절하고 매너가 좋아요!</MannerComment>
                    </One>
                  </MannerDetail>
                  <MannerDetail>
                    <HandPeace />
                    <MannerScore>5</MannerScore>
                    <MannerComment>재미있어요!</MannerComment>
                  </MannerDetail>
                  <MannerDetail>
                    <HeartIcon />
                    <MannerScore>1</MannerScore>
                    <MannerComment>자상하고 편안했어요!</MannerComment>
                  </MannerDetail>
                  <MannerDetail>
                    <HandPaper />
                    <MannerScore>2</MannerScore>
                    <MannerComment>친절하고 매너가 좋아요!</MannerComment>
                  </MannerDetail>
                </MannerBox>
              </MannerContainer>
            </MannerWrap>
            <MyPageWrapper>
              <ChangePost>
                <GoMyPost>내가 쓴 글</GoMyPost>
                <GoLiked>찜</GoLiked>
              </ChangePost>
              <LikedWrapper>
                <LikePage />
              </LikedWrapper>
            </MyPageWrapper>
          </CommonStyles>
        )}
      </CommonStyles>
    );
  } else {
    return <></>;
  }
};
const ReceiveScore = styled.div``;
const NickNameArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  align-items: center;
`;
const One = styled.div`
  position: absolute;
  display: flex;
  width: 232px;
  height: 48px;
  left: 79px;
  top: 601px;

  /* b */

  background: #eef1f7;
  border-radius: 36px;
`;
const UploadBox = styled.div`
  border: 1px solid black;
  padding: 10px;
`;
const NewNickName = styled.div`
  width: 150px;
`;
const IntroduceInput = styled.textarea`
  width: 653px;
  height: 70px;
  border-style: none;
  background-color: #eef1f7;
  outline: none;
  font-size: 20px;
  overflow: hidden;
  word-break: break-all;
  &::placeholder {
    font-size: 20px;
    color: #494848;
  }
`;
const UploadImgIcon = styled(BsFillCloudUploadFill)`
  font-size: 40px;
  margin-left: 40%;
  cursor: pointer;
`;
const TestStyle = styled.div``;
const ImgUploadModal = styled.div`
  margin-left: 650px;
  margin-top: -120px;
  position: absolute;
  background-color: white;
  padding: 10px;
  border: 2px solid black;
`;

const ImgNickNameMannerWrap = styled.div`
  width: 1024px;
`;
const BannerImgWrap = styled.div`
  width: 1024px;
  height: 288px;
`;
const BannerImg = styled.img`
  width: 1024px;
  height: 288px;
  position: relative;
`;
const ImgEditBtn = styled(BsFillBrushFill)`
  font-size: 40px;
  cursor: pointer;
  color: red;
  margin-left: 950px;
  margin-top: -50px;
  position: absolute;
`;
const ImgChangeBtn = styled(FaPen)`
  position: absolute;
  cursor: pointer;
  margin-left: 180px;
  margin-top: -25px;
  color: red;
`;

const DoneCnt = styled.div``;
const MyIntroduce = styled.div`
  flex-wrap: wrap;
  font-size: 20px;
  position: relative;
  display: flex;
  justify-content: flex-start;
  width: 653px;
  height: 70px;
  background-color: #eef1f7;
  color: #7d8bae;
  border-radius: 4px;
`;
const Two = styled.p`
  word-wrap: break-word;
  overflow: hidden;
`;
const InputStyle = styled.input`
  width: 150px;
  height: 40px;
  margin-left: -10px;
  border-radius: 10px;
  border-style: none;
  font-size: 36px;
  text-align: center;
  ::placeholder {
    font-size: 20px;
    color: #494848;
  }
`;
const InputIntroduceStyle = styled.input`
  padding: 10px;
  background-color: #cab0c0;
  border-radius: 10px;
  border-style: none;
  width: 60px;
  font-size: 15px;
  font-weight: 700;
  color: white;
  height: 20px;
  ::placeholder {
    font-size: 13px;
    color: #494848;
  }
`;
const SetNameWrap = styled.div`
  display: flex;
`;
const NickNameChangeBtn = styled(FiCheck)``;
const CheckIcon = styled(FiCheck)`
  font-size: 30px;
  margin-left: 620px;
  margin-top: -30px;
  position: absolute;
  cursor: pointer;
  &:hover {
    color: #ff0098;
  }
`;
const MyPageWrapper = styled.div`
  margin: auto 40px;
`;
const ImgAndNameContainer = styled.div`
  display: flex;
`;
const ImgAndNameWrap = styled.div`
  padding: 10px;
  margin: auto 40px;
`;
const ImgWrap = styled.div``;
const ImgChange = styled.img`
  width: 163px;
  height: 163px;
  margin: auto 40px;
  position: relative;
`;
const NameContainer = styled.div`
  width: 646px;
  left: 265px;
  top: 374px;
`;
const NickNameWrap = styled.div`
  /* display: flex;
  align-items: center; */
  font-size: 40px;
`;
const NameChange = styled.div`
  font-size: 60px;
`;
const EditIcon = styled(AiFillEdit)`
  margin-left: 10px;

  cursor: pointer;
`;
const EditIntroduceIcon = styled(AiFillEdit)`
  font-size: 30px;
  right: 0;
  bottom: 0;

  cursor: pointer;
  position: absolute;
`;
const MannerWrap = styled.div`
  margin: auto 40px;
`;
const MannerContainer = styled.div`
  margin: auto 40px;
`;
const ReceiveManner = styled.p`
  font-size: 60px;
`;
const MannerBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const MannerDetail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 40px;
  border-radius: 40px;
  background-color: #eef1f7;
`;
const ThumbUp = styled(BsFillHandThumbsUpFill)`
  font-size: 30px;
  margin: 10px;
`;
const HeartIcon = styled(BsFillSuitHeartFill)`
  font-size: 30px;
  margin: 10px;
`;
const HandPeace = styled(FaHandPeace)`
  font-size: 30px;
  margin: 10px;
`;
const HandPaper = styled(FaHandPaper)`
  font-size: 30px;
  margin: 10px;
`;

const MannerScore = styled.p`
  font-size: 12px;
  padding-left: 10px;
  padding-right: 10px;
`;
const MannerComment = styled.div`
  font-size: 12px;
  padding: 10px;
`;
const ChangePost = styled.div`
  display: flex;
  margin: auto 40px;
  font-size: 20px;
  margin-bottom: 20px;
  position: relative;
  text-decoration: none;
`;
const GoMyPost = styled.div`
  cursor: pointer;
  color: #333;
  text-decoration: none;
  display: inline-block;
  padding: 15px 0;
  position: relative;
  &::after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #ffb000;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover::after {
    width: 100%;
    left: 0;
  }
`;
const GoLiked = styled.div`
  margin-left: 100px;
  cursor: pointer;
  color: #333;
  text-decoration: none;
  display: inline-block;
  padding: 15px 0;
  position: relative;
  &::after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #ffb000;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover::after {
    width: 100%;
    left: 0;
  }
`;

export const LikedWrapper = styled.div``;
export const LikedContainer = styled.div``;
const LikePostTitle = styled.h1`
  margin: 0 0 0.25rem;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.46;
  letter-spacing: -0.0375rem;
  text-align: left;
  color: #212121;
  padding: 0 1.1875rem;
`;
export default MyPage;
