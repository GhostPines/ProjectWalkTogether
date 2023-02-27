import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { NewpostTag } from '../Rocoil/Atom';

const Tag = (props: { tagItem: string }) => {
  const Tag = props.tagItem;
  const [tagItem, setTagItem] = useState('');
  const [tagList, setTagList] = useRecoilState(NewpostTag);

  const onKeyPress = (e) => {
    if (tagList.length >= 3) {
      window.alert('더이상 태그를 추가할 수 없습니다!');
      return;
    }
    if (tagList.includes(e.target.value)) {
      window.alert('중복된 태그입니다');
      return setTagList([...tagList]);
    }

    if (e.target.value.length < 7 && e.key === 'Enter') {
      submitTagItem();
    }
  };

  const submitTagItem = () => {
    let updatedTagList = [...tagList];
    updatedTagList.push(tagItem);
    setTagList(updatedTagList);
    setTagItem('');
  };

  const deleteTagItem = (e) => {
    const deleteTagItem = e.target.parentElement.firstChild.innerText;
    const filteredTagList = tagList.filter(
      (tagItem) => tagItem !== deleteTagItem
    );
    setTagList(filteredTagList);
  };

  //보여줄때는 props로받아온걸로

  return (
    <WholeBox>
      <TagBox>
        {tagList.map((tagItem, index) => {
          return (
            <TagItem key={index}>
              <Text>{'#' + tagItem}</Text>
              <Button onClick={deleteTagItem}>X</Button>
            </TagItem>
          );
        })}
        <TagInput
          maxLength={6}
          type='text'
          placeholder='Press enter to add tags'
          tabIndex={2}
          onChange={(e) => setTagItem(e.target.value)}
          value={tagItem}
          onKeyPress={onKeyPress}
        />
      </TagBox>
    </WholeBox>
  );
};

const WholeBox = styled.div`
  height: 100vh;
`;

const TagBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-height: 40px;
  width: 84%;
  padding: 0 10px;
  border-radius: px;
  &:focus-within {
    border-color: #8ca6bc;
  }
  background: #eef1f7;
`;

const TagItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  padding: 5px;
  background-color: #8ca6bc;
  border-radius: 5px;
  color: white;
  font-size: 13px;
`;

const Text = styled.span``;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  margin-left: 5px;
  background-color: white;
  border-radius: 50%;
  color: #c7d5ff;
`;

const TagInput = styled.input`
  display: inline-flex;
  min-width: 150px;
  background: transparent;
  border: none;
  outline: none;
  cursor: text;
`;

export default Tag;
