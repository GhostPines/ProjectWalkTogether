import React from 'react';
import * as S from './Comments.style';
import { useState } from 'react';
import { authService, dbService } from './../../../common/firebase';
import { useNavigate } from 'react-router-dom';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from 'firebase/firestore';
import { useEffect } from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Review from './ReviewList/Review';

const Comments = () => {
  // 댓글 인풋
  const [inputComment, setInputComment] = useState<string>('');
  // 댓글 출력
  const [myComment, setMyComment] = useState<any[]>([]);
  // 댓글 수정
  const navigate = useNavigate();

  // 댓글 생성
  const addCommentHandler = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!authService.currentUser) {
      confirmAlert({
        message: '댓글은 로그인 후 작성이 가능합니다.',
        buttons: [
          {
            label: '로그인하러 가기',
            onClick: () => navigate('/login'),
          },
        ],
      });
    }

    if (!inputComment) {
      confirmAlert({
        message: '댓글을 입력해주세요.',
        buttons: [
          {
            label: '댓글 입력하기',
            // 비동기 처리 하기
            onClick: () => 'return false',
          },
        ],
      });
    }
    await addDoc(collection(dbService, 'comments'), {
      UID: authService.currentUser?.uid,
      // PostingID와 KeyForChat은 글쓰기에서 매개변수로 넘겨줘야된다.
      PostingID_Posting: '',
      KeyForChat_Posting: '',
      Description_Comments: inputComment,
      ProfileImg: authService.currentUser?.photoURL,
      CreatedAt: Date.now(),
      NickName: authService.currentUser?.displayName ?? '익명',
      isDone: false,
      isEdit: false,
    });
    setInputComment('');
  };

  // 버튼 취소 시 확인 얼럿창
  const CancelCommentHandler = () => {
    confirmAlert({
      message: '댓글을 취소하시겠습니까?',
      buttons: [
        {
          label: '네',
          onClick: () => setInputComment(''),
        },
        {
          label: '아니오',
          onClick: () => setInputComment,
        },
      ],
    });
  };

  // useEffect 을 쓴 이유
  // 처음 나타났을때 댓글의 리스트들이 호출이 되고 deps 지정한 값이 바뀔때도 호출이 된다.
  useEffect(() => {
    const q = query(
      collection(dbService, 'comments')
      // 밑에 지정해줘야 그 해당된 페이지에 댓글을 달수 있다
      // where('PostingID_Posting', '==', PostingID_Posting)
      // orderBy('createdAt', 'desc')
    );
    const getComments = onSnapshot(q, (snapshot) => {
      const newComment = snapshot.docs.map((doc) => ({
        documentId: doc.id,
        ...doc.data(),
      }));
      setMyComment(newComment);
    });
    return getComments;
    // const tmp = new Array(newComment.length);
    // setIsModifying(tmp.fill(false));
    // 의존성 배열에는 PostingID_Posting가 들어가야된다.
  }, []);

  return (
    <S.DetailCommentsWrapper>
      <S.CommentTitle>댓글</S.CommentTitle>
      <S.CommentCount>{myComment.length}</S.CommentCount>
      <S.DetailCommentContainer>
        <S.CommentUserImgWrapper>
          <S.CommtentUserImg src='/assets/hodu.jpg' />
          <S.CommentContentsWrapper>
            <S.CommentContent
              type='text'
              placeholder='댓글을 입력하세요.'
              value={inputComment}
              onChange={(event) => {
                setInputComment(event.target.value);
              }}
            />

            <S.CommentCancelBtn onClick={CancelCommentHandler}>
              취소하기
            </S.CommentCancelBtn>
            <S.CommentBtn onClick={addCommentHandler}>등록하기</S.CommentBtn>
          </S.CommentContentsWrapper>
        </S.CommentUserImgWrapper>
      </S.DetailCommentContainer>
      {/* 리뷰 리스트 */}
      <S.CommentListWrapper>
        {myComment.map((comment: any) => (
          <Review
            comment={comment}
            key={comment.id}
            setMyComment={setMyComment}
            setInputComment={setInputComment}
          />
        ))}
      </S.CommentListWrapper>
    </S.DetailCommentsWrapper>
  );
};

export default Comments;
