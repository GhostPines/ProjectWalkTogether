import * as S from './CardSkeleton.style';
import CardSkeletonMap from './CardSkeletonMap';

const CardSkeleton = () => {
  return (
    <>
      <S.CardListItem>
        {Array(8)
          .fill('')
          .map((_, idx) => {
            return <CardSkeletonMap key={idx} />;
          })}
      </S.CardListItem>
    </>
  );
};

export default CardSkeleton;
