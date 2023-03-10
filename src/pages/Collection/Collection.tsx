import { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { paramsState } from '../../Rocoil/Atom';
import * as S from './CardSection.style';
import CardSection from '../../components/CardSection/CardSection';
import Fire from '../../assets/Mainpage/Fire.png';
import Boog from '../../assets/Mainpage/boog.png';
import gitbal from '../../assets/Mainpage/gitbal.png';
import { Post, usePosts } from '../../api/postsApi';

const Collection = (props: any) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);

  useEffect(() => {
    switch (id) {
      case '1':
        setTitle('신발신는 중');
        setFile(<HotShoesImg src={Boog}></HotShoesImg>);
        break;
      case '2':
        setTitle('뜨거운 신발');
        setFile(<HotShoesImg src={Fire}></HotShoesImg>);
        break;
      case '3':
        setTitle('매칭된 신발');
        setFile(<HotShoesImg src={gitbal}></HotShoesImg>);
        break;
      default:
        break;
    }
  }, []);

  const setParams = useSetRecoilState(paramsState);

  // id
  // 1 = 신발신는 중
  // 2 = 뜨거운 신발
  // 3 = 매칭된 신발

  const { posts, refetch } = usePosts();
  const shoes: Array<Post> = posts
    .filter((post) => {
      if (id === '3') return post.ProceedState_Posting === 'postingDone';
      else return post;
    })
    .sort((a, b) => {
      if (id === '2') return b.LikedUsers.length - a.LikedUsers.length;
      return 0;
    });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [posts]);

  return (
    <>
      <CategoryWrapper>
        <S.CategoryTitleWrapper>
          <TitleLayout>
            <div>{file}</div>
            <S.CategoryTitle>{title}</S.CategoryTitle>
          </TitleLayout>
        </S.CategoryTitleWrapper>

        <S.LikedListItem>
          {shoes.slice(0, 24).map((post: any) => {
            return <CardSection key={post.id} post={post} refetch={refetch} />;
          })}
        </S.LikedListItem>
      </CategoryWrapper>
    </>
  );
};

export default Collection;

export const HotShoesImg = styled.img`
  width: 76px;
  height: 76px;
  margin-top: 40px;
`;

export const TitleLayout = styled.div`
  display: flex;

  align-items: center;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 868px;
  margin: auto;
  margin-bottom: 80px;
`;
export const CollectionWrapper = styled.div``;

export const Collectionitem = styled.div``;
