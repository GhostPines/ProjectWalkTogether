import { useEffect } from 'react';
import * as S from './InfoList.style';
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  Cetegory,
  FilterSelectedDateForMapPage,
  dateType1ForMapPage,
  viewCountForMapPage,
} from '../../../Rocoil/Atom';

import { useNavigate } from 'react-router-dom';
import { paramsState } from '../../../Rocoil/Atom';
import { useSetRecoilState } from 'recoil';
import CardSection from './../../../components/CardSection/CardSection';
import { Post, usePosts } from '../../../api/postsApi';

const InfoList = ({ Post }) => {
  const navigate = useNavigate();
  const setParams = useSetRecoilState(paramsState);
  const Category = useRecoilValue(Cetegory);
  const { posts, refetch } = usePosts();
  const postings: Array<Post> = posts.filter((post) => {
    if (Category === '전체') return true;
    return post.Category_Posting === Category;
  });

  const FilterSelectedDate = useRecoilValue(FilterSelectedDateForMapPage);
  // recoilvalue 로 viewCountForMapPage 를 받아온다.
  const viewCount = useRecoilValue(viewCountForMapPage);

  const DateType1 = useRecoilValue(dateType1ForMapPage);

  const [SelectedDate, setSelectedDate] = useState('');
  // DateType1 을 받아와서 SelectedDate 에 넣어준다.
  useEffect(() => {
    setSelectedDate(DateType1);
  }, [DateType1]);

  const postpostpost =
    Category !== '전체'
      ? Post.filter((x) => x.Category_Posting === Category)
      : Post;

  // 필터링 필요한지 아닌지
  const [meetDate, setMeetDate] = useRecoilState(FilterSelectedDateForMapPage);
  const isDateSpecified = meetDate !== '';
  // FilterDate는 DoubleFilterDate를 위해 쓰는 코드이다.
  const FilteredDate =
    SelectedDate.length < 14
      ? postings.filter((post: any) => post.RsvDate_Posting === SelectedDate)
      : postings;

  // switch문 찾아보기
  const DoubleFilteredDateFunction = () => {
    switch (viewCount) {
      case '조회순':
        return [...FilteredDate].sort((a, b) => b.View - a.View);
      case '좋아요순':
        return [...FilteredDate].sort(
          (a, b) => b.LikedUsers.length - a.LikedUsers.length
        );
      default:
        return FilteredDate;
    }
  };

  const DoubledFilterDate = DoubleFilteredDateFunction();
  //! 여기까지 Category에서 가져옴

  return (
    <>
      <S.SearchLineTotalCount>
        총 {DoubledFilterDate.length} 건의 검색결과
      </S.SearchLineTotalCount>
      <S.LikedListItem>
        {/*검색 조건에 맞는 데이터가 없을 경우*/}
        {DoubledFilterDate.length === 0 ? (
          <S.NoResult>
            <S.NoResultTitle>아쉽지만 해당 게시글이 없어요</S.NoResultTitle>
          </S.NoResult>
        ) : (
          DoubledFilterDate.map((post: any) => {
            return <CardSection key={post.id} post={post} refetch={refetch} />;
          })
        )}
      </S.LikedListItem>
    </>
  );
};

export default InfoList;
