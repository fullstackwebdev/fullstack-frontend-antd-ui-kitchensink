import React from 'react';

import { Calendar } from 'antd';

function onPanelChange(value, mode) {
  console.log(value, mode);
}


const Basic = () => {
  return (
    <Calendar onPanelChange={onPanelChange} />
  )
;


}

export default Basic
