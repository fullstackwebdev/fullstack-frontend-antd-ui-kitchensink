import React from "react";
import { Layout, Menu, Breadcrumb, Icon, Row, Col } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./index.css";
import SubMenu from "antd/lib/menu/SubMenu";

import Content1 from "../../components/Content1";
import Content2 from "../../components/Content2";

const { Header, Footer, Sider, Content } = Layout;

const MyContent = ({ breadcrumbItems }) => {
  // const breadcrumbItems = ["Home", "List", "App"];
  const Items = breadcrumbItems || ["Home", "List", "App"];
  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb style={{ margin: "16px 0" }}>
        {Items.map((item, index) => (
          <Breadcrumb.Item>{item}</Breadcrumb.Item>
        ))}
      </Breadcrumb>

      {/* Main content */}
      <Content
        style={{
          background: "#fff",
          padding: 24,
          margin: 0,
          minHeight: 280
        }}
      >
        <div className="gutter-example">
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">col-6</div>
            </Col>
          </Row>
        </div>
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
          Content
        </div>
      </Content>
    </>
  );
};

const MyHeader = ({ headers }) => {
  //const {headers} = props;// ["Nav", "Nav 2", "Nav 3"];
  return (
    <Header className="header">
      <Row type="flex">
        <Col xs={24} sm={6}>
          {" "}
          <div className="logo" />
          Live Theme
        </Col>

        <Col xs={0} sm={18}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            {headers.map((item, index) => (
              <Menu.Item key={index}>{item}</Menu.Item>
            ))}
          </Menu>
        </Col>
      </Row>
    </Header>
  );
};
const MySideBar = ({ sideMenu }) => {
  return (
    <Sider width={200}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        {sideMenu.map((menu, index) => (
          <SubMenu
            key={index}
            title={
              <span>
                <Icon type={menu.icon} />
                {menu.name}
              </span>
            }
          >
            {menu.sub.map((item, index) => (
              <Menu.Item key={index}>
                <Link to={`/app/${item.link}`}>{item.name}</Link>
              </Menu.Item>
            ))}
          </SubMenu>
        ))}
      </Menu>
    </Sider>
  );
};

//https://antd-live-theme.firebaseapp.com/

const myHeaders = ["Nav", "Nav 2", "Nav 3"];
const breadcrumbItems = ["Home", "List", "App"];
const sideMenu = [
  {
    name: "First Submenu",
    icon: "user",
    sub: [
      { name: "Content1", link: "/app/content1" },
      { name: "Content2", link: "/app/content2" },
      { name: "Content3", link: "/app/content3" }
    ]
  },
  {
    name: "Second Submenu",
    icon: "laptop",
    sub: [
      { name: "option1", link: "Content1" },
      { name: "option1", link: "Content1" },
      { name: "option1", link: "Content1" },
      { name: "option1", link: "Content1" }
    ],
    link: "content2"
  },
  {
    name: "Third Submenu",
    icon: "notification",
    sub: [
      { name: "option1", link: "Content1" },
      { name: "option1", link: "Content1" },
      { name: "option1", link: "Content1" },
      { name: "option1", link: "Content1" }
    ],
    link: "content3"
  }
];

const routes = [
  {
    path: "/app/content1",
    exact: true,
    main: Content1
  },
  {
    path: "/app/content2",
    main: Content2
  }
];

const index = () => {
  return (
    <>
      <Row>
        <Layout style={{ height: "100vh" }}>
          {/* Header */}
          <MyHeader headers={myHeaders} />

          <Layout>
            {/* Sidebar */}
            <MySideBar sideMenu={sideMenu} />

            <Layout style={{ padding: "0 24px 24px", height: "100vh" }}>
              {/* Content */}
              {routes.map((route, index) => (

                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
            </Layout>
          </Layout>
          <Footer style={{ textAlign: "center" }}>
            FSWD ©2019 Created by D
          </Footer>
        </Layout>
        {/* <Layout>
            <Footer style={{ textAlign: "center" }}>
              FSWD ©2019 Created by D
            </Footer>
          </Layout> */}
      </Row>
    </>
  );
};

export default index;
