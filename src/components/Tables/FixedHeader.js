/* eslint-disable no-unused-vars, jsx-a11y/anchor-is-valid, no-script-url */
import React, { Component } from 'react'
/////
/*
Fixed Header
Display large amounts of data in scrollable view.

Specify width of columns if header and cell do not align properly. (Leave one column at least without width to fit fluid layout)

*/

import { Table } from 'antd';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  width: 150,
}, {
  title: 'Age',
  dataIndex: 'age',
  width: 150,
}, {
  title: 'Address',
  dataIndex: 'address',
}];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const App = () => (
  <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
);

/////
export default App;

