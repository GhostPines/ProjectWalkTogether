import { useEffect, useState } from 'react';
import CommonStyles from './../../styles/CommonStyles';
import * as S from './PostEditPage.style';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import {
  myLocation,
  selectedAddress,
  Bannerupload,
  ThumbnailUpload,
  TitleInput,
  DescriptionInput,
  ReserveEditDate,
  TimeEdit,
  NewpostTag,
} from './../../Rocoil/Atom';
import { getAuth } from 'firebase/auth';
import { uuidv4 } from '@firebase/util';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage, dbService } from './../../common/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import MainPostEdit from './MainPostEdit/MainPostEdit';
import InputInformationEdit from './InputInformationEdit/InputInformationEdit';
import MessageWindow, {
  MessageWindowLogoType,
  MessageWindowProperties,
  messageWindowPropertiesAtom,
} from '../../messagewindow/MessageWindow';
import Loader from '../../components/Loader/Loader';

const PostEditPage = () => {
  // 해당 글 id, db 정보
  const { id } = useParams();
  const { state } = useLocation();
  // 글 수정 후 페이지 이동
  const navigate = useNavigate();

  // 카테고리 값값
  const [postCategory, setPostCategory] = useState(state.Category_Posting);
  // console.log(postCategory);

  //주소 받아오기 myLocation
  const location = useRecoilValue(myLocation);
  const adress = useRecoilValue(selectedAddress);

  const MeetLatitude_Posting = location.lat;
  const MeetLongitude_Posting = location.lng;

  const Address_Posting = adress.slice(0, 10);

  /////이미지가져오기
  const [banner, setBanner] = useRecoilState(Bannerupload);
  const [thumbnail, setThumbnail] = useRecoilState(ThumbnailUpload);

  ///// firestorage 이미지 불러오기
  const auth = getAuth();
  const user = auth.currentUser?.uid;
  const nickname = auth.currentUser?.displayName;
  const KeyForChat_Posting = uuidv4();
  const [PostingID_Posting, setPostingID_Posting] = useState(uuidv4());

  // 썸네일과 배너 수정했는지 안헀는지에 대한 useState
  const [hasEditedBanner, setHasEditedBanner] = useState<boolean>(false);
  const [hasEditedThumbnail, setHasEditedThumbnail] = useState<boolean>(false);

  //타이틀, 글 내용
  const [Title, setTitle] = useRecoilState(TitleInput);
  const [Description, setDescription] = useRecoilState(DescriptionInput);

  // 포스팅 출력
  // const [myPost, setMyPost] = useState<any>({});

  // 커스텀 얼럿창
  const setState = useSetRecoilState<MessageWindowProperties>(
    messageWindowPropertiesAtom
  );

  //해시태그 리코일
  const [Tag, setTag] = useRecoilState<Array<string>>(NewpostTag);

  //약속 시간
  const [meetEditDate, setMeetEditDate] = useRecoilState(ReserveEditDate);

  // 로딩일 경우
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //내용 유효성검사
  const [isValidityContents, setIsValidityContents] = useState<boolean>(false);

  //타이틀 유효성검사
  const [isValidityTitle, setIsValidityTitle] = useState<boolean>(false);

  const date = (y: number, m: number, d: number) => {
    const D = new Date(y, m, d);

    switch (D.getDay()) {
      case 0:
        return '(일)';
      case 1:
        return '(월)';
      case 2:
        return '(화)';
      case 3:
        return `(수)`;
      case 4:
        return `(목)`;
      case 5:
        return '(금)';
      case 6:
        return `(토)`;
      default:
        return '';
    }
  };

  const y = meetEditDate.$y;
  const m = meetEditDate.$M;
  const d = meetEditDate.$D;
  const month = meetEditDate.$M + 1;

  //시간
  const [meetTimeEdit, setMeetTimeEdit] = useRecoilState(TimeEdit);
  const meetHour = meetTimeEdit?.slice(0, 2);

  const isPm = Number(meetHour) >= 12;

  const time12 = isPm
    ? Number(meetHour) === 24
      ? 0
      : Number(meetHour) === 12
      ? 12
      : Number(meetHour) - 12
    : Number(meetHour);

  //AM/PM
  let AMPM = isPm ? '오후' : '오전';

  const meetMinute = meetTimeEdit.slice(3, 5);
  let meetMinuteNum = Number(meetMinute);

  // 가공된 날짜와 시간을 db RsvDate_Posting,RsvHour_Posting 할당
  const RsvDate_Posting = `${month}/${d} ${date(y, m, d)}`;
  const RsvHour_Posting = `${AMPM} ${time12}:${meetMinute}`;
  console.log(RsvHour_Posting);

  //현재시간
  let today = new Date(); // today 객체에 Date()의 결과를 넣어줬다

  const time = {
    year: today.getFullYear(), //현재 년도
    month: today.getMonth() + 1, // 현재 월
    date: today.getDate(), // 현재 날짜
    hours: today.getHours(), //현재 시간
    minutes: today.getMinutes(), //현재 분
  };

  let timestring = `${time.year}/${time.month}/${time.date} ${time.hours}:${time.minutes}`;

  //수정
  useEffect(() => {
    if (state) {
      setTitle(state.Title_Posting);
      setDescription(state.Description_Posting);
      setThumbnail(state.ThumbnailURL_Posting);
      setBanner(state.BannerURL_Posting);
      setTag(state.Hashtag_Posting);
    }
  }, [state]);

  const geturl: any = (callback: () => void) => {
    getDownloadURL(ref(storage, `test/${PostingID_Posting}/thumbnail`))
      .then((thumbnailUrl) => {
        console.log('섬네일url', thumbnailUrl);

        // Get banner url
        getDownloadURL(ref(storage, `test/${PostingID_Posting}/banner`))
          .then((bannerUrl) => {
            console.log('배너url', typeof bannerUrl);

            try {
              const postRef = doc(dbService, 'Post', id);
              updateDoc(postRef, {
                Description_Posting: Description,
                RsvDate_Posting,
                RsvHour_Posting,
                Title_Posting: Title,
                Category_Posting: postCategory,
                // 사진 업데이트 안했을 경우 기존 이미지 링크 업로드
                ThumbnailURL_Posting: hasEditedThumbnail
                  ? thumbnailUrl
                  : thumbnail,
                BannerURL_Posting: hasEditedBanner ? bannerUrl : banner,
                Address_Posting,
                MeetLongitude_Posting,
                MeetLatitude_Posting,
                createdAt: Date.now(),
                Hashtag_Posting: Tag,
              });
              console.log('글작성완료 ID: ', postRef);
              callback();
            } catch (e) {
              console.error('Error updating document: ', e);
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

  const handleSubmit = async (e: any) => {
    if (Title.length < 1 || Title.length > 20) {
      setIsValidityTitle(true);
      return;
    }

    if (Description.length < 1 || Description.length > 160) {
      setIsValidityContents(true);
      return;
    }

    if (postCategory === '카테고리') {
      alert('카테고리를 선택해 주세요');
      return;
    }

    if (thumbnail === null) {
      alert('이미지 업로드 실패');
      return;
    }

    const imageRef = ref(storage, `test/${PostingID_Posting}/thumbnail`);
    await uploadBytes(imageRef, thumbnail);

    if (banner === null) {
      alert('이미지 업로드 실패');
      return;
    }

    const bannerRef = ref(storage, `test/${PostingID_Posting}/banner`);

    // MessageWindow.showWindow(
    //   new MessageWindowProperties(
    //     true,
    //     '업로드 중입니다. 조금만 기다려주세요!',
    //     '',
    //     [],
    //     MessageWindowLogoType.CryingFace
    //   ),
    //   setState
    // );
    setIsLoading(true);

    await uploadBytes(bannerRef, banner);
    geturl(() => {
      // MessageWindow 닫는 코드
      MessageWindow.showWindow(new MessageWindowProperties(), setState);
      setIsLoading(false);
      navigate(`/category/${postCategory}`);
    });
  };

  return (
    <CommonStyles>
      <S.Boxcontainer>
        <MainPostEdit
          setPostCategory={setPostCategory}
          postCategory={postCategory}
          thumbnailimg={state.ThumbnailURL_Posting}
          bannerimg={state.BannerURL_Posting}
          setHasEditedBanner={setHasEditedBanner}
          setHasEditedThumbnail={setHasEditedThumbnail}
          isValidityTitle={isValidityTitle}
          isValidityContents={isValidityContents}
          setIsValidityContents={setIsValidityContents}
          setIsValidityTitle={setIsValidityTitle}
        />
        <InputInformationEdit
          addressEdit={state.Address_Posting}
          lat={state.MeetLatitude_Posting}
          lng={state.MeetLongitude_Posting}
        />
        {isLoading && <Loader />}
        <S.PostSubmitBox>
          <S.PostSubmitBtn onClick={handleSubmit}>수정하기</S.PostSubmitBtn>
        </S.PostSubmitBox>
      </S.Boxcontainer>
    </CommonStyles>
  );
};

export default PostEditPage;
