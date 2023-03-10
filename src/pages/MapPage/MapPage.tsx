import React from 'react';
import * as S from './MapPage.style';
import InfoList from './InfoList/InfoList';
import MapContainer from './Map/map';
import FilterBar from './InfoList/Filter/Filter';

import CommonStyles from './../../styles/CommonStyles';
import { useRecoilValue } from 'recoil';

import { Cetegory } from '../../Rocoil/Atom';
import { Post, usePosts } from '../../api/postsApi';

const MapPage = () => {
  // firestore에서 데이터 'Post' 가져오기

  const { posts } = usePosts();

  // not a typo
  const cetegory = useRecoilValue(Cetegory);

  return (
    <CommonStyles>
      <S.MapPageContainer>
        <S.MapPageHeader>
          <S.MapKaKaoMapContainer>
            {/* Map Container */}
            <MapContainer Post={posts} />
          </S.MapKaKaoMapContainer>
        </S.MapPageHeader>

        <S.MapPageContentsWrapper>
          <S.MapPageTitle>같이 걸을래요?</S.MapPageTitle>
          <S.UserInfoContainer>
            {/* Filter Bar */}
            <FilterBar
              setPostCategory={function (
                value: React.SetStateAction<string>
              ): void {
                throw new Error('Function not implemented.');
              }}
              setShow={function (value: React.SetStateAction<boolean>): void {
                throw new Error('Function not implemented.');
              }}

              // 프롭스로 넘겨줄 함수를 만들어서 넘겨줘야함
            />
            {/* Posting List */}
            <InfoList Post={posts} />
          </S.UserInfoContainer>
        </S.MapPageContentsWrapper>
      </S.MapPageContainer>
    </CommonStyles>
  );
};

export default MapPage;
