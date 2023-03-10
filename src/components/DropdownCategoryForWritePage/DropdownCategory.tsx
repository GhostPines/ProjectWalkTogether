import React from 'react';
import * as S from './DropdownCategoryForWrite.style';
import { CategorysList } from '../../utils/CategorysList';

// setPostCategory
declare interface SetProps {
  setPostCategory: React.Dispatch<React.SetStateAction<string>>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
const DropdownCategory = ({ setPostCategory, setShow }: SetProps) => {
  // 카테고리 선택 시 이너 텍스트 바뀌는 부분
  const buttonClickHandler = (event: any) => {
    setPostCategory(event.target.innerText);
  };

  // 모달 닫는 부분
  const confirmButtonClickHandler = () => {
    setShow(false);
  };

  // CategorysList에서 전체라는 name빼고 detailCategroyFilter 에 넣어준다
  const detailCategroyFilter = CategorysList.filter((el) => el.name !== '전체');

  return (
    <S.DropdownBox>
      <S.DropdownConatainer>
        <S.DropdownWapper>
          {detailCategroyFilter.map((data) => {
            return (
              <S.CategoryBtn onClick={buttonClickHandler} key={data.name}>
                {data.name}
              </S.CategoryBtn>
            );
          })}
        </S.DropdownWapper>
        <S.CategoryConfirmBtn
          // 24~25
          onClick={() => confirmButtonClickHandler()}
        >
          선택 완료
        </S.CategoryConfirmBtn>
      </S.DropdownConatainer>
    </S.DropdownBox>
  );
};

export default DropdownCategory;
