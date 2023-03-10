import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { storage } from '../../../common/firebase';
import { dbService, authService } from '../../../common/firebase';
import { currentUserUid } from '../../../Rocoil/Atom';

interface Props {
  userInfo: any;
}

const MyPageBanner = ({ userInfo }: Props) => {
  const { uid, bannerImg } = userInfo;

  const userUID = useRecoilValue(currentUserUid);

  const [imageURL, setImageURL] = useState<string>('');

  const onImageChange = (
    e: React.ChangeEvent<EventTarget & HTMLInputElement>
  ) => {
    e.preventDefault();
    const file = e.target.files;
    if (!file) return null;

    const storageRef = ref(
      storage,
      `files/userBanners/${authService.currentUser.uid}`
    ); //user.uid로 저장
    const uploadTask = uploadBytes(storageRef, file[0]);

    uploadTask
      .then((snapshot) => {
        console.log('a');
        e.target.value = '';
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          console.log('b');
          setImageURL(downloadURL);
          updateDoc(doc(dbService, 'user', authService.currentUser.uid), {
            bannerImg: downloadURL,
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onBannerClick = () => {};
  return (
    <BannerWrap onClick={onBannerClick}>
      <BannerImgLabel htmlFor='bannerInput'>
        <BannerImg
          src={
            imageURL
              ? imageURL
              : require('../../../assets/MypageIcon/bannerImg.svg').default
          }
        />
        {uid === userUID && (
          <>
            <BannerImgBtn
              src={require('../../../assets/MypageIcon/EditIcon.svg').default}
            />
            <BannerImgInput
              type='file'
              id='bannerInput'
              onChange={onImageChange}
            />
          </>
        )}
      </BannerImgLabel>
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
  width: 48px;
  height: 48px;
  left: 898px;
  bottom: 16px;
  cursor: pointer;
  position: absolute;
`;
const BannerImgInput = styled.input`
  display: none;
`;
