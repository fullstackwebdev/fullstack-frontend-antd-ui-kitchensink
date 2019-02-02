import React from 'react'

import { Statistic, Row, Col, Icon } from 'antd';


const AddUnitPrefix = () => {
  return (
    <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Feedback" value={1128} prefix={<Icon type="like" />} />
    </Col>
    <Col span={12}>
      <Statistic title="Unmerged" value={93} suffix="/ 100" />
    </Col>
  </Row>
  )
}

export default AddUnitPrefix
