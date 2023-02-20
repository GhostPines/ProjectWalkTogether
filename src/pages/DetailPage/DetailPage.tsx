import * as S from './DetailPage.style';
import Comments from './Comments/Comments';
import CommonStyles from './../../styles/CommonStyles';
import { useRecoilState, useRecoilValue } from 'recoil';
import { paramsState } from './../PostPage/Hooks/Rocoil/Atom';
import { useEffect, useState } from 'react';
import {
  query,
  collection,
  where,
  orderBy,
  onSnapshot,
  getDoc,
  doc,
} from 'firebase/firestore';
import { dbService } from './../../common/firebase';

const DetailPage = () => {
  const params = useRecoilValue(paramsState);
  console.log(params);
  const [getPostings, setGetPostings] = useState<any>([]);

  const getPost = async () => {
    const q = doc(dbService, 'Post', params);
    const postData = await getDoc(q);
    //비동기
    setGetPostings(postData.data());
  };

  useEffect(() => {
    getPost();
  }, []);

  console.log(getPostings);
  // useEffect(() => {
  //   const q = query(
  //     collection(dbService, 'Post'),
  //     // Category_Posting이 파람스로 넘겨준 애들과 같은 애들만 뿌려줘라
  //     where('params', '==', params)
  //     // orderBy('CreatedAt', 'desc')
  //   );
  //   onSnapshot(q, (snapshot) => {
  //     const getCategoryList = snapshot.docs.map((doc) => {
  //       const CategoryList = {
  //         id: doc.id,
  //         ...doc.data(),
  //       };
  //       return CategoryList;
  //     });
  //     setGetPostings(getCategoryList);
  //   });
  // }, []);
  // console.log('getPostings!!!', getPostings);

  return (
    <CommonStyles>
      <S.Bannercontainer>
        <label htmlFor='banner'>
          <S.ThumbnailImgPorlaroid />
        </label>
        <S.BannerPhoto
          type='file'
          accept='image/*'
          style={{ display: 'none' }}
          id='banner'
        />
      </S.Bannercontainer>
      <S.Boxcontents>
        <S.BoxPhoto>
          <label htmlFor='thumnail'>
            <S.ThumnailPhotoChange />
          </label>
          <S.ThumnailPhoto
            type='file'
            accept='image/*'
            style={{ display: 'none' }}
            id='thumnail'
          />
        </S.BoxPhoto>

        <S.BoxMain>
          <S.CategoryTitle>카테고리</S.CategoryTitle>
          <S.InputTitle placeholder='제목을 입력해 주세요' />
          <S.Textarea placeholder='당신의 이야기를 적어주세요'></S.Textarea>
          <S.HashtagBox>#해쉬태그를 입력해주세요</S.HashtagBox>
        </S.BoxMain>
      </S.Boxcontents>

      {/*장소*/}
      <S.DetailLoactionWrapper>
        <S.DeatilLoactionTitle>장소는 이 곳이에요</S.DeatilLoactionTitle>
        <S.DetailLoactionContainer>
          <S.LoactionMap src='/assets/mapimg.png' />
          <S.DetailAddressContainer>
            <S.DetailAddressIcon />
            <S.DetailAddressBox>
              <S.DetailAddress>
                서울특별시 강남구 청담동 12번 출구
              </S.DetailAddress>
              <S.DetailDate>2/9(목) 19:30PM</S.DetailDate>
            </S.DetailAddressBox>
          </S.DetailAddressContainer>
        </S.DetailLoactionContainer>
      </S.DetailLoactionWrapper>
      {/* 댓글 */}
      <Comments />
    </CommonStyles>
  );
};

export default DetailPage;
