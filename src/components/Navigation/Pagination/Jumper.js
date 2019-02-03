import React from 'react'

import { Pagination } from 'antd';

function onChange(pageNumber) {
  console.log('Page: ', pageNumber);
}


const Jumper = () => {
  return (
    <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
  )
}

export default Jumper
