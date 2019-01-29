import React from 'react'
import { Layout } from 'antd';
import './layout.css';

const {
    Header, Footer, Sider, Content,
  } = Layout;

const index = ({header, content, footer}) => {
  return (
    <>
     <Layout style={{height:"100vh"}}>
      <Header>{header}</Header>
      <Content>{content}</Content>
      <Footer>{footer}</Footer>
    </Layout>
    </>
  )
}

export default index


