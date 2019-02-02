import React from 'react'

import { Progress } from 'antd';

const SquareLinecap = () => {
  return (
    <div>
    <Progress strokeLinecap="square" percent={75} />
    <Progress strokeLinecap="square" type="circle" percent={75} />
    <Progress strokeLinecap="square" type="dashboard" percent={75} />
  </div>
  )
}

export default SquareLinecap
