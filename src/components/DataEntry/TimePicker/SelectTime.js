import React from 'react';
import { TimePicker } from 'antd';


const SelectTime = () => {
  return (
    <TimePicker minuteStep={15} secondStep={10} />
  )
}

export default SelectTime
