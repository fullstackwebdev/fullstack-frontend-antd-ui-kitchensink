import React from 'react';
import { DatePicker } from 'antd';

const { RangePicker, MonthPicker } = DatePicker;

const ExtraFooter = () => {
  return (
    <div>
    <DatePicker renderExtraFooter={() => 'extra footer'} />
    <DatePicker renderExtraFooter={() => 'extra footer'} showTime />
    <RangePicker renderExtraFooter={() => 'extra footer'} />
    <RangePicker renderExtraFooter={() => 'extra footer'} showTime />
    <MonthPicker renderExtraFooter={() => 'extra footer'} placeholder="Select month" />
  </div>
  )
}

export default ExtraFooter
