import React from "react";
import { Layout, Menu, Breadcrumb, Icon, Row, Col } from "antd";
import "./index.css";
import SubMenu from "antd/lib/menu/SubMenu";
const { Header, Footer, Sider, Content } = Layout;


//https://antd-live-theme.firebaseapp.com/

const index = () => {
  return (
    <>
      <Layout style={{ height: "100vh" }}>
        {/* <Layout> */}
          <Header>
            <Row type="flex">
           <Col xs={24} sm={6}> <div className="logo" />
           Live Theme
           </Col>
           
           <Col xs={0} sm={18}>
           <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
            </Col>

            </Row>
          </Header>
        {/* </Layout> */}
        <Layout>
          <Sider width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    subnav 1
                  </span>
                }
              >
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
                <Menu.Item key="5">option5</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span type="laptop">2</span>}>
                <Menu.Item key="5">Option5</Menu.Item>
                <Menu.Item key="6">Option5</Menu.Item>
                <Menu.Item key="7">Option5</Menu.Item>
                <Menu.Item key="8">Option5</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
        </Layout>

        <Layout  style={{ padding: "0 24px 24px", minHeight: "100vh" }}>
                    <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                  </Breadcrumb>
          <Content
          style={{
            background: "#fff",
            padding: 24,
            margin: 0,
            minHeight: 280
          }}
        >

            <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
              Content
            </div>
          </Content>
        </Layout>
        <Layout>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default index;
