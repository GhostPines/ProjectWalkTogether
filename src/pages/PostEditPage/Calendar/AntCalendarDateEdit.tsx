import React, { useEffect } from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import { useRecoilState } from 'recoil';

import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
import { ConfigProvider } from 'antd';
import { ReserveEditDate } from '../../../Rocoil/Atom';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import dayjs from 'dayjs';

const AntCalendarEdit: React.FC = () => {
  const format = 'YYYY/MM/DD';
  const [reserveEditDate, setReserveEditDate] =
    useRecoilState<any>(ReserveEditDate);

  // db 날짜 가져오기
  const { state } = useLocation();

  // db에 가공된 약속 날짜를 달력 defaulValue를 넣어주기 위한 코드
  const year = state.TimeStamp_Posting.slice(0, 4);
  // console.log(year);
  const postingDate = state.RsvDate_Posting.split('/');
  // console.log(postingDate);
  const month = postingDate[0];
  // console.log(month);
  const day = postingDate[1].split(' ')[0];
  // console.log(day);
  const PreviousDate = `${year}/${month}/${day}`;

  // 달력 클릭한 값이 setReserveEditDate에 저장
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    setReserveEditDate(date);
  };

  // 수정하기 전의 초기값이 빈 문자열을 기존의 값으로 바꿔주는 부분
  useEffect(() => {
    if (PreviousDate) {
      setReserveEditDate(dayjs(PreviousDate));
    }
  }, [PreviousDate]);

  return (
    <ConfigProvider locale={locale}>
      <Space direction='vertical'>
        <DatePicker
          onChange={onChange}
          inputReadOnly={true}
          format={format}
          defaultValue={dayjs(PreviousDate)}
          style={{ width: 250, height: 40, fontSize: 20 }}
          allowClear={false}
          placement='bottomRight'
          bordered={false}
        />
      </Space>
    </ConfigProvider>
  );
};

export default AntCalendarEdit;
