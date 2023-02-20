import React from 'react';
import * as S from './Category.style';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  query,
  collection,
  where,
  orderBy,
  getDocs,
  onSnapshot,
} from 'firebase/firestore';
import { dbService } from '../../common/firebase';
import CardSection from './../../common/CardSection/CardSection';
import CommonStyles from '../../styles/CommonStyles';

const Category = () => {
  const { category } = useParams();
  const [postings, setPostings] = useState<any>([]);
  // console.log(category);
  // console.log('postings', postings);

  useEffect(() => {
    const q = query(
      collection(dbService, 'Post'),
      // Category_Posting이 파람스로 넘겨준 애들과 같은 애들만 뿌려줘라
      where('Category_Posting', '==', category),
      orderBy('TimeStamp_Posting', 'desc')
    );
    onSnapshot(q, (snapshot) => {
      const getCategoryList = snapshot.docs.map((doc) => {
        const CategoryList = {
          id: doc.id,
          ...doc.data(),
        };
        return CategoryList;
      });
      setPostings(getCategoryList);
    });
  }, []);
  // console.log(postings);

  return (
    <CommonStyles>
      <S.CategoryTitleWrapper>
        <S.CategoryTitle>{category}</S.CategoryTitle>
        {/* <S.CategoryImg>{category.img}</S.CategoryImg> */}
      </S.CategoryTitleWrapper>
      <S.FilterArea>
        <S.CategoryFilter>
          {/*카테고리영역 */}
          <S.CategoryFilterWarpper>
            <S.FilterCategory>카테고리</S.FilterCategory>
            <S.FilterCalendarIcon />
          </S.CategoryFilterWarpper>
          {/*달력영역 */}
          <S.CategoryFilterWarpper>
            <S.FilterCategory>3월 23일</S.FilterCategory>
            <S.FilterCalendarIcon />
          </S.CategoryFilterWarpper>
        </S.CategoryFilter>
        {/*최신순 / 조회순 / 좋아요순*/}
        <S.FilterSortWrapper>
          <S.FilterNewest>
            최신순
            <S.FilterAreaLine></S.FilterAreaLine>
          </S.FilterNewest>
          <S.FilterNewest>
            조회순
            <S.FilterAreaLine></S.FilterAreaLine>
          </S.FilterNewest>
          <S.FilterNewest>좋아요순</S.FilterNewest>
        </S.FilterSortWrapper>
      </S.FilterArea>
      <S.LikedListItem>
        {postings.map((post: any) => {
          return <CardSection key={post.id} post={post} />;
        })}
      </S.LikedListItem>
    </CommonStyles>
  );
};

export default Category;
