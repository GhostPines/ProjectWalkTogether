import * as S from './CardSection.style';
import CardSection from '../../components/CardSection/CardSection';
import { Post, usePosts } from '../../api/postsApi';
import { useEffect, useState } from 'react';
import CardSkeleton from './../../components/CardSkeleton/CardSkeleton';
import Footer from './../../layout/Footer/Footer';

//뜨거운 신발
const WalkAfter = () => {
  // skeleton UI Loading
  const [isloading, setIsLoading] = useState<boolean>(true);

  const { posts, refetch } = usePosts();
  const postList: Array<Post> = posts.filter(
    (post) => post.ProceedState_Posting === 'postingDone'
  );

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return (
    <>
      {isloading ? (
        <CardSkeleton />
      ) : (
        <S.LikedListItem>
          {postList.slice(0, 8).map((post: any) => {
            return <CardSection key={post.id} post={post} refetch={refetch} />;
          })}
        </S.LikedListItem>
      )}
    </>
  );
};
export default WalkAfter;
