import React, { useEffect } from 'react';
import * as S from './ChattingBox.style';
import { useState } from 'react';
import { authService, dbService } from '../../../common/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { chattingusers } from '../../PostPage/Hooks/Rocoil/Atom';
import { useRecoilValue } from 'recoil';

function ChattingBox() {
  const [message, setMessage] = useState('');
  const { uid, displayName, photoURL } = authService.currentUser;

  const chattinguser = useRecoilValue(chattingusers);

  //메세지 전송시 함수
  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === '') {
      alert('Enter valid message');
      return;
    }

    await addDoc(collection(dbService, 'Chat'), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage('');
  };
  useEffect(() => console.log('chattinguser:', chattinguser));

  return (
    <div>
      <S.ChattingBox>
        <S.ChattingNickname>
          <S.ChattingNicknamePhoto>
            <img src={require('../../../assets/man.png')} />
          </S.ChattingNicknamePhoto>
          <S.ChattingNicknameto>여기가 닉네임입니다.</S.ChattingNicknameto>
        </S.ChattingNickname>
        <S.ChattingContent>
          {/* 글 들어가는 곳 */} <S.ChattingText> 안녕하세요 </S.ChattingText>
          <S.ChattingText> 안녕하세요 </S.ChattingText>
          <S.ChattingTextBox>
            {/* <S.ChattingRightTime>10:50</S.ChattingRightTime> */}
            <S.ChattingText>하위</S.ChattingText>
          </S.ChattingTextBox>
          <S.ChattingTextBox>
            <S.ChattingText>
              원래 위에서 아래로 내려오는 형식이었다(default) 카톡처럼 아래에서
              위로 올라가는 ui를 만들고 싶었지만 아무리 구글링을 해도
              안나오더라(아직 구글링이 미숙한탓..) 그냥 이걸 얘기하고
              싶었다(한탄) .... 다른 사람에게 꼭 도움이 되는 코드이길 바라며..
              아래에서 위로 올라가는 UI 채팅, 밑에서 위로 올라가는 UI 채팅
              검색엔진에 걸리길 바라며..
            </S.ChattingText>
            <S.ChattingTime>10:50</S.ChattingTime>
          </S.ChattingTextBox>
          <S.ChattingTextBox>
            <S.ChattingText>
              원래 위에서 아래로 내려오는 형식이었다(default) 카톡처럼 아래에서
              위로 올라가는 ui를 만들고 싶었지만 아무리 구글링을 해도
              안나오더라(아직 구글링이 미숙한탓..) 그냥 이걸 얘기하고
              싶었다(한탄) .... 다른 사람에게 꼭 도움이 되는 코드이길 바라며..
              아래에서 위로 올라가는 UI 채팅, 밑에서 위로 올라가는 UI 채팅
              검색엔진에 걸리길 바라며..
            </S.ChattingText>
            <S.ChattingTime>10:50</S.ChattingTime>
          </S.ChattingTextBox>
          <S.ChattingTextBox>
            <S.ChattingText>
              원래 위에서 아래로 내려오는 형식이었다(default) 카톡처럼 아래에서
              위로 올라가는 ui를 만들고 싶었지만 아무리 구글링을 해도
              안나오더라(아직 구글링이 미숙한탓..) 그냥 이걸 얘기하고
              싶었다(한탄) .... 다른 사람에게 꼭 도움이 되는 코드이길 바라며..
              아래에서 위로 올라가는 UI 채팅, 밑에서 위로 올라가는 UI 채팅
              검색엔진에 걸리길 바라며..
            </S.ChattingText>
            <S.ChattingTime>10:50</S.ChattingTime>
          </S.ChattingTextBox>{' '}
          <S.ChattingTextBox>
            <S.ChattingText>
              원래 위에서 아래로 내려오는 형식이었다(default) 카톡처럼 아래에서
              위로 올라가는 ui를 만들고 싶었지만 아무리 구글링을 해도
              안나오더라(아직 구글링이 미숙한탓..) 그냥 이걸 얘기하고
              싶었다(한탄) .... 다른 사람에게 꼭 도움이 되는 코드이길 바라며..
              아래에서 위로 올라가는 UI 채팅, 밑에서 위로 올라가는 UI 채팅
              검색엔진에 걸리길 바라며..
            </S.ChattingText>
            <S.ChattingTime>10:50</S.ChattingTime>
          </S.ChattingTextBox>
          <S.ChattingTextBoxLeft>
            <S.ChattingImg></S.ChattingImg>
            <S.ChattingTextLeft>
              왜그래?왜그래왜그래왜그래왜그래왜그래왜그래왜그래왜그래왜그래래왜그래왜그래왜그래왜그래래왜그래왜그래왜그래왜그래래왜그래왜그래왜그래왜그래래왜그래왜그래왜그래왜그래
            </S.ChattingTextLeft>
            <S.ChattingTime>10:30</S.ChattingTime>
          </S.ChattingTextBoxLeft>
          <S.ChattingTextBoxLeft>
            <S.ChattingImg></S.ChattingImg>
            <S.ChattingTextLeft>잘 나오나? inlineblock</S.ChattingTextLeft>
            <S.ChattingTime>10:30</S.ChattingTime>
          </S.ChattingTextBoxLeft>
        </S.ChattingContent>
        <S.ChattingInputBox>
          <form
            onSubmit={(event) => sendMessage(event)}
            className="send-message"
          >
            <S.ChattingInputouter>
              <S.ChattingInput
                placeholder="채팅을 입력해 주세요"
                onChange={(e) => setMessage(e.target.value)}
              />
              <S.ChattingButton>
                <img src="../../../assets/SendBtn.png" />
              </S.ChattingButton>
            </S.ChattingInputouter>
          </form>
        </S.ChattingInputBox>
      </S.ChattingBox>
    </div>
  );
}

export default ChattingBox;
