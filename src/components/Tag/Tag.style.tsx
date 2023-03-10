import styled, { css } from 'styled-components';

export const WholeBox = styled.div`
  /* height: 100vh; */
`;

export const TagBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 84%;
  margin-bottom: 10px;
`;

export const TagItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  margin-right: 4px;
  background-color: #8ca6bc;
  border-radius: 5px;
  color: white;
  font-size: 10px;
`;

export const Text = styled.span``;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 11px;
  height: 11px;
  margin-left: 5px;
  background-color: white;
  border-radius: 50%;
  color: #c7d5ff;
  font-size: 11px;
`;

export const TagInput = styled.input`
  display: inline-flex;
  min-width: 200px;
  background: transparent;
  border: none;
  outline: none;
  cursor: text;
  font-size: 16px;
  font-family: 'SUITERegular';

  &::placeholder {
    font-family: 'SUIT';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #7d8bae;
  }
`;
