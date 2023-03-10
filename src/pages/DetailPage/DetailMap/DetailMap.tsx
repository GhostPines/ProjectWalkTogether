import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { paramsState } from '../../../Rocoil/Atom';
import { useSetRecoilState } from 'recoil';

import * as S from './DetailMap.style';

import { Map, MapMarker } from 'react-kakao-maps-sdk';

interface Props {
  getPostings: any;
}

const MapContainer = ({ getPostings }: Props) => {
  console.log(getPostings);

  // 현재 위치를 가져오기 위한 state 생성
  const [myLoca, setMyLoca] = useState({ lat: null, lng: null });

  const navigate = useNavigate();
  const setParams = useSetRecoilState(paramsState);

  // 지도 좌표를 저장할 state
  const [position, setPosition] = useState({ lat: null, lng: null });

  // 키워드로 장소검색하기를 위한 state
  const [info, setInfo] = useState<any>();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState<any>();
  const [bounds, setBounds] = useState();

  // 좌표 - 주소 변환을 위한 State
  const [address, setAddress] = useState('');
  const geocoder = new kakao.maps.services.Geocoder();

  // 인포윈도우 Open 여부를 저장하는 state 입니다.
  const [isOpen, setIsOpen] = useState({ lat: '', lng: '', isopen: false });

  // 게시글의 위치를 저장하는 state
  const [postPosition, setPostPosition] = useState({
    lat: getPostings.MeetLatitude_Posting,
    lng: getPostings.MeetLongitude_Posting,
  });

  // 게시글의 위치를 지도에 표시
  useEffect(() => {
    setPostPosition({
      lat: getPostings.MeetLatitude_Posting,
      lng: getPostings.MeetLongitude_Posting,
    });
  }, [getPostings]);

  console.log(postPosition);

  // 사용자 위치를 가져오기 위한 useEffect
  React.useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어온다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setMyLoca({
            lat: position.coords.latitude, // 위도
            lng: position.coords.longitude, // 경도
          });
        },
        (err) => {
          alert('현재 위치를 표시할 수 없어요');
        },
        { enableHighAccuracy: true } // 위치정보의 정확도를 높이는 옵션
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때
      alert('현재 위치를 표시할 수 없어요');
    }
  }, []);

  // 커스터마이징 된 지도 컨트롤러
  const mapRef = useRef(null);

  // 줌인
  const zoomIn = () => {
    const mapControl = mapRef.current;
    mapControl.setLevel(map.getLevel() - 1);
  };
  // 줌아웃
  const zoomOut = () => {
    const mapControl = mapRef.current;
    mapControl.setLevel(map.getLevel() + 1);
  };
  // 내위치 찾기
  const findMyLocation = () => {
    const mapControl = mapRef.current;
    mapControl.panTo(new kakao.maps.LatLng(myLoca.lat, myLoca.lng));
  };
  // 카카오 길찾기 링크로 이동 (내 위치 -> useState Postion에 저장된 위치)
  const linkToKaKaoNavi = () => {
    const url = `https://map.kakao.com/link/search/${address}`;
    window.open(url);
  };

  // geocoder를 이용해 getPostings의 좌표를 주소로 변환
  useEffect(() => {
    geocoder.coord2Address(
      getPostings.MeetLongitude_Posting,
      getPostings.MeetLatitude_Posting,
      (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          setAddress(result[0].address.address_name);
        }
      }
    );
  }, [getPostings]);

  console.log(address);

  return (
    <>
      <S.MapAndControlContainer>
        <Map
          center={postPosition}
          style={{ width: '100%', height: '450px' }}
          level={3}
          onCreate={setMap}
          ref={mapRef}
          onClick={(_t, mouseEvent) => {
            // if setIsOpen is true, set it to false
            // else call setPosition
            if (isOpen.isopen) {
              setIsOpen({
                lat: '',
                lng: '',
                isopen: false,
              });
            } else
              setPosition({
                lat: mouseEvent.latLng.getLat(),
                lng: mouseEvent.latLng.getLng(),
              });
          }}
        >
          {position && <MapMarker position={postPosition} />}
          <S.CustomZoomControl className='custom_zoomcontrol'>
            <S.ZoomInButton onClick={zoomIn}>
              {/* <AiOutlinePlus size={40} /> */}
              <S.ZoomInSVG
                src={
                  require('../../../assets/MapPageIcon/PlusButton.svg').default
                }
              />
            </S.ZoomInButton>
            <S.ZoomOutButton onClick={zoomOut}>
              <S.ZoomOutSVG
                src={
                  require('../../../assets/MapPageIcon/MinusButton.svg').default
                }
              />
            </S.ZoomOutButton>
            <S.FindMyLocationButton onClick={findMyLocation}>
              <S.FindMyLocationSVG
                src={
                  require('../../../assets/MapPageIcon/LocationButton.svg')
                    .default
                }
              />
            </S.FindMyLocationButton>
            <S.LinkToKaKaoNavibutton onClick={linkToKaKaoNavi}>
              <S.LinkToKaKaoNaviSVG
                src={
                  require('../../../assets/MapPageIcon/NaviButton.svg').default
                }
              />
            </S.LinkToKaKaoNavibutton>
          </S.CustomZoomControl>
        </Map>
      </S.MapAndControlContainer>
    </>
  );
};

export default MapContainer;
