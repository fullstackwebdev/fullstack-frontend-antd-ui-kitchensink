import React from 'react';

import { Upload, Button, Icon } from 'antd';

const UploadDirectory = () => {
  return (
    <Upload action="//jsonplaceholder.typicode.com/posts/" directory>
    <Button>
      <Icon type="upload" /> Upload Directory
    </Button>
  </Upload>
  )
}

export default UploadDirectory
