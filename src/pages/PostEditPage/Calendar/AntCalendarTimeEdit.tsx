import React, { useEffect } from 'react';
import { TimePicker } from 'antd';
import type { Dayjs } from 'dayjs';

import { useRecoilState } from 'recoil';

import { ConfigProvider } from 'antd';
import ko_KR from 'antd/locale/ko_KR';

import { TimeEdit } from '../../../Rocoil/Atom';
import { useLocation } from 'react-router-dom';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import moment from 'moment';

const AntCalendarTimeEdit: React.FC = () => {
  const format = 'HH:mm';
  const [reserveTime, setReserveTime] = useRecoilState<any>(TimeEdit);

  // db 시간 가져오기
  const { state } = useLocation();

  const postingHour =
    // db에 올라간 날짜에서 오전이라면
    state.RsvHour_Posting.slice(0, 2) === '오전'
      ? // 오전을 빼고 7:09값을 보여준다
        state.RsvHour_Posting.slice(3)
      : // db에 올라간 값이 오후 3:15분이면
        // state.RsvHour_Posting.slice(3).split(':')[0] 하면 3이 나온다.
        // Number(12 + 3 ) 15 넘버로 바꾼다.
        `${Number(state.RsvHour_Posting.slice(3).split(':')[0]) + 12}:${
          state.RsvHour_Posting.slice(3).split(':')[1]
        }`;

  // postingHour : 기준으로 나누어준다.
  // ex) 15: 15 --> [15,15]
  const Time = postingHour.split(':');
  // console.log(Time);

  // 1~9까지는 앞에 0이 붙는다
  // ex) [5,5] 이면 Time[0].length는 1 > 1 false이기 떄문에 앞에 0이 붙어서 05가된다.
  // ex) [15,15] 이면 2 > 1 이기 때문에 0이 붙지 않는다.
  const hour = Time[0].length > 1 ? Time[0] : `0${Time[0]}`;
  // console.log(hour);

  const min = Time[1];
  // console.log(min);

  const PreviousHour = `${hour}:${min}`;
  console.log(PreviousHour);
  // console.log(dayjs(PreviousHour));

  const onChange = (time: Dayjs, timeString: string) => {
    setReserveTime(timeString);
    console.log(timeString);
    console.log('날짜/시간', reserveTime);
  };

  // 수정하기 전의 초기값이 빈 문자열을 기존의 값으로 바꿔주는 부분
  useEffect(() => {
    if (PreviousHour) {
      setReserveTime(PreviousHour);
    }
  }, [PreviousHour]);

  return (
    <ConfigProvider locale={ko_KR}>
      <TimePicker
        onChange={onChange}
        inputReadOnly={true}
        format={format}
        defaultValue={dayjs(PreviousHour, format)}
        style={{
          width: 219,
          height: 40,
          fontSize: 20,
          fontWeight: 500,
        }}
        allowClear={false}
        autoFocus={false}
        bordered={false}
        placement='bottomLeft'
      />
    </ConfigProvider>
  );
};

export default AntCalendarTimeEdit;
