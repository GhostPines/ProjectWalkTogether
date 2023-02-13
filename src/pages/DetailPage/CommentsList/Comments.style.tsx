import styled from 'styled-components';

export const DetailCommentsWrapper = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
  margin-top: 80px;
  margin-bottom: 80px;
`;
export const CommentsBox = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;
export const CommentTitle = styled.h1`
  font-size: 1.75rem;
  margin-right: 10px;
`;
export const CommentCount = styled.h5`
  font-size: 1.5rem;
`;
export const DetailCommentContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 50px 40px 30px;
  /* border-bottom: 1px solid rgb(205, 205, 205); */
`;
export const CommentUserImgWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const CommtentUserImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-right: 30px;
`;
export const CommentListWrapper = styled.div``;
export const CommentContentsWrapper = styled.label`
  position: relative;
`;
export const CommentContent = styled.input`
  color: black;
  border-radius: 4px;
  border: 1px solid #aaa;
  box-sizing: border-box;
  flex-grow: 1;
  min-height: 46px;
  padding: 12px 18px;
  width: 900px;
  padding: 20px 50px 60px 20px;
  margin-right: 15px;

  &::placeholder {
    color: #aaa;
  }
`;

export const CommentCancelBtn = styled.button`
  position: absolute;
  top: 72px;
  right: 85px;
  font-size: 11px;
  border-right: 2px solid #aaa;
  padding-right: 12px;
  background: none transparent;
  cursor: pointer;
`;
export const CommentBtn = styled.button`
  position: absolute;
  top: 72px;
  right: 28px;
  font-size: 11px;
  padding-left: 14px;
  border: none;
  background: none transparent;
  cursor: pointer;
`;
