import React, { Component } from 'react'
import { Checkbox } from 'antd';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

const BasicCheck = (props) => (
    <Checkbox onChange={onChange}>Checkbox</Checkbox>
)

export default BasicCheck