import React, { useState } from 'react';
import * as S from '../ChattingList/ChattingList.style';
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { dbService } from '../../../common/firebase';
import {
  currentUserUid,
  tochattingboxroomid,
  tochattingboxprofileimg,
  tochattingboxnickname,
} from '../../../Rocoil/Atom';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

interface SetProps {
  SetTochattingBoxUid: React.Dispatch<React.SetStateAction<string>>;
  SetTochattingBoxRoomIndex: React.Dispatch<React.SetStateAction<string>>;
  SetTochattingBoxOpponenRoomIndex: React.Dispatch<
    React.SetStateAction<string>
  >;

  tochattingBoxRoomIndex: string;
  tochattingBoxOpponentRoomIndex: string;
  tochattingBoxUid: string;
}

function ChattingList({
  SetTochattingBoxUid,
  SetTochattingBoxRoomIndex,
  SetTochattingBoxOpponenRoomIndex,
  tochattingBoxRoomIndex,
}: SetProps) {
  const mychatlist = useRecoilValue(currentUserUid);
  const [chatList, setChatList] = useState<any>([]);
  const [isAcitList, SetIsActivList] = useState<boolean>(false);
  const [filtering, setFiltering] = useState([]);
  const [tochattingBoxRoomId, SetTochattingBoxRoomId] =
    useRecoilState<string>(tochattingboxroomid);

  const [tochattingBoxNickname, SetTochattingBoxNickname] =
    useRecoilState<string>(tochattingboxnickname);
  const [tochattingBoxProfileImg, SetTochattingBoxProfileImg] =
    useRecoilState<string>(tochattingboxprofileimg);

  // 채팅리스트 클릭시 Chattingbox로 이동하는 데이터를 ChattingList 로 다시 옮긴다.
  // const opponentuid = tochattingBoxUid;
  const myRoomIndex = tochattingBoxRoomIndex;
  // const opponentRoomIndex = tochattingBoxOpponentRoomIndex;
  const currentUid = useRecoilValue(currentUserUid);
  // 채팅리스트
  const [chattingListActive, setChattingListActive] = useState();

  const getChattingList = async () => {
    if (mychatlist === '') {
      return;
    }

    const q = query(
      collection(dbService, 'ChattingUsers', mychatlist, 'chattingListroom'),
      // where('chattingRoomId', '==', roomId)
      orderBy('createdAt', 'desc')
    );
    onSnapshot(q, (querySnapshot) => {
      const getChatList = querySnapshot.docs.map((doc) => {
        const nowList = {
          id: doc.id,
          ...doc.data(),
        };
        return nowList;
      });
      setChatList(getChatList);
      console.log('chatList:', chatList);
    });
  };

  const isActiveUpdate = async () => {
    const updatMyDoc = await doc(
      dbService,
      'ChattingUsers',
      currentUid,
      'chattingListroom',
      myRoomIndex
    );
    // const updatYourDoc = doc(
    //   dbService,
    //   'ChattingUsers',
    //   opponentuid,
    //   'chattingListroom',
    //   opponentRoomIndex
    // );
    updateDoc(updatMyDoc, {
      isActive: 'empty',
      // createdAt: new Date(),
    });
    // updateDoc(updatYourDoc, {
    //   isActive: 'empty',
    //   createdAt: new Date(),
    // });
  };

  useEffect(() => {
    getChattingList();
  }, [mychatlist]);

  const chattingUser = chatList;
  console.log('chattingUser', chattingUser);

  // const test2 = test.combineId;

  return (
    <>
      <S.ChattingBox>
        <S.ChattingListMessage>
          <S.ChattingListMessageWord>메세지</S.ChattingListMessageWord>
          <S.ChattingListMessagePhoto>
            <img src={require('../../../assets/ballon.svg').default} />
          </S.ChattingListMessagePhoto>
        </S.ChattingListMessage>
        <S.ChattingListouter>
          <S.ChattingUserBox>
            {chattingUser.map((user) => {
              return (
                <S.ChattingUser
                  key={user.id}
                  tabIndex={-1}
                  onClick={() => {
                    SetTochattingBoxRoomId(user.combineId);
                    SetTochattingBoxNickname(user.nickname);
                    SetTochattingBoxProfileImg(user.profile);

                    SetTochattingBoxUid(user.opponentUserUid);
                    SetTochattingBoxRoomIndex(user.myRoomId);
                    SetTochattingBoxOpponenRoomIndex(user.posterChatroomId);

                    isActiveUpdate();

                    // SetIsActivList(false);
                  }}
                >
                  <S.ChattingUserContents>
                    <S.UserImgCover>
                      <S.UserImg src={user.profile} />
                    </S.UserImgCover>
                    <S.NickNMessage>
                      <S.UserName>{user.nickname}</S.UserName>
                      <S.LastConversation>
                        {user.lastConversation}
                      </S.LastConversation>
                    </S.NickNMessage>
                  </S.ChattingUserContents>
                  {user.isActive === 'filled' ? (
                    <S.GreenLight></S.GreenLight>
                  ) : (
                    <></>
                  )}
                </S.ChattingUser>
              );
            })}
          </S.ChattingUserBox>
        </S.ChattingListouter>
        <S.ChattingFooterBox />
      </S.ChattingBox>
    </>
  );
}

export default ChattingList;
