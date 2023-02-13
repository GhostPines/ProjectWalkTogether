import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

declare global {
  interface Window {
    kakao: any;
  }
}
const options = {
  //   center: new window.kakao.maps.LatLng(33.450701, 126.570667),
  level: 3,
};

const Map = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    new window.kakao.maps.Map(ref.current, options);
  }, []);

  return <StyledContainer id='map' ref={ref} />;
};

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default Map;
