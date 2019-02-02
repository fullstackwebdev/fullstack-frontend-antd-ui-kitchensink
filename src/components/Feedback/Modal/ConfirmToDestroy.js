import React from 'react'


import { Modal, Button } from 'antd';

function destroyAll() {
  Modal.destroyAll();
}

const confirm = Modal.confirm;

function showConfirm() {
  for (let i = 0; i < 3; i += 1) {
    setTimeout(() => {
      confirm({
        content: (
          <Button onClick={destroyAll}>
            Click to destroy all
          </Button>
        ),
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }, i * 500);
  }
}

const ConfirmToDestroy = () => {
  return (
    <div>
    <Button onClick={showConfirm}>Confirm</Button>
  </div>
  )
}

export default ConfirmToDestroy
