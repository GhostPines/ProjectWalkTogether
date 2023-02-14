import React from 'react'
import styled from 'styled-components'
import * as S from './MapPage.style'
import InfoList from './InfoList/InfoList'
import MapContainer from './Map/map'
import { currentLocationState } from '../../store/selector'
import { AiOutlineSearch } from 'react-icons/ai'
import { RxDividerVertical } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'

const MapPage = () => {
  return (
    <S.MapPageContainer>
      <S.MapPageHeader>
        <S.MapPageSearchBar>
          <AiOutlineSearch size={40} />
          <S.SearchBar placeholder='대화 주제를 검색해 보세요.' />
          <RxDividerVertical size={36} />
          <IoMdClose size={40} />
        </S.MapPageSearchBar>
        <S.MapKaKaoMapContainer>
          <MapContainer />
        </S.MapKaKaoMapContainer>
      </S.MapPageHeader>

      <S.MapPageContentsWrapper>
        <S.MapPageTitle>같이 걸을래요?</S.MapPageTitle>
        <S.UserInfoContainer>
          <InfoList />
        </S.UserInfoContainer>
      </S.MapPageContentsWrapper>
    </S.MapPageContainer>
  )
}

export default MapPage
