import * as S from './CardSection.style';
import CardSection from '../../components/CardSection/CardSection';
import { Post, usePosts } from '../../api/postsApi';
import { useEffect, useState } from 'react';
import CardSkeleton from './../../components/CardSkeleton/CardSkeleton';

//뜨거운 신발
const LikesComponent = () => {
  // skeleton UI Loading
  const [isloading, setIsLoading] = useState<boolean>(true);

  const { posts, refetch } = usePosts();
  let postList: Array<Post> = [...posts].sort(
    (a, b) => b.LikedUsers.length - a.LikedUsers.length
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
          {postList

            .slice(0, 8)
            .sort((a, b) => b.LikedUsers.length - a.LikedUsers.length)
            .map((post: any) => {
              return (
                <CardSection key={post.id} post={post} refetch={refetch} />
              );
            })}
        </S.LikedListItem>
      )}
    </>
  );
};
export default LikesComponent;
