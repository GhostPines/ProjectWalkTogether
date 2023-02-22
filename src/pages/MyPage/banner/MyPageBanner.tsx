import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { authService, dbService, storage } from '../../../common/firebase';
import {
  userProfileBannerImg,
  userProfileImg,
} from '../../PostPage/Hooks/Rocoil/Atom';

const MyPageBanner = () => {
  const profileImg = useRecoilValue(userProfileImg);
  const bannerImg = useRecoilValue(userProfileBannerImg);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    ////////////////// 썸네일 이미지 전송
    if (bannerImg === null) return alert('이미지 업로드 실패');
    const imageRef = ref(storage, `test/${authService.currentUser.uid}/banner`); //+${thumbnail}
    // `images === 참조값이름(폴더이름), / 뒤에는 파일이름 어떻게 지을지
    uploadBytes(imageRef, bannerImg).then((snapshot) => {
      console.log('snapshot', snapshot);
      // 업로드 되자마자 뜨게 만들기
      alert('썸네일 저장 완료');
    });
    if (profileImg === null) return alert('이미지 업로드 실패');
    const bannerRef = ref(
      storage,
      `test/${authService.currentUser.uid}/profileImg`
    ); //+${thumbnail}
    // `images === 참조값이름(폴더이름), / 뒤에는 파일이름 어떻게 지을지
    uploadBytes(bannerRef, profileImg).then((snapshot) => {
      alert('베너 저장 완료');
      console.log('snapshot', snapshot);
    });
    // geturl(); settTimeout이 없으면 에러가 난다.
    setTimeout(geturl, 1000);
    // setTimeout(adddoc, 8000);
  };
  const geturl: any = () => {
    getDownloadURL(ref(storage, `test/${authService.currentUser.uid}/banner`))
      .then((url) => {
        const getThumbnail = url;
        console.log('섬네일url', getThumbnail);
        alert('섬네일url');

        //get썸네일 url
        getDownloadURL(
          ref(storage, `test/${authService.currentUser.uid}/profileImg`)
        )
          .then((url) => {
            const getBanner = url;
            console.log('배너url', typeof getBanner);

            try {
              const docRef = setDoc(
                doc(dbService, 'user', authService.currentUser.uid),
                {
                  profileImg: profileImg,
                  bannerImg: bannerImg,
                }
              );
              console.log('사진 업데이트 완료 ID: ', docRef);
              alert('저장완료');
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
  return (
    <BannerWrap>
      <BannerImg src={bannerImg} />
      <BannerImgLabel htmlFor='bannerInput'>
        <BannerImgBtn src={'/assets/editicon.png'} onClick={handleSubmit} />
      </BannerImgLabel>
      <BannerImgInput type='file' id='bannerInput' />
    </BannerWrap>
  );
};
export default MyPageBanner;

const BannerWrap = styled.div`
  width: 100%;
  height: 293px;

  position: relative;
`;
const BannerImg = styled.img`
  width: 100%;
  height: 100%;

  background: #d1ddf5;
`;
const BannerImgLabel = styled.label``;
const BannerImgBtn = styled.img`
  width: 50px;
  height: 50px;
  right: 40px;
  bottom: 10px;

  cursor: pointer;

  border-radius: 50%;
  position: absolute;
`;
const BannerImgInput = styled.input`
  display: none;
`;
