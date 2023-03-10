import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { FilterSelectedDate } from '../../Rocoil/Atom';
import { useLocation } from 'react-router-dom';

function MeetDateInitializer() {
  const [MeetDate, setMeetDate] = useRecoilState(FilterSelectedDate);
  // useLoaction 현재의 주소
  const location = useLocation();

  useEffect(() => {
    // 로케이션에 category라는 값이 없으면 setMeetDate 날려버린다. 즉 선택했던 달력 값이 사라진다.
    // location이 바뀔때마다 if문이 실행
    // 카테고리를 나갔으면 setMeetDate를 날려버린다.
    if (!location.pathname.includes('category')) setMeetDate('');
  }, [location]);
  return <></>;
}

export default MeetDateInitializer;
