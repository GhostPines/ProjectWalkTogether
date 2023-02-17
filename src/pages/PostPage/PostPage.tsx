import React, { useEffect } from 'react';
import { useState } from 'react';
import { Time, TitleInput } from './Hooks/Rocoil/Atom';
import { useRecoilValue } from 'recoil';
import { getAuth } from 'firebase/auth';
import { uuidv4 } from '@firebase/util';
import { collection, addDoc } from 'firebase/firestore';
import { dbService } from '../../common/firebase';
import IuputInformation from './InputInformation/InputInformation';
import * as S from './Postpage.style';
import CommonStyles from './../../styles/CommonStyles';
import MainPost from './Mainpost/Mainpost';
import { Navigate, useNavigate } from 'react-router-dom';
import DropdownCategory from './../../common/DropdownCategory/DropdownCategory';

const PostPage = () => {
  const [loginModalopen, setLoginModalopen] = useState(false); //아이디 찾기 모달창
  const [postDb, setPostDb] = useState({}); //파이어베이스DB
  const [postHour, setPostHour] = useState(''); //약속 시간.날짜
  const [postMinut, setPostMinute] = useState(''); //약속 시간.시각
  const [postTime, setPostTime] = useState(''); //작성시간
  const [postLatitude, setPostLtitude] = useState(''); //위도
  const [postLongitude, setPostLongitude] = useState(''); //경도
  const [postNowLatitude, setPostNowLtitude] = useState(''); //현재 위도
  const [postNowLongitude, setPostNowLongitude] = useState(''); //현재 경도
  const [postLiked, setPostLiked] = useState(false); //좋아요 여부
  const [postCountLiked, setPostCountLiked] = useState(''); //좋아요 갯수
  const [proceedState, setProceedState] = useState(''); //게시글의 진행사항
  const [keyForChat, setKeyForChat] = useState(''); //채팅을 위해 생성한 id
  const [postId, setPostId] = useState(''); //포스팅 id 고유값
  const [postAuthor, setPostAuthor] = useState(''); //사용자 파이어베이스 uid
  const [postNickname, setPostNickname] = useState(''); //사용자 닉네임 => 회원가입시시에 저장해 주거나 로컬에 저장하는 방법을 찾아야될 것 같다.
  const [postAddress, setPostAddress] = useState(''); //만날 위치 시,군,구,단
  const [postCategory, setPostCategory] = useState(''); //카테고리
  const [showCategory, setShowCategory] = useState(false);
  //약속 시간
  const meetTime = useRecoilValue(Time);
  const meetTimeObectToString = JSON.stringify(Object.values(meetTime)[2]);
  const OTS = Object.values(meetTime)[2].toString();
  const weeks = OTS.slice(0, 3);
  var toayweek = '';
  switch (weeks) {
    case 'Sun':
      toayweek = '일';
      break;
    case 'Tue':
      toayweek = '화';
      break;
  }

  const meetTimeValue = Object.values(meetTime);
  const weekValue = meetTimeObectToString.slice(1, 9);
  // const meetHour = meetTimeObectToString.slice(12, 19); //시간 이상하게나옴
  const meetYearMonth = meetTimeObectToString.slice(1, 9); //년월
  const meetDay = meetTimeObectToString.slice(9, 11); //일
  const week = meetTimeObectToString;
  // let meetDayHour = 0;
  // if (Number(meetTimeValue[8]) < 10) {
  //   const meetDayHourzero = meetTimeValue[8] + 'a';
  // } else {
  //   const meetDayHourzero = meetTimeValue[8];
  // }
  //시
  const meetDayHour = meetTimeValue[8]; // am의경우 0이 앞에 안 붙는다.
  const meetDayMinute = meetTimeObectToString.slice(14, 17); //분
  let meeting = `${meetYearMonth}${meetDay}${meetDayHour}${meetDayMinute}` + ``;

  const Title = useRecoilValue(TitleInput);

  /////////
  //현재시간
  /////////
  let today = new Date(); // today 객체에 Date()의 결과를 넣어줬다
  const time = {
    year: today.getFullYear(), //현재 년도
    month: today.getMonth() + 1, // 현재 월
    date: today.getDate(), // 현제 날짜
    hours: today.getHours(), //현재 시간
    minutes: today.getMinutes(), //현재 분
  };
  let timestring = `${time.year}/${time.month}/${time.date} ${time.hours}:${time.minutes}`;

  const auth = getAuth();
  const user = auth.currentUser?.uid;
  const nickname = auth.currentUser?.displayName;

  /////////////
  //콘솔확인용/
  ////////////
  useEffect(() => {
    console.log('meetTime:', toayweek);
    // setPostTime(timestring); //현재 시간
    // setPostHour(meeting); //약속 시간
    // setPostNickname(nickname);
    // setPostAuthor(user);
  });

  ////////////
  //작성완료//
  ///////////
  const handleSubmit = async () => {
    try {
      const docRef = await addDoc(collection(dbService, 'Post'), {
        // Description_Posting: posttitel,
        Category_Posting: postCategory,
        Liked_Posting: false,
        Nickname: postNickname,
        RsvDate_Posting: postHour,
        TimeStamp_Posting: postTime,
        Title_Posting: Title,
        UID: postAuthor,
      });
      console.log('Document written with ID: ', docRef.id);
      alert('저장완료');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
    // navigate('/detailpage');
  };

  return (
    <CommonStyles>
      <S.Boxcontainer>
        <MainPost />
        <IuputInformation />
        <S.PostSubmitBox>
          <S.PostSubmitBtn onClick={handleSubmit}>포스팅 하기</S.PostSubmitBtn>
        </S.PostSubmitBox>
      </S.Boxcontainer>
    </CommonStyles>
  );
};

export default PostPage;
