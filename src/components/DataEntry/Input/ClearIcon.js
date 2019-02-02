import React, { Component } from 'react'
import { Input } from 'antd';

const onChange = (e) => {
  console.log(e);
};

const ClearIcon = () => (
    <Input placeholder="input with clear icon" allowClear onChange={onChange} />
)
  
export default ClearIcon;
