import React from 'react';
import styled from 'styled-components';
const EditForm = () => {
  return (
    <Form>
      <EditComment></EditComment>
    </Form>
  );
};

export default EditForm;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const EditComment = styled.textarea`
  width: 600px;
  height: 100px;
  resize: none;
  border: 1px solid black;
  font-size: 16px;
`;
