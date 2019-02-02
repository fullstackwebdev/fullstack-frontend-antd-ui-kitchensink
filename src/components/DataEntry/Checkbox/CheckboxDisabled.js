import React, { Component } from 'react'
import { Checkbox } from 'antd';

const DisabledCheckbox = () => (
  <div>
    <Checkbox defaultChecked={false} disabled />
    <br />
    <Checkbox defaultChecked disabled />
  </div>
)

export default DisabledCheckbox