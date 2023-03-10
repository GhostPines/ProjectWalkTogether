import React from 'react';
import { constSelector } from 'recoil';
import styled from 'styled-components';
import { CategorysList } from '../../../utils/CategorysList';
import { useNavigate } from 'react-router-dom';

const CategoryAll = () => {
  const navigate = useNavigate();

  return (
    <Category>
      {CategorysList.map((Category) => {
        return (
          <Categoryitem onClick={() => navigate(`/category/${Category.name}`)}>
            <Img src={Category.img} />
            <ImgTitle>{Category.name}</ImgTitle>
          </Categoryitem>
        );
      })}
    </Category>
  );
};

export default CategoryAll;

export const Category = styled.div`
  font-family: 'pretendard';
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  grid-gap: 8px 0;
  gap: 8px 0;
  margin: 0 auto 32px;
`;

export const Categoryitem = styled.div`
  cursor: pointer;
  width: 23%;
  justify-content: flex-start;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 4px;
  gap: 4px;
  color: #6b6766;
`;
export const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f2efed;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
export const ImgTitle = styled.p``;
