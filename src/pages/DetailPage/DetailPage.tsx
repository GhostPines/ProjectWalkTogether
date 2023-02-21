import * as S from './DetailPage.style';
import Comments from './Comments/Comments';
import CommonStyles from './../../styles/CommonStyles';
import { useRecoilState, useRecoilValue } from 'recoil';
import { paramsState } from './../PostPage/Hooks/Rocoil/Atom';
import { useEffect, useState } from 'react';
import {
  getDoc,
  doc,
  setDoc,
  updateDoc,
  addDoc,
  collection,
} from 'firebase/firestore';
import { authService, dbService } from './../../common/firebase';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { assert } from 'console';
import DropdownCategory from '../../components/DropdownCategoryForWritePage/DropdownCategory';
import DropBox from './DropBox/DropBox';
import { chattingusers } from './../PostPage/Hooks/Rocoil/Atom';
import React from 'react';

const DetailPage = () => {
  const navigate = useNavigate();
  // 아톰은 새로고침하면 초기화가 된다. 앱이 랜더링이 된다.
  // 리코일은 리덕스와 같아서 새로고침하면 날라간다.
  // const params = useRecoilValue(paramsState);

  // useParams를 사용하여 구조 분해 할당을 하여 사용함
  const { id } = useParams();
  // console.log(id);

  const [getPostings, setGetPostings] = useState<any>({});
  const [showBox, setShowBox] = useState<any>(false);

  //채팅방룸 만들기 // 유저정보 생성및 업데이트
  const [chattinguser, setChattinguse] = useRecoilState(chattingusers);
  const [chattingusersinfo, setChattingusersinfo] = useState('');

  // const chattingroom = chattinguser.combineId;
  const getPostingUID = getPostings.UID;
  const CurrentUid = chattinguser.CurrentUid;
  const combineId: any =
    getPostingUID > CurrentUid
      ? getPostingUID + CurrentUid
      : CurrentUid + getPostingUID;

  React.useEffect(() => {
    authService.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        const CurrentUid: any = authService.currentUser.uid;
        const MyProfile = authService.currentUser.photoURL;
        const MyNickname = authService.currentUser.displayName;
        // const combineId =
        //   getPostingUID > CurrentUid
        //     ? getPostingUID + CurrentUid
        //     : CurrentUid + getPostingUID;

        const userinfo: any = {
          // getPostingUID,
          CurrentUid,
          MyProfile,
          MyNickname,
          // combineId,
        };
        setChattinguse(() => userinfo);
        console.log('getPostingUID', getPostingUID);
      } else {
      }
    });
  }, []);

  const getPost = async () => {
    const q = doc(dbService, 'Post', id);
    const postData = await getDoc(q);
    //비동기
    setGetPostings(postData.data());
  };

  useEffect(() => {
    getPost();
  }, []);

  // getPostings 콘솔로그 찍어보면 post에 해당된 db확인 가능

  console.log('combineId:', combineId);
  // console.log(authService.currentUser);
  const date: any = Date();

  const go = async () => {
    alert('채팅창으로 이동합니다.');
    navigate('/chat');
    await setDoc(doc(dbService, 'Users', `${getPostingUID}`), {
      nickname: chattinguser.MyNickname,
      profileImg: chattinguser.MyProfile,
      // chattingroom: [{ combineId, date }],
    });
    await setDoc(
      doc(
        dbService,
        'Users',
        `${getPostingUID}`,
        'chattingroom',
        `${combineId}`
      ),
      {
        createdAT: date,
      }
    );
    await setDoc(doc(dbService, 'Users', `${CurrentUid}`), {
      nickname: chattinguser.MyNickname,
      profileImg: chattinguser.MyProfile,
      // chattingroom: [{ combineId, date }],
    });
    await setDoc(
      doc(dbService, 'Users', `${CurrentUid}`, 'chattingroom', `${combineId}`),
      {
        createdAT: date,
      }
    );
  };

  return (
    <>
      <CommonStyles>
        <S.DetailIntroWapper>
          <S.BannereURL src={getPostings.BannereURL_Posting} />
        </S.DetailIntroWapper>
        <S.Boxcontents>
          <S.BoxPhoto>
            {/*썸네일*/}
            <S.ThunmnailURL src={getPostings.ThunmnailURL_Posting} />
            <S.DetailUserName>{getPostings.Nickname}</S.DetailUserName>
            {/*인트로영역*/}
            <S.DetailIntroWrapper>
              <S.IntroCategoryTitleBtn>
                <S.IntroCategory>
                  {getPostings.Category_Posting}
                </S.IntroCategory>
              </S.IntroCategoryTitleBtn>
              <S.IntroTitle>{getPostings.Title_Posting}</S.IntroTitle>
              <S.IntroHashTag>#케이팝 #발라드 #인디</S.IntroHashTag>
              <S.IntroDes>{getPostings.Description_Posting}</S.IntroDes>
            </S.DetailIntroWrapper>
            <S.ShareBtn>
              <S.LikeWrapper>
                {/*svg로 갈아끼워야함(StyledHeartIcon)*/}
                <S.StyledHeartIcon />
                <S.HeartBtn>5</S.HeartBtn>
              </S.LikeWrapper>
              {/* 현재 user가 쓴 글인지 판별 */}
              {getPostings.UID !== authService.currentUser?.uid ? (
                <S.WalktogetherBtn onClick={go}>
                  <S.WalktogetherTitle>함께 걸을래요</S.WalktogetherTitle>
                </S.WalktogetherBtn>
              ) : (
                <S.MoreBtn
                  onClick={() => {
                    setShowBox(true);
                  }}
                />
              )}
              {/*post.id인 id를 DropBox로 넘겨준다*/}
              {showBox && (
                <DropBox
                  setShowBox={setShowBox}
                  id={id}
                  getPostings={getPostings}
                />
              )}

              {/*svg로 갈아끼워야함(SocialShareBtn)*/}
              <S.SocialShareBtn />
              {/*svg로 갈아끼워야함(ShareBtn)*/}
            </S.ShareBtn>
          </S.BoxPhoto>
        </S.Boxcontents>
        {/*장소*/}
        <S.DetailLoactionWrapper>
          <S.DeatilLoactionTitle>장소는 이 곳이에요</S.DeatilLoactionTitle>
          <S.DetailLoactionContainer>
            <S.LoactionMap src="/assets/mapimg.png" />
            <S.DetailAddressContainer>
              <S.DetailAddressIcon />
              <S.DetailAddressBox>
                <S.DetailAddress>{getPostings.Address_Posting}</S.DetailAddress>
                <S.DetailDateWrapper>
                  <S.DetailDate>{getPostings.RsvDate_Posting}</S.DetailDate>
                  <S.DetailTime>{getPostings.RsvHour_Posting}</S.DetailTime>
                </S.DetailDateWrapper>
              </S.DetailAddressBox>
            </S.DetailAddressContainer>
          </S.DetailLoactionContainer>
        </S.DetailLoactionWrapper>
        {/* 댓글 */}
        <Comments param={id} />
      </CommonStyles>
    </>
  );
};

export default DetailPage;
