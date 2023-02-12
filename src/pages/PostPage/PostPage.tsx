import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import LoginModal from '../../components/PostModal/PostModal';
import UI from './MuiCalendar';
import { Time } from './Atom';
import { useRecoilValue } from 'recoil';

const PostPage = () => {
  //아이디 찾기 모달창
  const [loginModalopen, setLoginModalopen] = useState(false);
  //파이어베이스DB
  const [postDb, setPostDb] = useState({});

  const findPwd = (e: any) => {
    e.preventDefault();
    setLoginModalopen(true);
    console.log(loginModalopen);
  };

  const count = useRecoilValue(Time);

  useEffect(() => {
    console.log('postvaluabe:TextProps:', typeof count);
  });

  return (
    <div>
      {/* {children[3]} */}
      <Boxcontainer>
        <Boxcontents>
          <TittleBox>
            <InputTitle placeholder="제목을 입력해 주세요" />
          </TittleBox>
          <HashtagBox>#해쉬태그</HashtagBox>
          <UI />
          <WriteBox>
            <Textarea></Textarea>
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
