import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { NewpostTag } from '../../Rocoil/Atom';
import * as S from './Tag.style';

const Tag = (props: { tagItem: string }) => {
  const Tag = props.tagItem;
  const [tagItem, setTagItem] = useState('');
  const [tagList, setTagList] = useRecoilState(NewpostTag);
  const [isInputClicked, setIsInputClicked] = useState(false);

  const onKeyPress = (e) => {
    if (tagList.length >= 3) {
      window.alert('더이상 태그를 추가할 수 없습니다!');
      setIsInputClicked(true);
      return;
    }
    if (tagList.includes(e.target.value)) {
      window.alert('중복된 태그입니다');
      return setTagList([...tagList]);
    }

    if (e.target.value.length < 7 && e.key === 'Enter') {
      submitTagItem();
    } else if (e.key === 'Backspace') {
      let size = tagList.length;
      setTagList([...tagList.slice(0, size - 1)]);
      // deleteClick(tagList);
    }
  };

  const submitTagItem = () => {
    let updatedTagList = [...tagList];
    updatedTagList.push(tagItem);
    setTagList(updatedTagList);
    setTagItem('');
  };

  const deleteClick = (index: number) => {
    // console.log(index);
    // console.log('click delete');
    setTagList([...tagList.slice(0, index), ...tagList.slice(index + 1)]);
  };

  //보여줄때는 props로받아온걸로

  return (
    <S.WholeBox>
      <S.TagBox>
        {tagList.map((tagItem, index) => {
          return (
            <S.TagItem key={index}>
              <S.Text>{'#' + tagItem}</S.Text>
              <S.Button onClick={() => deleteClick(index)}>X</S.Button>
            </S.TagItem>
          );
        })}
        <S.TagInput
          maxLength={6}
          type='text'
          placeholder={isInputClicked === true ? '' : '해쉬태그를 입력해주세요'}
          tabIndex={2}
          onChange={(e) => setTagItem(e.target.value)}
          value={tagItem}
          onKeyPress={onKeyPress}
        />
      </S.TagBox>
    </S.WholeBox>
  );
};

export default Tag;
