import React from 'react'
import { Input } from 'antd';

const Sizes = () => {
  return (
    <div className="example-input">
    <Input size="large" placeholder="large size" />
    <Input placeholder="default size" />
    <Input size="small" placeholder="small size" />
  </div>
  )
}

export default Sizes
