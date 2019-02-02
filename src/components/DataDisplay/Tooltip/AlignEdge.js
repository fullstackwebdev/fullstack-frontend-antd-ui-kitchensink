import React from 'react'

import { Tooltip, Button } from 'antd';

const AlignEdge = () => {
  return (
    <div>
    <Tooltip placement="topLeft" title="Prompt Text">
      <Button>Align edge </Button>
    </Tooltip>
    <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
      <Button>Arrow points to center </Button>
    </Tooltip>
  </div>
  )
}

export default AlignEdge
