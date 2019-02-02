import React from 'react';
import { Mention } from 'antd';

const { toString } = Mention;

function onChange(editorState) {
  console.log(toString(editorState));
}

const MultiLineMode = () => {
  return (
    <Mention
    style={{ width: '100%', height: 100 }}
    onChange={onChange}
    defaultSuggestions={['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']}
    multiLines
  />
  )
}

export default MultiLineMode
