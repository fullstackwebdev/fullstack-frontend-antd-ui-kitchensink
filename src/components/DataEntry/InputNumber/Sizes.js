import React from 'react'
import { InputNumber } from 'antd';

function onChange(value) {
  console.log('changed', value);
}

const Sizes = () => {
  return (
    <div>
    <InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={onChange} />
    <InputNumber min={1} max={100000} defaultValue={3} onChange={onChange} />
    <InputNumber size="small" min={1} max={100000} defaultValue={3} onChange={onChange} />
  </div>
  )
}

export default Sizes
