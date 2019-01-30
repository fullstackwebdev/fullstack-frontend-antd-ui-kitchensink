import React from "react";
import { Layout, Menu, Breadcrumb, Icon, Row, Col } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./index.css";
import SubMenu from "antd/lib/menu/SubMenu";
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
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
        <div className="gutter-example">
          <Row gutter={24}>
            <Col className="gutter-row" span={12}>
              <div className="gutter-box">col-6</div>
            </Col>
            <Col className="gutter-row" span={12}>
              <div className="gutter-box">col-6</div>
            </Col>
           
          </Row>
        </div>
        </div>
   
      </Content>
    </>
  );
};

const breadcrumbItems = ["Home", "List", "New Content"];

const index = () => {
  return (
    <>
      <MyContent breadcrumbItems={breadcrumbItems} />
    </>
  );
};

export default index;
