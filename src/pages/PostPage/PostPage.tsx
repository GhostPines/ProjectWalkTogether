import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import LoginModal from '../../components/PostModal/PostModal';
import UI from './MuiCalendar';
import { Time } from './Atom';
import { useRecoilValue } from 'recoil';
import { getAuth } from 'firebase/auth';
import { uuidv4 } from '@firebase/util';
import { collection, addDoc } from 'firebase/firestore';
import { dbService } from '../../common/firebase';

const PostPage = () => {
  const [loginModalopen, setLoginModalopen] = useState(false); //아이디 찾기 모달창
  const [postDb, setPostDb] = useState({}); //파이어베이스DB
  const [posttitel, Setposttitle] = useState(''); //글 제목
  const [postTag, setPostTag] = useState(''); //해쉬태그
  const [postdescription, SetDescription] = useState(''); //글 내용
  const [postHour, setPostHour] = useState(''); //약속 시간.날짜
  const [postMinut, setPostMinute] = useState(''); //약속 시간.시각
  const [postTime, setPostTime] = useState(''); //작성시간
  const [postPicture, setPostPicture] = useState(''); //사진 - firestorage
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

  //모달 클릭시 지도창 열림
  const findPwd = (e: any) => {
    e.preventDefault();
    setLoginModalopen(true);
    console.log(loginModalopen);
  };

  //약속 시간
  const meetTime = useRecoilValue(Time);
  const meetTimeObectToString = JSON.stringify(Object.values(meetTime)[2]);
  const meetTimeValue = Object.values(meetTime);
  // const meetHour = meetTimeObectToString.slice(12, 19); //시간 이상하게나옴
  const meetYearMonth = meetTimeObectToString.slice(1, 9); //년월
  const meetDay = meetTimeObectToString.slice(9, 11); //일
  // let meetDayHour = 0;
  // const meetDayHourfunc = () => {
  //   if (Number(meetTimeValue[8]) < 10) {
  //     let meetDayHour = 0 + meetTimeValue[8];
  //   } else {
  //     let meetDayHour = meetTimeValue[8];
  //   }
  // };
  //시
  const meetDayHour = meetTimeValue[8]; // am의경우 0이 앞에 안 붙는다.
  const meetDayMinute = meetTimeObectToString.slice(14, 17); //분
  let meeting =
    `${meetYearMonth}${meetDay}__${meetDayHour}${meetDayMinute}` + ``;

  /////////
  // 타이틀
  ////////
  const handleChange = (e: any) => {
    Setposttitle(e.target.value);
  };

  ////////
  //글내용
  const handleChangeText = (e: any) => {
    SetDescription(e.target.value);
  };

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
    console.log('postdescription:', postdescription);
  });

  ////////////
  //작성완료//
  ///////////
  const handleSubmit = async () => {
    setPostTime(timestring); //현재 시간
    setPostHour(meeting); //약속 시간
    setPostNickname(nickname);
    setPostAuthor(user);
    try {
      const docRef = await addDoc(collection(dbService, 'post'), {
        Description_Posting: posttitel,
        Liked_Posting: false,
        Nickname: postNickname,
        RsvDate_Posting: postHour,
        TimeStamp_Posting: postTime,
        Title_Posting: postdescription,
        UID: postAuthor,
      });
      console.log('Document written with ID: 왜안되냐 ', docRef.id);
      alert('저장완료');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <div>
      {/* {children[3]} */}
      <Boxcontainer>
        <Boxcontents>
          <TittleBox>
            <InputTitle
              onChange={handleChange}
              placeholder="제목을 입력해 주세요"
            />
          </TittleBox>
          <HashtagBox>#해쉬태그</HashtagBox>
          <UI />
          <WriteBox>
            <Textarea onChange={handleChangeText}></Textarea>
          </WriteBox>
          <PicMapBox>
            <PictureBox>
              사진박스
              <Picture></Picture>
            </PictureBox>
            <BtnBox>
              <ConfrimText>만날 장소 정하러 가기~</ConfrimText>
              <ConfirmBtn onClick={findPwd}> 위치 정하기</ConfirmBtn>
            </BtnBox>
          </PicMapBox>
        </Boxcontents>
        <button onClick={handleSubmit}>완료</button>
      </Boxcontainer>

      <LoginModal
        open={loginModalopen}
        setLoginModalopen={setLoginModalopen}
        onClose={() => setLoginModalopen(false)}
      />
    </div>
  );
};

export default PostPage;

//가장바깥 배경
const Boxcontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: blue; */
  width: 100%;
  height: 100vh;
`;

// 글쓰기 최상위 박스
const Boxcontents = styled.div`
  border-radius: 20px;
  /* background-color: wheat; */
  width: 50%;
  height: 80%;
  margin: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (min-width: 767px) {
  }
`;

//input태그를 감싸는 div
const TittleBox = styled.div`
  margin: 10px;
  height: 50px;
  width: 80%;
  border-bottom: solid 1px black;
  /* background-color: aqua; */
`;

//제목 입력하는 input
const InputTitle = styled.input`
  border: none;
  height: 30px;
  width: 70%;
  margin-top: 10px;
`;

//해쉬태그 박스
const HashtagBox = styled.div`
  height: 120px;
  width: 80%;
  background-color: darkgray;
  margin-top: 5px;
  /* position: relative;
    bottom: 40px; */
`;

//글쓰기 박스
const WriteBox = styled.div`
  width: 80%;
  height: 30%;
  background-color: white;
  /* position: relative; */
  bottom: 40px;
  border: 1px solid black;
  border-radius: 15px;
`;

// 글쓰기 textarea
const Textarea = styled.textarea`
  resize: none;
  outline: none;
  border: none;
  position: relative;
  left: 25px;
  margin-top: 5px;
  width: 90%;
  height: 95%;
  border-radius: 15px;
  font-size: 30px;
`;

//맵 사진을 감싸는 박스
const PicMapBox = styled.div`
  width: 80%;
  height: 30%;
  display: flex;
`;

//사진 박스
const PictureBox = styled.div`
  width: 80%;
  height: 80%;
  background-color: cadetblue;
`;

// 사진 불러오기
const Picture = styled.div`
  background-color: blueviolet;
  width: 100%;
  height: 70%;
`;

// 버튼 박스
const BtnBox = styled.div`
  width: 80%;
  height: 80%;
  background-color: azure;

  justify-content: center;
`;

// 버튼

const ConfirmBtn = styled.button`
  width: 60%;
  height: 25%;
  position: relative;
  top: 30%;
  left: 20%;
  border-radius: 30px;
  @media screen and (max-width: 1314px) {
    font-size: 5px;
    width: 100px;
    position: relative;
    left: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
    width: 80px;
    top: 40px;
    left: 15px;
  }
`;

const ConfrimText = styled.div`
  width: 250px;
  position: relative;
  left: 40px;
  top: 20px;

  @media screen and (max-width: 1314px) {
    width: 110px;
    font-size: 5px;
    position: relative;
    top: 20px;
    left: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
    position: relative;
    left: 10px;
  }
`;
