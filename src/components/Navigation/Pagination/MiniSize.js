import React from 'react'

import { Pagination } from 'antd';

function showTotal(total) {
  return `Total ${total} items`;
}

const MiniSize = () => {
  return (
    <div>
    <Pagination size="small" total={50} />
    <Pagination size="small" total={50} showSizeChanger showQuickJumper />
    <Pagination size="small" total={50} showTotal={showTotal} />
    <Pagination simple defaultCurrent={2} total={50} />
  </div>
  )
}

export default MiniSize
