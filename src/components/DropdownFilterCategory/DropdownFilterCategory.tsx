import React from 'react';
import { CategorysList } from '../../utils/CategorysList';
import * as S from './DropdownFilterCategory.style';
import { useNavigate } from 'react-router-dom';

declare interface SetProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setTextChange: React.Dispatch<React.SetStateAction<string>>;
  TextChange?: string;
}

const DropdownFilterCategory = ({
  setShow,
  setTextChange,
  TextChange,
}: SetProps) => {
  const navigate = useNavigate();

  // 카테고리 선택 시 이너 텍스트 바뀌는 부분
  const buttonClickHandler = (event: any) => {
    setTextChange(event.target.innerText);
  };

  // 카테고리 선택 시 해당 카테고리로 이동
  const confirmButtonClickHandler = () => {
    navigate('/category/' + TextChange);
    setShow(false);
  };

  return (
    <S.DropdownBox>
      <S.DropdownConatainer>
        <S.DropdownWapper>
          {CategorysList.map((data) => {
            return (
              <S.CategoryBtn onClick={buttonClickHandler}>
                {data.name}
              </S.CategoryBtn>
            );
          })}
        </S.DropdownWapper>
        <S.CategoryConfirmBtn onClick={() => confirmButtonClickHandler()}>
          선택 완료
        </S.CategoryConfirmBtn>
      </S.DropdownConatainer>
    </S.DropdownBox>
  );
};
export default DropdownFilterCategory;
