import React, { useEffect } from 'react';
import * as S from './CardSection.style';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { paramsState } from './../../pages/PostPage/Hooks/Rocoil/Atom';

interface postProps {
  post: any;
}
const CardSection = ({ post }: postProps) => {
  // console.log('post', post.id);
  const navigate = useNavigate();
  const setParams = useSetRecoilState(paramsState);

  // post 바뀔때마 실행되는것이다.
  // useEffect(() => {
  //   setParams(post.id);
  // }, [post]);

  // 클릭할때마다 setParams가 바뀌어야된다.
  // <S.CardSectionWrapper
  //       onClick={() => {
  //         setParams(post.id);
  //         navigate(`/detailpage/${post.id}`);
  //       }}
  //     ></S.CardSectionWrapper>

  return (
    <S.CardGap>
      <S.CardBox>
        <S.CardSectionWrapper
          onClick={() => {
            setParams(post.id);
            navigate(`/detailpage/${post.id}`);
          }}
        >
          <S.ListItemWrapper>
            <S.ListItemThumnail src={post.ThunmnailURL_Posting} />
          </S.ListItemWrapper>
          <S.ListItemThumnailTitle>
            {post.Title_Posting}
          </S.ListItemThumnailTitle>
          <S.HashTag>#케이팝 #발라드</S.HashTag>
          <S.ListItemContainer>
            <S.LikedHeartFlex>
              <S.ListItemAddress>{post.Address_Posting}</S.ListItemAddress>
              <S.LikeBtnLine />
            </S.LikedHeartFlex>
            <S.ListItemDate>
              {post.RsvDate_Posting}
              {post.RsvHour_Posting}
            </S.ListItemDate>
          </S.ListItemContainer>
        </S.CardSectionWrapper>
      </S.CardBox>
    </S.CardGap>
  );
};

export default CardSection;
