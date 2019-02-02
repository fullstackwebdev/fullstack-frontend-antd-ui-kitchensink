import React from "react";

import { Rate, Icon } from "antd";

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

class Rater extends React.Component {
  state = {
    value: 3
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <span>
        <Rate tooltips={desc} onChange={this.handleChange} value={value} />
        {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""}
      </span>
    );
  }
}

const Basic = () => {
  return (
    <>
      <div>
        <Rate />
      </div>
      <div>
        <Rate allowHalf defaultValue={2.5} />
      </div>
      <div>
        <Rater />
      </div>
      <div>
        <Rate disabled defaultValue={2} />
      </div>
      <div>
        <div>
          <Rate character={<Icon type="heart" />} allowHalf />
          <br />
          <Rate character="A" allowHalf style={{ fontSize: 36 }} />
          <br />
          <Rate character="好" allowHalf />
        </div>
      </div>
    </>
  );
};

export default Basic;
