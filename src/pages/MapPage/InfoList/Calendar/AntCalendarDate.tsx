import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import { useRecoilState } from 'recoil';
// import { ReserveDate } from '../Rocoil/Atom';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
import { ConfigProvider } from 'antd';
import { FilterSelectedDateForMapPage } from '../../../../Rocoil/Atom';

const AntCalendarMap: React.FC = () => {
  const format = 'YYYY/MM/DD';
  const [selectedDateForMapPage, setselectedDateForMapPage] =
    useRecoilState<any>(FilterSelectedDateForMapPage);
  const [meetDateForMapPage, setMeetDateForMapPage] = useRecoilState(
    FilterSelectedDateForMapPage
  );

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    // console.log(date, dateString);
    setselectedDateForMapPage(date);
    // console.log('달력/날짜:', reserveDate);
  };

  const date = (y: number, m: number, d: number) => {
    const D = new Date(y, m, d);

    switch (D.getDay()) {
      case 0:
        return '(일)';
      case 1:
        return '(월)';
      case 2:
        return '(화)';
      case 3:
        return `(수)`;
      case 4:
        return `(목)`;
      case 5:
        return '(금)';
      case 6:
        return `(토)`;
      default:
        return '';
    }
  };

  const y = meetDateForMapPage.$y;
  const m = meetDateForMapPage.$M;
  const d = meetDateForMapPage.$D;
  const month = meetDateForMapPage.$M + 1;
  // console.log(y, m, d);

  const SelectedDate = `${month}/${d} ${date(y, m, d)}`;
  // console.log(SelectedDate);

  return (
    <ConfigProvider locale={locale}>
      <Space direction='vertical'>
        <DatePicker
          onChange={onChange}
          inputReadOnly={true}
          format={format}
          placeholder='날짜'
          style={{ width: 120, height: 30 }}
          allowClear={false}
          placement='bottomRight'
          // bordered={false}
        />
      </Space>
    </ConfigProvider>
  );
};

export default AntCalendarMap;
