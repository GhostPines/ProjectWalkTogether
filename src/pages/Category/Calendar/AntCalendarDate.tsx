import React, { useEffect, useState } from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import { useRecoilState, useRecoilValue } from 'recoil';
// import { ReserveDate } from '../Rocoil/Atom';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
import { ConfigProvider } from 'antd';
import { FilterSelectedDate } from '../../../Rocoil/Atom';
import { query, collection, where, onSnapshot } from 'firebase/firestore';
import { dbService } from './../../../common/firebase';
import useDetectClose from './../../../hooks/useDetectClose';

const AntCalendarMap: React.FC = () => {
  const format = 'YYYY/MM/DD';
  const [filterSelectedDate, setfilterSelectedDate] =
    useRecoilState<any>(FilterSelectedDate);

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    setfilterSelectedDate(date);

    console.log(filterSelectedDate);
  };

  return (
    <ConfigProvider locale={locale}>
      <Space direction='vertical'>
        <DatePicker
          onChange={onChange}
          inputReadOnly={true}
          format={format}
          placeholder='날짜'
          style={{
            width: 79,
            height: 27,
            marginRight: 8,
            marginTop: 10,
            fontSize: 12,
          }}
          allowClear={false}
          // placement='bottomRight'
          // bordered={false}
        />
      </Space>
    </ConfigProvider>
  );
};

export default AntCalendarMap;
