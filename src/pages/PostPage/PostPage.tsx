import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  Time,
  TitleInput,
  DescriptionInput,
  Bannerupload,
  ThumbnailUpload,
  ReserveDate,
  selectedAddress,
  myLocation,
} from '../../../src/Rocoil/Atom';
import { useRecoilValue } from 'recoil';
import { getAuth } from 'firebase/auth';
import { uuidv4 } from '@firebase/util';
import { collection, addDoc } from 'firebase/firestore';
import { dbService } from '../../common/firebase';
import Mainpost from './Mainpost/Mainpost';
import IuputInformation from './InputInformation/InputInformation';
import * as S from './Postpage.style';
import CommonStyles from './../../styles/CommonStyles';
import MainPost from './Mainpost/Mainpost';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../../common/firebase';
import { useNavigate } from 'react-router-dom';

const PostPage = () => {
  const [loginModalopen, setLoginModalopen] = useState(false); //아이디 찾기 모달창
  const [postDb, setPostDb] = useState({}); //파이어베이스DB
  const [postHour, setPostHour] = useState(''); //약속 시간.날짜
  const [postMinut, setPostMinute] = useState(''); //약속 시간.시각
  const [postTime, setPostTime] = useState(''); //작성시간
  // const [postLatitude, setPostLtitude] = useState(''); //위도
  // const [postLongitude, setPostLongitude] = useState(''); //경도
  // const [postNowLatitude, setPostNowLtitude] = useState(''); //현재 위도
  // const [postNowLongitude, setPostNowLongitude] = useState(''); //현재 경도
  const [postLiked, setPostLiked] = useState(false); //좋아요 여부
  const [postCountLiked, setPostCountLiked] = useState(''); //좋아요 갯수
  const [proceedState, setProceedState] = useState(''); //게시글의 진행사항
  const [keyForChat, setKeyForChat] = useState(''); //채팅을 위해 생성한 id
  const [postId, setPostId] = useState(''); //포스팅 id 고유값
  const [postAuthor, setPostAuthor] = useState(''); //사용자 파이어베이스 uid
  const [postNickname, setPostNickname] = useState(''); //사용자 닉네임 => 회원가입시시에 저장해 주거나 로컬에 저장하는 방법을 찾아야될 것 같다.
  const [postAddress, setPostAddress] = useState(''); //만날 위치 시,군,구,단
  const [postCategory, setPostCategory] = useState('카테고리'); //카테고리

  //주소 받아오기 myLocation
  const location = useRecoilValue(myLocation);
  const adress = useRecoilValue(selectedAddress);

  const MeetLatitude_Posting = location.lat;
  const MeetLongitude_Posting = location.lng;

  const Address_Posting = adress.slice(0, 10);

  //////이미지 받아오기
  const [getThumbnail, setGetThumbnail] = useState<any>();
  const [getBanner, setGetBanner] = useState<any>();
  /////이미지가져오기
  const banner = useRecoilValue(Bannerupload);
  const thumbnail = useRecoilValue(ThumbnailUpload);
  ///// firestorage 이미지 불러오기
  const auth = getAuth();
  const user = auth.currentUser?.uid;
  const nickname = auth.currentUser?.displayName;
  const KeyForChat_Posting = uuidv4();
  const [PostingID_Posting, setPostingID_Posting] = useState(uuidv4());
  // 페이지 전환
  const navigate = useNavigate();

  //약속 시간
  const meetDate = useRecoilValue(ReserveDate);
  const OTS = meetDate.toString();
  const weeks = OTS.slice(0, 3);
  let todayweek = '';
  switch (
    weeks //요일
  ) {
    case 'Sun':
      todayweek = '(일)';
      break;
    case 'Mon':
      todayweek = '(월)';
      break;
    case 'Tue':
      todayweek = '(화)';
      break;
    case 'Wed':
      todayweek = '(수)';
      break;
    case 'Thu':
      todayweek = '(목)';
      break;
    case 'Fri':
      todayweek = '(금)';
      break;
    case 'Sat':
      todayweek = '(토)';
      break;
  }

  //월
  const meetMonth = OTS.slice(8, 11);
  let todayMonth = '';
  switch (meetMonth) {
    case 'Jan':
      todayMonth = '1';
      break;
    case 'Feb':
      todayMonth = '2';
      break;
    case 'Mar':
      todayMonth = '3';
      break;
    case 'Apr':
      todayMonth = '4';
      break;
    case 'May':
      todayMonth = '5';
      break;
    case 'Jun':
      todayMonth = '6';
      break;
    case 'July':
      todayMonth = '7';
      break;
    case 'Aug':
      todayMonth = '8';
      break;
    case 'Sep':
      todayMonth = '9';
      break;
    case 'Oct':
      todayMonth = '10';
      break;
    case 'Nov':
      todayMonth = '11';
      break;
    case 'dec':
      todayMonth = '12';
      break;
  }
  //날자
  let meetDaynum = '';
  const meetDay = OTS.slice(5, 7);
  if (Number(meetDay) < 10) {
    meetDaynum = meetDay.slice(1, 2);
  } else {
    meetDaynum = meetDay;
  }

  //시간
  const meetTime = useRecoilValue(Time);
  const meetHour = meetTime.slice(0, 2);
  let meetHourNum: any = '';
  if (Number(meetHour) < 10) {
    meetHourNum = meetHour.slice(1, 2);
  } else if (Number(meetHour) > 12) {
    meetHourNum = Number(meetHour) - 12;
  } else if (Number(meetHour) === 0 || Number(meetHour) === 12) {
    meetHourNum = '0';
  } else {
    meetHourNum = meetHour;
  }

  //AM/PM
  let AMPM = '';
  if (Number(meetHour) >= 12) {
    AMPM = '오후';
  } else {
    AMPM = '오전';
  }

  const meetMinute = meetTime.slice(3, 5);
  let meetMinuteNum = Number(meetMinute);

  const RsvDate_Posting = `${todayMonth}/${meetDaynum} ${todayweek}`;
  const RsvHour_Posting = `${AMPM} ${meetHourNum}:${meetMinute}`;

  //타이틀, 글 내용
  const Title = useRecoilValue(TitleInput);
  const Description = useRecoilValue(DescriptionInput);

  //현재시간
  let today = new Date(); // today 객체에 Date()의 결과를 넣어줬다

  const time = {
    year: today.getFullYear(), //현재 년도
    month: today.getMonth() + 1, // 현재 월
    date: today.getDate(), // 현제 날짜
    hours: today.getHours(), //현재 시간
    minutes: today.getMinutes(), //현재 분
  };

  let timestring = `${time.year}/${time.month}/${time.date} ${time.hours}:${time.minutes}`;

  /////////////
  //콘솔확인용/
  useEffect(() => {
    console.log(' Description.length:', Description.length);
    setPostTime(timestring); //현재 시간
    // setPostHour(meeting); //약속 시간
    setPostNickname(nickname);
    setPostAuthor(user);
  });

  //settimeout test
  const geturl: any = () => {
    getDownloadURL(ref(storage, `test/${PostingID_Posting}/thumbnail`))
      .then((url) => {
        const getThumbnail = url;
        console.log('섬네일url', getThumbnail);
        // alert('섬네일url');

        //get썸네일 url
        getDownloadURL(ref(storage, `test/${PostingID_Posting}/banner`))
          .then((url) => {
            const getBanner = url;
            console.log('배너url', typeof getBanner);

            try {
              const docRef = addDoc(collection(dbService, 'Post'), {
                Description_Posting: Description,
                Nickname: postNickname,
                RsvDate_Posting,
                RsvHour_Posting,
                createdAt: Date.now(),
                TimeStamp_Posting: postTime,
                Title_Posting: Title,
                UID: postAuthor,
                PostingID_Posting,
                KeyForChat_Posting,
                Category_Posting: postCategory,
                ThunmnailURL_Posting: getThumbnail,
                BannereURL_Posting: getBanner,
                CountLiked_Posting: '0',
                ProceedState_Posting: '1',
                Address_Posting,
                MeetLongitude_Posting,
                MeetLatitude_Posting,
              });
              console.log('글작성완료 ID: ', docRef);
              // alert('저장완료');
            } catch (e) {
              console.error('Error adding document: ', e);
            }
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };

  ////////////
  //작성완료//
  ///////////
  const handleSubmit = (e: any) => {
    if (Title.length !== 0) {
      if (Title.length! < 20) {
        if (Description.length !== 0) {
          if (Description.length! < 200) {
            if (meetDate !== '') {
              if (meetTime !== '') {
                if (thumbnail !== '') {
                  if (banner !== '') {
                    if (adress !== '충북 보은군 속리산면 갈목리 산 19-1') {
                      if (postCategory !== '카테고리') {
                        if (thumbnail === null)
                          // 포스팅 클릭하면 해당 카테고리 페이지로 라우터 이동
                          //////////////// 썸네일 이미지 전송
                          return alert('이미지 업로드 실패');
                        const imageRef = ref(
                          storage,
                          `test/${PostingID_Posting}/thumbnail`
                        ); //+${thumbnail}
                        // `images === 참조값이름(폴더이름), / 뒤에는 파일이름 어떻게 지을지
                        uploadBytes(imageRef, thumbnail).then((snapshot) => {
                          console.log('snapshot', snapshot);
                          // 업로드 되자마자 뜨게 만들기
                          // alert('썸네일 저장 완료');
                        });
                        if (banner === null) return alert('이미지 업로드 실패');
                        const bannerRef = ref(
                          storage,
                          `test/${PostingID_Posting}/banner`
                        ); //+${thumbnail}
                        // `images === 참조값이름(폴더이름), / 뒤에는 파일이름 어떻게 지을지
                        uploadBytes(bannerRef, banner).then((snapshot) => {
                          // alert('베너 저장 완료');
                          console.log('snapshot', snapshot);
                        });
                        // geturl(); settTimeout이 없으면 에러가 난다.
                        // async await 비동기 처리
                        setTimeout(geturl, 1000);
                        navigate(`/category/${postCategory}`);
                        // setTimeout(adddoc, 8000);
                      } else {
                        alert('카테고리를 선택해 주세요');
                      }
                    } else {
                      alert('지도에서 약속 장소를 선택해 주십시오');
                    }
                  } else {
                    alert('배너사진을 선택해 주세요');
                  }
                } else {
                  alert('섬네일 사진을 선택해 주세요');
                }
              } else {
                alert('시간을 입력해 주세요');
              }
            } else {
              alert('날짜를 입력해 주세요');
            }
          } else {
            alert('최대 200자까지 가능합니다.');
          }
        } else {
          alert('내용은 1자 이상 200자 미만으로 작성해 주세요');
        }
      } else {
        alert('최대 20자만');
      }
    } else {
      alert('타이틀은 1자 이상 20자 미만으로 작성해 주세요');
    }

    e.preventDefault();
  };
  // console.log('postCategory', postCategory);
  return (
    <CommonStyles>
      <S.Boxcontainer>
        <MainPost
          setPostCategory={setPostCategory}
          postCategory={postCategory}
        />
        <IuputInformation />
        <S.PostSubmitBox>
          <S.PostSubmitBtn onClick={handleSubmit}>포스팅 하기</S.PostSubmitBtn>
        </S.PostSubmitBox>
      </S.Boxcontainer>
    </CommonStyles>
  );
};

export default PostPage;
