import styled from 'styled-components';

//가장바깥 배경
export const MainPost = styled.div`
  background-color: black;
`;

export const Boxcontainer = styled.div`
  margin-bottom: 100px;
`;

//제출 버튼
export const PostSubmitBox = styled.div`
  margin-top: -115px;
`;

export const PostSubmitBtn = styled.button`
  position: relative;
  left: 726px;
  width: 218px;
  height: 42px;
  font-weight: 700;
  border-radius: 4px;
  background-color: rgba(125, 139, 174, 1);
  color: white;
  :active {
    width: 214px;
    height: 40px;
  }
`;
