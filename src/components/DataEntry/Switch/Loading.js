import React from 'react';
import { Switch } from 'antd';

const Loading = () => {
  return (
    <div>
    <Switch loading defaultChecked />
    <br />
    <Switch size="small" loading />
  </div>
  )
}

export default Loading
