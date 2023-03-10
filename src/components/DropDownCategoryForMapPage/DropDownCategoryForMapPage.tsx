import React from 'react';
import { CategorysList } from '../../utils/CategorysList';
import * as S from './DropDownCategoryForMapPage.style';

declare interface SetProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setTextChange: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  TextChange?: string;
}

const DropdownFilterCategoryForMapPage = ({
  setShow,
  setTextChange,
  setCategory,
  TextChange,
}: SetProps) => {
  // 카테고리 선택 시 이너 텍스트 바뀌는 부분
  const buttonClickHandler = (event: any) => {
    setTextChange(event.target.innerText);
  };

  // 선택한 카테고리 이름으로 바뀌면서 모달 닫는 부분
  const confirmButtonClickHandler = (name: string) => {
    setCategory(name);
    setShow(false);
  };

  return (
    <S.DropdownBox>
      <S.DropdownConatainer>
        <S.DropdownWapper>
          {CategorysList.map((data) => {
            return (
              <S.CategoryBtn onClick={buttonClickHandler} key={data.name}>
                {data.name}
              </S.CategoryBtn>
            );
          })}
        </S.DropdownWapper>

        <S.CategoryConfirmBtn
          onClick={() => confirmButtonClickHandler(TextChange)}
        >
          선택 완료
        </S.CategoryConfirmBtn>
      </S.DropdownConatainer>
    </S.DropdownBox>
  );
};
export default DropdownFilterCategoryForMapPage;
