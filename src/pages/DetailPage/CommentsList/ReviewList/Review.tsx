import React from 'react';
import { authService, dbService } from '../../../../common/firebase';
import * as S from './Review.style';
import { useState } from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import EditForm from '../../EditForm/EditForm';

interface ReviewProps {
  comment: any;
  setMyComment: any;
  setInputComment: any;
}

const Review = ({ comment, setMyComment, setInputComment }: ReviewProps) => {
  const [isTextareaVisible, setIsTextareaVisible] = useState(false);
  const [editContent, setEditContent] = useState(comment);

  // 댓글 삭제
  const DeleteCommentHandler = async (documentId: any) => {
    confirmAlert({
      title: '정말 댓글을 삭제하시겠습니까?',
      message: '삭제한 댓글은 되돌릴 수 없습니다.',
      buttons: [
        {
          label: '네',
          onClick: async () => {
            await deleteDoc(doc(dbService, 'comments', documentId));
          },
        },
        {
          label: '아니오',
          onClick: () => setMyComment,
        },
      ],
    });
  };

  // 댓글 수정
  // const ModifiedCommentHandler = async (documentId: any) => {
  //   const idx = comments.findIndex((comment: any) => comment.id === documentId);
  //   await updateDoc(doc(dbService, 'comments', documentId), {
  //     isEdit: !comments[idx].isEdit,
  //   });
  // };

  // 수정할 textarea 보여주기
  setIsTextareaVisible(true);
  const EditCommentHandler = async (e: React.MouseEvent, documentId: any) => {
    // inputComment: setInputComment,
    // isEdit: false,
  };
  return (
    <S.CommentList key={comment.id}>
      {/* 현재 user가 쓴 글인지 판별 */}
      {comment?.UID !== authService.currentUser?.uid ? (
        <S.CommentLi>
          <S.CommentWrapper>
            <S.CommentProfileImg src={comment.ProfileImg} />
            <S.CommentUserName>{comment.NickName}</S.CommentUserName>
            <S.CommentBox>
              <S.CommentInput>{comment.Description_Comments}</S.CommentInput>
              <S.CommentDate>{comment.CreatedAt}</S.CommentDate>
            </S.CommentBox>
          </S.CommentWrapper>
        </S.CommentLi>
      ) : (
        //현재 유저가 쓴 글이면 수정, 삭제 버튼까지 보여준다.
        <S.CommentLi>
          <S.CommentProfileImg src={comment.ProfileImg} />
          <S.CommentWrapper>
            <S.CommentUserName>{comment.NickName}</S.CommentUserName>
            <S.CommentBox>
              {isTextareaVisible ? (
                <EditForm />
              ) : (
                <S.CommentInput>{comment.Description_Comments}</S.CommentInput>
              )}
              <S.CommentContainer>
                <S.CommentDate>{comment.CreatedAt}</S.CommentDate>
                <S.CommentCancelDeleteBtnWrapper>
                  <S.CommentEditBtn>수정하기</S.CommentEditBtn>
                  <S.CommentDeleteBtn
                    onClick={() => {
                      DeleteCommentHandler(comment.documentId);
                    }}
                  >
                    삭제하기
                  </S.CommentDeleteBtn>
                </S.CommentCancelDeleteBtnWrapper>
              </S.CommentContainer>
            </S.CommentBox>
          </S.CommentWrapper>
        </S.CommentLi>
      )}
    </S.CommentList>
  );
};

export default Review;
