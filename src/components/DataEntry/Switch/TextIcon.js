import React from 'react';
import { Switch, Icon } from 'antd';

const TextIcon = () => {
  return (
    <div>
    <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
    <br />
    <Switch checkedChildren="1" unCheckedChildren="0" />
    <br />
    <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="close" />} defaultChecked />
  </div>
  )
}

export default TextIcon
