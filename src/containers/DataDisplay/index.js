import React from "react";
import {
  Layout,
  Breadcrumb,
  Row,
  Col
} from "antd";
import * as Tables from "./../../components/Tables";
import * as DataDisplay from './../../components/DataDisplay'
import "./index.css";

const { Content } = Layout;

const Form1 = () => {
  return (
    <>
     <div class="wrapper">
      <div class="box a">A</div>
     
      <div class="box c"> <DataDisplay.Comment.Basic /></div>
      <div class="box d">
        <div class="box e"> <DataDisplay.Tree.IconTree /></div>
        <div class="box f">F</div>
        <div class="box g">G</div>
      </div>
    </div>
      {/* <Row>
        <Col>
          <DataDisplay.Tabs.Basic />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={16}>
          < DataDisplay.Avatar.Basic />
        
        </Col>
        <Col span={8}>
          <DataDisplay.Badge.Basic />
        </Col>
      </Row>
      <DataDisplay.Card.Basic />
      <Row>
        <Col>
          <DataDisplay.Carousel.Basic />
        </Col>
      </Row>
      <Row>
        <Col>
          <DataDisplay.Comment.Basic />
        </Col>
      </Row>
      <Row>
        <Col>
          <DataDisplay.Empty.Basic />
        </Col>
      </Row>
      <Row>
        <Col>
          <DataDisplay.List.Basic />
        </Col>
      </Row>
      <Row>
        <Col>
          <DataDisplay.Popover.Placement />
        </Col>
      </Row> */}

      {/* <Row>
        <Col>
          <DataDisplay.Statistic.Basic />
        </Col>
      </Row>

      <Row>
        <Col>
          <DataDisplay.Tag.ColorfulTag />
        </Col>
      </Row>
      <Row>
        <Col>
          <DataDisplay.Timeline.Custom />
        </Col>
      </Row>
      <Row>
        <Col>
          <DataDisplay.Tooltip.Placement />
        </Col>
      </Row>
      <Row>
        <Col>
          <DataDisplay.Tree.IconTree />
        </Col>
      </Row>
      <Row>
        <Col>
          <DataDisplay.Tabs.CardTab />
        </Col>
      </Row> */}

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
          background: "#f0f2f5",
          padding: 24,
          margin: 0,
          minHeight: 280
        }}
      >
        
          <Form1 />
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
