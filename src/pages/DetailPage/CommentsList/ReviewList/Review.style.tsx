import styled from 'styled-components';

export const CommentList = styled.ul`
  list-style: none;
`;
export const CommentLi = styled.li`
  display: flex;
  /* flex-direction: row; */
  /* justify-content: space-between; */
  /* align-items: start; */
  margin: 16px 0px;
  line-height: 1.5;
  padding-bottom: 16px;
  border-bottom: 1px solid rgb(205, 205, 205);
  padding: 20px 40px 30px;
`;
export const CommentProfileImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-right: 30px;
`;
export const CommentUserName = styled.div`
  margin-bottom: 8px;
  font-weight: 700;
`;
export const CommentInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 10px 4px;
`;
export const CommentDate = styled.div`
  width: 100px;
  color: rgb(130, 130, 130);
`;
export const CommentDeleteBtn = styled.button`
  top: 72px;
  right: 28px;
  font-size: 11px;
  padding-left: 12px;
  padding-right: 2px;
  background: none transparent;
  cursor: pointer;
`;

export const CommentEditBtn = styled.button`
  top: 72px;
  right: 85px;
  font-size: 11px;
  border-right: 2px solid #aaa;
  padding-right: 12px;
  background: none transparent;
  cursor: pointer;
`;

export const CommentBox = styled.div`
  border-radius: 4px;
  background: #efefef;
  align-items: center;
  width: 900px;
  gap: 10px;
`;
export const CommentWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
`;
export const CommentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 10px 10px 10px;
`;
export const CommentCancelDeleteBtnWrapper = styled.div``;
