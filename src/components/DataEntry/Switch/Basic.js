import React from "react";

import { Switch } from "antd";

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

const Basic = () => {
  return <Switch defaultChecked onChange={onChange} />;
};

export default Basic;
