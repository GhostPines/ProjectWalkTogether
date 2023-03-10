import React, { useEffect } from 'react';
import { TimePicker } from 'antd';
import type { Dayjs } from 'dayjs';

import { useRecoilState } from 'recoil';
import { Time } from '../../../../Rocoil/Atom';
import { ConfigProvider } from 'antd';
import ko_KR from 'antd/locale/ko_KR';

const AntCalendarTime: React.FC = () => {
  const format = 'HH:mm';
  const [reserveTime, setReserveTime] = useRecoilState<string>(Time);

  const onChange = (time: Dayjs, timeString: string) => {
    setReserveTime(timeString);
    console.log('날짜/시간', reserveTime);
  };

  return (
    <ConfigProvider locale={ko_KR}>
      <TimePicker
        onChange={onChange}
        inputReadOnly={true}
        format={format}
        placeholder='시간을 입력해주세요.'
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

export default AntCalendarTime;
