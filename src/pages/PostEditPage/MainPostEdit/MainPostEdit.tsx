import React, { useState } from 'react';
import * as S from './MainPostEdit.style';
import { useRecoilState } from 'recoil';
import { TitleInput, DescriptionInput } from '../../../Rocoil/Atom';
import { Bannerupload, ThumbnailUpload } from '../../../Rocoil/Atom';
import DropdownCategory from '../../../components/DropdownCategoryForWritePage/DropdownCategory';
import Tag from '../../../components/Tag/Tag';
import useDetectClose from './../../../hooks/useDetectClose';

interface SetProps {
  setPostCategory: React.Dispatch<React.SetStateAction<string>>;
  postCategory: string;
  thumbnailimg: string;
  bannerimg: string;
  setHasEditedBanner: React.Dispatch<React.SetStateAction<boolean>>;
  setHasEditedThumbnail: React.Dispatch<React.SetStateAction<boolean>>;
  setIsValidityTitle: React.Dispatch<React.SetStateAction<boolean>>;
  setIsValidityContents: React.Dispatch<React.SetStateAction<boolean>>;
  isValidityTitle: boolean;
  isValidityContents: boolean;
}
function MainPostEdit({
  setPostCategory,
  postCategory,
  thumbnailimg,
  bannerimg,
  setHasEditedBanner,
  setHasEditedThumbnail,
  isValidityTitle,
  isValidityContents,
  setIsValidityTitle,
  setIsValidityContents,
}: SetProps) {
  // 모달 외부 클릭 시 닫기 customhook
  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);
  const [postTitle, setPostTitle] = useRecoilState(TitleInput); //글 제목
  const [postTag, setPostTag] = useState(''); //해쉬태그
  const [postdescription, SetDescription] = useRecoilState(DescriptionInput); //글 내용
  const [photoupload, setPhotoupload] = useRecoilState(ThumbnailUpload); // Handles input change event and updates state
  const [bannerupload, setBanneruploadupload] = useRecoilState(Bannerupload);
  const [thumbnail, setThumbnail] = useState<any>(thumbnailimg);
  const [banner, setBanner] = useState<any>(bannerimg);
  const [show, setShow] = useState<any>(false);

  function thumnailimageChange(e: any) {
    setHasEditedThumbnail(true);
    const filelist = e.target.files[0];

    const reader = new FileReader();

    reader.onload = () => {
      setPhotoupload(filelist);
      setThumbnail(() => reader.result);
      console.log(filelist);
    };
    reader.readAsDataURL(filelist);
    console.log('썸네일 인풋:', photoupload);
  }

  function bannerimageChange(e: any) {
    setHasEditedBanner(true);
    console.log('배너 이미자가 변경되었습니다.');
    const filelist = e.target.files[0];

    const reader = new FileReader();

    reader.onload = () => {
      setBanneruploadupload(filelist);
      setBanner(() => reader.result);
    };

    reader.readAsDataURL(filelist);
    console.log('배너 인풋:', filelist);
  }
  /////////
  // 타이틀
  ////////
  const handleChange = (e: any) => {
    setPostTitle(e.target.value);
  };

  ////////
  //글내용
  const handleChangeText = (e: any) => {
    SetDescription(e.target.value);
  };

  return (
    <>
      <S.Bannercontainer>
        <label htmlFor='banner'>
          <S.ThumbnailImgPorlaroid src={banner ? banner : '/assets/배너.png'} />
        </label>
        <S.BannerPhoto
          type='file'
          accept='image/*'
          onChange={bannerimageChange}
          style={{ display: 'none' }}
          id='banner'
        />
      </S.Bannercontainer>
      <S.PolaroidFolerIcon
        src={
          require('../../../assets/PostEditPageIcon/PolaroidFolderIcon.svg')
            .default
        }
      />
      <S.Boxcontents>
        <S.BoxPhoto>
          <label htmlFor='thumnail'>
            <S.ThumnailPhotoChange
              src={
                thumbnail
                  ? thumbnail
                  : require('../../../assets/ChattingIcon/slectpicure.svg')
                      .default
              }
            />
          </label>
          <S.ThumnailPhoto
            type='file'
            accept='image/*'
            onChange={thumnailimageChange}
            style={{ display: 'none' }}
            id='thumnail'
          />
        </S.BoxPhoto>

        <S.BoxMain>
          {/*모달 외부 클릭 시 닫힘*/}
          <S.DropdownButton onClick={myPageHandler} ref={myPageRef}>
            <S.CateogryWrapper
              onClick={() => {
                setShow(true);
              }}
            >
              {/* <S.CalendarIcon
              src={
                require('../../../assets/PostEditPageIcon/CategoryListIconForWritPage.svg')
                  .default
              }
            /> */}
              <S.CategoryTitle>{postCategory}</S.CategoryTitle>
            </S.CateogryWrapper>
          </S.DropdownButton>
          {show && (
            <DropdownCategory
              // isDropped={myPageIsOpen}
              setPostCategory={setPostCategory}
              setShow={setShow}
            />
          )}
          {/*모달 외부 클릭 시 닫힘*/}
          <S.InputTitle
            onChange={handleChange}
            value={postTitle}
            placeholder='제목을 입력해 주세요'
            isValidityTitle={isValidityTitle}
          />
          <Tag tagItem='' />
          <S.Textarea
            onChange={handleChangeText}
            value={postdescription}
            placeholder='당신의 이야기를 160글자 내로 적어주세요'
            isValidityContents={isValidityContents}
          ></S.Textarea>
        </S.BoxMain>
      </S.Boxcontents>
    </>
  );
}

export default MainPostEdit;
