import React from 'react';

import { Input, Icon } from 'antd';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }

  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ userName: '' });
  }

  onChangeUserName = (e) => {
    this.setState({ userName: e.target.value });
  }

  render() {
    const { userName } = this.state;
    const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    return (
      <Input
        placeholder="Enter your username"
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        suffix={suffix}
        value={userName}
        onChange={this.onChangeUserName}
        ref={node => this.userNameInput = node}
      />
    );
  }
}

export default App

/*
.anticon-close-circle {
  cursor: pointer;
  color: #ccc;
  transition: color 0.3s;
  font-size: 12px;
}
.anticon-close-circle:hover {
  color: #999;
}
.anticon-close-circle:active {
  color: #666;
}
*/