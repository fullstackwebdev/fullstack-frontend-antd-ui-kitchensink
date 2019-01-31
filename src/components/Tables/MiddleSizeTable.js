/* eslint-disable no-unused-vars, jsx-a11y/anchor-is-valid, no-script-url */
import React, { Component } from 'react'
import { Table } from 'antd';

/*
Middle size table
*/

const columns = [{
  title: 'Name',
  dataIndex: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
}];
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];


const Table1 = () => (
<div>
<h4>Middle size table</h4>
<Table columns={columns} dataSource={data} size="middle" />
<h4>Small size table</h4>
<Table columns={columns} dataSource={data} size="small" />
</div>
);
export default Table1;
