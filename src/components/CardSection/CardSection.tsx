import { useEffect, useState } from 'react';
import * as S from './CardSection.style';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentUserUid, isLoggedIn, paramsState } from '../../Rocoil/Atom';
import { doc, updateDoc } from 'firebase/firestore';
import { dbService } from '../../common/firebase';
import { Post } from '../../api/postsApi';

interface postProps {
  post: Post;
  refetch: () => void;
}
const CardSection = ({ post, refetch }: postProps) => {
  const navigate = useNavigate();
  const setParams = useSetRecoilState(paramsState);
  const [likebtn, setLikeBtn] = useState<boolean>(false);
  const uid = useRecoilValue(currentUserUid);
  const loggedIn = useRecoilValue(isLoggedIn);

  useEffect(() => {
    setLikeBtn(post.LikedUsers.includes(uid));
  }, [post]);

  // 좋아요 하는 거
  const likepost = async () => {
    console.log(post.id);
    let p = post;
    p.LikedUsers.push(uid);

    await updateDoc(doc(dbService, 'Post', post.id), {
      LikedUsers: p.LikedUsers,
    });

    setLikeBtn(true);
  };

  // 좋아요 취소
  const unlikepost = async () => {
    // console.log(post.id);

    const u = post.LikedUsers.filter((id: string) => id !== uid);
    await updateDoc(doc(dbService, 'Post', post.id), {
      LikedUsers: u,
    });
    setLikeBtn(false);
  };

  return (
    <S.CardBox>
      <S.CardSectionWrapper
        onClick={() => {
          setParams(post.id);
          navigate(`/detailpage/${post.id}`);
        }}
      >
        <S.ListItemWrapper>
          <S.ListItemThumnail src={post.ThumbnailURL_Posting} />
        </S.ListItemWrapper>
        <S.ListItemThumnailTitle>{post.Title_Posting}</S.ListItemThumnailTitle>
        <S.HashTag>
          {post.Hashtag_Posting.map((tagItem: any, i: any) => {
            return (
              <>
                {tagItem == '' ? (
                  <div>&nbsp;</div>
                ) : (
                  <div key={i}>{'#' + tagItem}</div>
                )}
              </>
            );
          })}
        </S.HashTag>
        <S.ListItemContainer>
          <S.AddressDateHourWrapper>
            <S.ListItemAddress>{post.Address_Posting}</S.ListItemAddress>
            <S.ListItemDate>{post.RsvDate_Posting}</S.ListItemDate>
            <S.ListItemHour>{post.RsvHour_Posting}</S.ListItemHour>
          </S.AddressDateHourWrapper>
        </S.ListItemContainer>
      </S.CardSectionWrapper>
      <S.LikedHeartFlex>
        {likebtn ? (
          <S.LikeBtnFill
            src={require('../../assets/HeartFill2.svg').default}
            onClick={() => {
              unlikepost();
            }}
          />
        ) : (
          <S.LikeBtnLine
            src={'/assets/HeartLine.svg'}
            onClick={() => {
              if (!loggedIn) {
                navigate('/login');
                return;
              }
              likepost();
              console.log('좋아요');
            }}
          />
        )}
      </S.LikedHeartFlex>
    </S.CardBox>
  );
};

export default CardSection;
