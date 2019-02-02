import React from 'react';
import { Badge, Icon } from 'antd';

const Basic = () => (
    <>
        <div>
            <Badge count={5}>
                <a href="#" className="head-example" />
            </Badge>
            <Badge count={0} showZero>
                <a href="#" className="head-example" />
            </Badge>
            <Badge count={<Icon type="clock-circle" style={{ color: '#f5222d' }} />}>
                <a href="#" className="head-example" />
            </Badge>
        </div>

        <div>
            <Badge count={25} />
            <Badge count={4} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} />
            <Badge count={109} style={{ backgroundColor: '#52c41a' }} />
        </div>

        <div>
            <Badge count={99}>
                <a href="#" className="head-example" />
            </Badge>
            <Badge count={100}>
                <a href="#" className="head-example" />
            </Badge>
            <Badge count={99} overflowCount={10}>
                <a href="#" className="head-example" />
            </Badge>
            <Badge count={1000} overflowCount={999}>
                <a href="#" className="head-example" />
            </Badge>
        </div>
        <div>
            <Badge count={5} title="Custom hover text">
                <a href="#" className="head-example" />
            </Badge>
        </div>

        <a href="#">
            <Badge count={5}>
                <span className="head-example" />
            </Badge>
        </a>

        <div>
            <Badge status="success" />
            <Badge status="error" />
            <Badge status="default" />
            <Badge status="processing" />
            <Badge status="warning" />
            <br />
            <Badge status="success" text="Success" />
            <br />
            <Badge status="error" text="Error" />
            <br />
            <Badge status="default" text="Default" />
            <br />
            <Badge status="processing" text="Processing" />
            <br />
            <Badge status="warning" text="Warning" />
        </div>

    </>
)

export default Basic
