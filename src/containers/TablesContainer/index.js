import React from "react";
import {
  Layout,
  Breadcrumb,
  Row,
  Col
} from "antd";
import * as Tables from "./../../components/Tables";
import "./index.css";

const { Content } = Layout;

const Form1 = () => {
  return (
    <>
      <Row gutter={16}>
        <Col span={20}>
        <Tables.BasicUsage />
          {/* <Tables. /> */}
        </Col>
        <Col span={8}>
          {/* <Forms.FormLogin /> */}
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
