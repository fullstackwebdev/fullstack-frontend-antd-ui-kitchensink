import React from 'react'

import { message, Button } from 'antd';

const info = () => {
  message.info('This is a normal message');
};


const success = () => {
    message.success('This is a message of success');
  };
  
  const error = () => {
    message.error('This is a message of error');
  };
  
  const warning = () => {
    message.warning('This is message of warning');
  };

  

const Basic = () => {
  return (
    <div>
       <Button type="primary" onClick={info}>Display normal message</Button>
       <Button onClick={success}>Success</Button>
    <Button onClick={error}>Error</Button>
    <Button onClick={warning}>Warning</Button>
 
    </div>
  )
}

export default Basic
