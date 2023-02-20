import React from 'react';
import * as S from './Comments.style';
import { useState } from 'react';
import { authService, dbService } from '../../../common/firebase';
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
  where,
} from 'firebase/firestore';
import { useEffect } from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import dayjs from 'dayjs';
import { useRecoilState, useRecoilValue } from 'recoil';
import { paramsState } from './../../PostPage/Hooks/Rocoil/Atom';

const Comments = () => {
  const params = useRecoilValue(paramsState);
  // console.log(params);
  // 댓글 인풋
  const [inputComment, setInputComment] = useState<string>('');
  // 댓글 출력
  const [myComment, setMyComment] = useState<any[]>([]);
  // 댓글 수정
  const [editContent, setEditContent] = useState('');
  // 댓글 텍스트 변경
  const [isEditing, setIsEditing] = useState(false);

  const navigate = useNavigate();

  // posting받아오기
  // const post = useRecoilState(PostingID_Posting);

  // 날짜 정보
  const now = () => {
    const now = dayjs();
    return now.format('YYYY.MM.DD HH:mm');
  };

  const newComments = {
    params,
    UID: authService.currentUser?.uid,
    // PostingID와 KeyForChat은 글쓰기에서 매개변수로 넘겨줘야된다.
    PostingID_Posting: '',
    KeyForChat_Posting: '',
    //key:Description_Comments,inputComment: value
    Description_Comments: inputComment,
    ProfileImg: authService.currentUser?.photoURL,
    CreatedAt: now(),
    NickName: authService.currentUser?.displayName ?? '익명',
    isDone: false,
    isEdit: false,
  };

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

      return;
    }

    if (!inputComment) {
      confirmAlert({
        message: '댓글을 입력해주세요.',
        buttons: [
          {
            label: '댓글 입력하기',
            onClick: () => 'return false',
          },
        ],
      });

      return;
    }
    await addDoc(collection(dbService, 'comments'), newComments);
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

  // 파이어베이스에서는 바뀌었는데 웹에서는 인지를 못해서 강제로 한번더 해줌
  // 모르겠네.. 코멘트를 불러왔다
  // 댓글 출력
  const Reupdate = () => {
    const q = query(
      collection(dbService, 'comments'),
      // 밑에 지정해줘야 그 해당된 페이지에 댓글을 달수 있다
      where('params', '==', params),
      orderBy('CreatedAt', 'desc')
    );
    const getComments = onSnapshot(q, (snapshot) => {
      const newComment = snapshot.docs.map((doc) => ({
        documentId: doc.id,
        ...doc.data(),
      }));
      setMyComment(newComment);
    });
    return getComments;
  };

  // useEffect 을 쓴 이유
  // 처음 나타났을때 댓글의 리스트들이 호출이 되고 deps 지정한 값이 바뀔때도 호출이 된다.
  useEffect(() => {
    Reupdate();
    // 의존성 배열에는 PostingID_Posting가 들어가야된다.
  }, []);

  // 댓글 수정버튼
  const EditCommentHandler = async (documentId: any) => {
    const newComments = [...myComment];
    //comment.documentId여야된다. 콘솔로그로 찍어봐라
    const idx = newComments.findIndex(
      (comment) => comment.documentId === documentId
    );
    newComments[idx].isEdit = !newComments[idx].isEdit;
    setMyComment(newComments);
    await updateDoc(doc(dbService, 'comments', documentId), {
      isEdit: !newComments[idx].isEdit,
    });

    // 이 부분은 댓글 수정을 하면 그 전의 댓글 내용이 나오지 않아 넣어준것이다.
    // 내가 클릭한 댓글만 Description_Comments의 변경된 텍스트를 setEditContent 넣어준다.
    // newComments(내가 쓴 댓글들)의 Description_Comments)애들을 setEditContent 넣어준다.
    setEditContent(newComments[idx].Description_Comments);
    // console.log(newComments[idx].Description_Comments);
    // 기본값을 false로 주고 클릭한 댓글을 ture로 바꿔준다.
    // 그 다음 260번째줄 참고
    setIsEditing(true);
  };

  // 댓글 완료 버튼
  const EditUpdateHandler = async (documentId: any) => {
    // console.log('editContent:', editContent);
    await updateDoc(doc(dbService, 'comments', documentId), {
      // Descripton_Comment의 키값에 editConetnet값을 덮어 씌워줘야된다.
      Description_Comments: editContent,
      isEdit: false,
    });
    setIsEditing(false);
    setEditContent('');
    Reupdate();
  };

  // 댓글 취소
  const CancelHandler = (documentId: any) => {
    const newComments = [...myComment];
    //comment.documentId여야된다. 콘솔로그로 찍어봐라
    const idx = newComments.findIndex(
      (comment) => comment.documentId === documentId
    );
    newComments[idx].isEdit = !newComments[idx].isEdit;
    setMyComment(newComments);
    setIsEditing(false);
    // 그 전의 댓글의 값이 살짝 나온다. 그 부분을 초기화시켜준다.
    setEditContent('');
  };

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

  return (
    <S.DetailCommentsWrapper>
      <S.DetailNumberWrapper>
        <S.CommentTitle>댓글</S.CommentTitle>
        <S.CommentCount>{myComment.length}</S.CommentCount>
      </S.DetailNumberWrapper>
      <S.DetailCommentContainer>
        <S.CommentUserImgWrapper>
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
        </S.CommentUserImgWrapper>
      </S.DetailCommentContainer>
      {/* 리뷰 리스트 */}
      <S.CommentListWrapper>
        {myComment.map((comment: any) => {
          // console.log('comment.isEdit:', comment.isEdit);
          return (
            <S.CommentList key={comment.id}>
              {/* 현재 user가 쓴 글인지 판별 */}
              {comment?.UID !== authService.currentUser?.uid ? (
                <S.CommentLi>
                  <S.CommentProfileImg src={comment.ProfileImg} />
                  <S.CommentWrapper>
                    <S.CommentUserName>{comment.NickName}</S.CommentUserName>
                    <S.CommentBox>
                      <S.CommentInput>
                        {comment.Description_Comments}
                      </S.CommentInput>
                      <S.CommentDataWrapper>
                        <S.CommentDate>{comment.CreatedAt}</S.CommentDate>
                      </S.CommentDataWrapper>
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
                      {comment.isEdit ? (
                        <S.Form>
                          <S.EditForm
                            onChange={(e) => setEditContent(e.target.value)}
                            value={editContent}
                          ></S.EditForm>
                        </S.Form>
                      ) : (
                        <S.CommentInput>
                          {comment.Description_Comments}
                        </S.CommentInput>
                      )}
                      <S.CommentContainer>
                        <S.CommentDate>{comment.CreatedAt}</S.CommentDate>
                        <S.CommentCancelDeleteBtnWrapper>
                          {comment.isEdit ? (
                            <S.CommentEditBtn
                              onClick={() =>
                                EditUpdateHandler(comment.documentId)
                              }
                            >
                              완료하기
                            </S.CommentEditBtn>
                          ) : // isEditing이 false이면 즉 내가 클릭하지 않은 댓글들은 수정하기 버튼이 사라진다.
                          // 내가 클릭한 댓글이 true가 되면 나머지 댓글들은 수정하기 버튼이 사라진다.

                          isEditing ? (
                            <></>
                          ) : (
                            <S.CommentEditBtn
                              onClick={() =>
                                EditCommentHandler(comment.documentId)
                              }
                            >
                              수정하기
                            </S.CommentEditBtn>
                          )}
                          {comment.isEdit ? (
                            <S.CommentDeleteBtn
                              onClick={() => {
                                CancelHandler(comment.documentId);
                              }}
                            >
                              취소하기
                            </S.CommentDeleteBtn>
                          ) : (
                            <S.CommentDeleteBtn
                              onClick={() => {
                                DeleteCommentHandler(comment.documentId);
                              }}
                            >
                              삭제하기
                            </S.CommentDeleteBtn>
                          )}
                        </S.CommentCancelDeleteBtnWrapper>
                      </S.CommentContainer>
                    </S.CommentBox>
                  </S.CommentWrapper>
                </S.CommentLi>
              )}
            </S.CommentList>
          );
        })}
      </S.CommentListWrapper>
    </S.DetailCommentsWrapper>
  );
};

export default Comments;
