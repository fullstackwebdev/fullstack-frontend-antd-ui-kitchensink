import React from 'react'
import { Layout } from 'antd';

const {
    Header, Footer, Sider, Content,
  } = Layout;

const index = () => {
  return (
    <>
    <Layout  style={{height:"100vh"}}>
      <Header>Header</Header>
      <Layout>
        <Content>Content</Content>
        <Sider>Sider</Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
    </>
  )
}

export default index


