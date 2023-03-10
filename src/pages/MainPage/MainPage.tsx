import styled from 'styled-components';
import CommonStyles from './../../styles/CommonStyles';
import MainBanner from '../../components/main/banner';
import { useNavigate } from 'react-router-dom';
import CategorySlide from '../../components/main/CategorySlide';
import FootOning from './FootOning';
import * as S from './CardSection.style';
import LikesComponent from './LikeComponent';
import Fire from '../../assets/Mainpage/Fire.png';
import Boog from '../../assets/Mainpage/boog.png';
import gitbal from '../../assets/Mainpage/gitbal.png';
import WalkAfter from './WalkAfter';
//컨텐츠를 컴포넌트 폴더로 이동하여 간소화 할 예정

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <CommonStyles>
      <MainBanner />
      <S.CategoryWrapper>
        <CategorySlide />

        <S.ContentLayout>
          <S.TitleLayout>
            <S.HotShoesImg src={Fire} />
            <S.CategoryTitle>뜨거운 신발 </S.CategoryTitle>
          </S.TitleLayout>

          <S.FirstLayout>
            <S.InsideText>현재 인기가 많은 산책들이에요</S.InsideText>
            <S.ButtonWrap>
              <S.Button
                value='2'
                onClick={(event) =>
                  navigate(`/collection/${event.target['value']}`)
                }
              >
                전체보기
              </S.Button>
              <S.ButtonIcon
                src={require('../../assets/Mainpage/chevronleft.svg').default}
              />
            </S.ButtonWrap>
          </S.FirstLayout>
          <S.LikedListItem>
            <LikesComponent />
          </S.LikedListItem>
          <S.Line />
        </S.ContentLayout>

        <S.ContentLayout>
          <S.TitleLayout>
            <S.HotShoesImg src={Boog} />
            <S.CategoryTitle>신발 신는 중 </S.CategoryTitle>
          </S.TitleLayout>

          <S.FirstLayout>
            <S.InsideText>현재 이루어지고 있는 산책들이에요</S.InsideText>
            <S.ButtonWrap>
              <S.Button
                value='1'
                onClick={(event) =>
                  navigate(`/collection/${event.target['value']}`)
                }
              >
                전체보기
              </S.Button>
              <S.ButtonIcon
                src={require('../../assets/Mainpage/chevronleft.svg').default}
              />
            </S.ButtonWrap>
          </S.FirstLayout>

          <S.LikedListItem>
            <FootOning />
          </S.LikedListItem>
          <S.Line />
        </S.ContentLayout>

        <S.ContentLayout>
          <S.TitleLayout>
            <S.HotShoesImg src={gitbal} />
            <S.CategoryTitle>매칭된 신발 </S.CategoryTitle>
          </S.TitleLayout>
          <S.FirstLayout>
            <S.InsideText>매칭이 완료된 산책들이에요</S.InsideText>
            <S.ButtonWrap>
              <S.Button
                value='3'
                onClick={(event) =>
                  navigate(`/collection/${event.target['value']}`)
                }
              >
                전체보기
              </S.Button>
              <S.ButtonIcon
                src={require('../../assets/Mainpage/chevronleft.svg').default}
              />
            </S.ButtonWrap>
          </S.FirstLayout>
          <S.LikedListItem>
            <WalkAfter />
          </S.LikedListItem>
        </S.ContentLayout>
      </S.CategoryWrapper>
    </CommonStyles>
  );
};

//전체를 감싸는 container 스타일

export default MainPage;
