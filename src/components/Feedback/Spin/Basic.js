import React from 'react'
import { Spin, Alert } from 'antd';

const Basic = () => {
  return (
      <>
    <div>
      <Spin />
    </div>
    <div>
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </div>
  <Spin tip="Loading...">
    <Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"
    />
  </Spin>
    </>
  )
}

export default Basic
