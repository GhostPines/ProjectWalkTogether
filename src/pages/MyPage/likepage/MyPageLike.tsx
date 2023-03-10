import { Post, usePosts } from '../../../api/postsApi';
import CardSection from '../../../components/CardSection/CardSection';
import * as S from './MypageLike.style';

const MyPageLike = (userInfo: any) => {
  const { posts, refetch } = usePosts();

  // Api호출 함수
  const filteredPosts: Array<Post> = posts.filter((post) =>
    post.LikedUsers.includes(userInfo.uid)
  );

  return (
    <S.MyPageWriteWrap>
      <S.PostListWrap>
        {filteredPosts.map((post, i) => {
          return <CardSection post={post} key={i} refetch={refetch} />;
        })}
      </S.PostListWrap>
    </S.MyPageWriteWrap>
  );
};
export default MyPageLike;
