import React from "react";
import {
  Layout,
  Breadcrumb,
  Row,
  Col
} from "antd";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./index.css";
// import SubMenu from "antd/lib/menu/SubMenu";

import * as Forms from "../../components/Forms";


const { Content } = Layout;


const Form1 = () => {
  return (
    <>
      <Row gutter={16}>
        <Col span={8}>
          <Forms.FormLoginHorizontal />
        </Col>
        <Col span={8}>
          <Forms.FormLogin />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={16}>
          <Forms.FormRegistration />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Forms.FormAdvanceSearch />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col>
          <Forms.FormDynamicInput />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <Forms.FormModal />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8} offset={8}>
          col-8
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={16}>
          <Forms.FormDynamicInput />
        </Col>
      </Row>
    </>
  );
};

const MyContent = ({ breadcrumbItems }) => {
  // const breadcrumbItems = ["Home", "List", "App"];
  const Items = breadcrumbItems || ["Home", "List", "App"];
  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb style={{ margin: "16px 0" }}>
        {Items.map((item, index) => (
          <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
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
          <Form1 />
        </div>
      </Content>
    </>
  );
};

const breadcrumbItems = ["Fullstack", "Forms", "Examples"];

const index = () => {
  return (
    <>
      <MyContent breadcrumbItems={breadcrumbItems} />
    </>
  );
};

export default index;
