import React from 'react';
import { useEffect, useState } from 'react';
import {
  query,
  orderBy,
  collection,
  onSnapshot,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { useRecoilValue } from 'recoil';
import { dbService } from '../../common/firebase';
import { currentUserUid } from '../../Rocoil/Atom';
import { useNavigate } from 'react-router-dom';
import * as S from './HeaderAlarm.style';

interface Props {
  setAlarm: React.Dispatch<React.SetStateAction<Number>>;
}

function HeaderAlarm({ setAlarm }: Props) {
  const [notificationList, setNotificationList] = useState<any>([]);
  const mychatlist = useRecoilValue(currentUserUid);
  const navigate = useNavigate();

  const timee = notificationList[0]?.createdAT;
  const timecal = ``;

  //시간전
  function timeForToday(time) {
    const today = new Date();
    const timeValue = new Date(time);

    const betweenTime = Math.floor(
      (today.getTime() - timeValue.getTime()) / 1000 / 60
    );
    if (betweenTime < 1) return '방금 전';
    if (betweenTime < 60) {
      return `${betweenTime}분 전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간 전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일 전`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년 전`;
  }

  const getNotificationList = async () => {
    if (mychatlist === '') {
      return;
    }

    const q = query(
      collection(dbService, 'ChattingUsers', mychatlist, 'Alarm'),
      // ,where('chattingRoomId', '==', roomId)
      orderBy('createdAt', 'desc')
    );
    onSnapshot(q, (querySnapshot) => {
      const getNotificationList = querySnapshot.docs.map((doc) => {
        const nowList = {
          id: doc.id,
          ...doc.data(),
        };
        return nowList;
      });
      setNotificationList(getNotificationList);
      console.log('notificationList:', notificationList);
    });
  };

  const DeleteNotificationHandler = async (id: any) => {
    await deleteDoc(doc(dbService, 'ChattingUsers', mychatlist, 'Alarm', id));
    navigate('/chat');
  };

  const count = setAlarm(notificationList.length);

  useEffect(() => {
    getNotificationList();
  }, []);

  // console.log('time:', timeForToday(timee));
  return (
    <div>
      {notificationList.map((ars) => {
        return (
          <S.NotificationCover
            onClick={() => {
              DeleteNotificationHandler(ars.id);
            }}
          >
            <S.NoitificationIconBox>
              <S.Img src={require('../../assets/ballon.svg').default}></S.Img>
            </S.NoitificationIconBox>
            <S.NotificationContentBox>
              <S.NotificationContent>
                {/* <S.NoitificationUserName>
                  {ars.nickname}
                </S.NoitificationUserName> */}
                채팅이 시작되었습니다!
              </S.NotificationContent>
              <S.NotificationText>
                대화를 통해 산책 매이트를 만나보세요.
              </S.NotificationText>
              <S.NotificationTime>
                {timeForToday(ars.createdAT)}
              </S.NotificationTime>
            </S.NotificationContentBox>
          </S.NotificationCover>
        );
      })}
    </div>
  );
}

export default HeaderAlarm;
