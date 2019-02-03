import React from 'react'

import { Pagination } from 'antd';

const MorePages = () => {
  return (
    <Pagination defaultCurrent={6} total={500} />
  )
}

export default MorePages
