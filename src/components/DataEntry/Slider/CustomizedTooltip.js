import React from 'react';
import { Slider } from 'antd';

function formatter(value) {
  return `${value}%`;
}

const CustomizedTooltip = () => {
  return (
    <div>
    <Slider tipFormatter={formatter} />
    <Slider tipFormatter={null} />
  </div>
  )
}

export default CustomizedTooltip
