import * as S from './CardSkeletonMap.style';

const CardSkeletonMap = () => {
  return (
    <>
      <S.CardBox>
        <S.CardImg />
        <S.CardTtileWrapper>
          <S.CardTtile />
        </S.CardTtileWrapper>
        <S.CardHashWrapper>
          <S.HashTag />
        </S.CardHashWrapper>
        <S.CardDesWrapper>
          <S.CardDes />
        </S.CardDesWrapper>
      </S.CardBox>
    </>
  );
};

export default CardSkeletonMap;
