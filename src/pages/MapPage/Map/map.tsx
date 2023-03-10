import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { paramsState } from '../../../Rocoil/Atom';
import { useSetRecoilState } from 'recoil';
import { RxDividerVertical } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';

// import { dbState } from '../../../store/selector'

import * as S from './map.style';

import { Map, MapMarker } from 'react-kakao-maps-sdk';

const MapContainer = (Post) => {
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

  // input value 를 가져오기 위한 state
  const [search, setSearch] = useState('');
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  // 좌표 - 주소 변환을 위한 State
  const [address, setAddress] = useState('');
  const geocoder = new kakao.maps.services.Geocoder();

  // 인포윈도우 Open 여부를 저장하는 state 입니다.
  const [isOpen, setIsOpen] = useState({ lat: '', lng: '', isopen: false });

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

  // geocoder를 이용해 좌표 - 주소 변환
  const convertAddress = () => {
    geocoder.coord2Address(position.lng, position.lat, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setAddress(result[0].address.address_name);
      }
    });
  };
  convertAddress();

  // 키워드로 장소검색하기 위한 useEffect
  useEffect(() => {
    SearchFunction();
  }, [map]);

  // 검색어 삭제
  const SearchTextDeleteHanlder = () => {
    setSearch('');
  };

  //  // 지도를 불러오기 위한 함수
  const SearchFunction = () => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(search, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];

        for (var i = 0; i < data.length; i++) {
          // @ts-ignore
          // markers.push({
          //   position: {
          //     lat: data[i].y,
          //     lng: data[i].x,
          //   },
          //   content: data[i].place_name,
          // })
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    });
  };

  // db의 Post 컬렉션에서 가져온 데이터를 MapMarker에 넣어주기 위한 배열 생성
  const Markers = Post.Post.map((post) => {
    // console.log(Post, post.MeetLatitude_Posting)
    // console.log(post.MeetLongitude_Posting)
    // geocoder를 이용해 좌표 - 주소 변환
    // geocoder.coord2Address(
    //   post.MeetLongitude_Posting,
    //   post.MeetLatitude_Posting,
    //   function (result, status) {
    //     if (status === kakao.maps.services.Status.OK) {
    //       setAddress(result[0].address.address_name)
    //     }
    //   }
    // )

    const lat = post.MeetLatitude_Posting;
    const lng = post.MeetLongitude_Posting;

    return (
      <MapMarker
        key={post.PostingID_Posting}
        position={{
          lat,
          lng,
        }}
        clickable={true} // 마커를 클릭했을 때 클릭 이벤트를 발생시킬지 여부를 지정합니다.
        onClick={() => {
          setIsOpen({
            lat,
            lng,
            isopen: true,
          });
        }}
      >
        {lat === isOpen.lat && (
          <S.InfoWindow
            onClick={() => {
              setParams(post.id);
              navigate(`/detailpage/${post.id}`);
            }}
          >
            <S.ResultListCardImage
              src={post.ThumbnailURL_Posting}
            ></S.ResultListCardImage>
            <S.ResultListCard key={post.PostingID_Posting}>
              <S.ResultListCardTitle>
                {post.Title_Posting}
              </S.ResultListCardTitle>
              <S.ResultListTagList>
                <S.ResultListTag>#음악</S.ResultListTag>
                <S.ResultListTag>#락</S.ResultListTag>
                <S.ResultListTag>#뮤즈파에요</S.ResultListTag>
              </S.ResultListTagList>
              <S.ResultListCardLine />
              <S.ResultListCardLocationTimeDateWrapper>
                <S.ResultListCardLocation>
                  {post.Address_Posting}
                </S.ResultListCardLocation>
                <S.ResultListCardDateTimeLikeWrapper>
                  <S.ResultListCardDateTimeWrapper>
                    <S.ResultListCardDate>
                      {post.RsvDate_Posting}
                    </S.ResultListCardDate>
                    <S.ResultListCardTime>
                      {post.RsvHour_Posting}
                    </S.ResultListCardTime>
                  </S.ResultListCardDateTimeWrapper>
                </S.ResultListCardDateTimeLikeWrapper>
              </S.ResultListCardLocationTimeDateWrapper>
            </S.ResultListCard>
          </S.InfoWindow>
        )}
      </MapMarker>
    );
  }, []);

  return (
    <>
      <S.MapPageSearchBar
        onSubmit={(e) => {
          e.preventDefault();
          SearchFunction();
        }}
      >
        <S.SearchSVG
          src={require('../../../assets/MapPageIcon/SearchLens.svg').default}
        />

        <S.SearchBar
          placeholder='약속 장소를 검색해보세요.'
          type={'text'}
          value={search}
          onChange={onChange}
        />
        <RxDividerVertical size={36} />
        <S.DeleteTextWapper onClick={SearchTextDeleteHanlder}>
          <IoMdClose size={40} />
        </S.DeleteTextWapper>
      </S.MapPageSearchBar>

      <S.MapAndControlContainer>
        <Map
          center={myLoca}
          style={{ width: '100%', height: '100%' }}
          level={4}
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
          {position && <MapMarker position={position} />}
          {Markers}
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
