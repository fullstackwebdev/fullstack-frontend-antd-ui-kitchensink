import React, { Component } from "react";
import { Button, Row, Form, Icon, Input } from "antd";
import { Link } from 'react-router-dom'
import './index.less'

const index = () => {
    
  return (
    <>
      <div className="form">
      <Row>
        <div className="asdf">
            <img alt="logo" src="/fswd-crop.png" />
        </div>
        <div className="asdf">
            <span> Fullstack Demo </span>
        </div>
        
    </Row>
    
        <form>
            <Row>
            <Form.Item hasFeedback>
                <Input
                                        placeholder="Username"
            />
            </Form.Item>
            <Form.Item hasFeedback>
            <Input
                type="password"
               
                placeholder="Password"
                />

            </Form.Item>
            </Row>
            <Row>
                <Link to='/app'>
                <Button
                    type="primary"
                   
                    // loading={loading.effects.login}
                    >
                    Sign In
                </Button>
                </Link>
                <p>
                    <span>
                        Username : guest
                    </span>
                    <span>
                        Password : guest
                    </span>
                </p>
            </Row>
        </form>
    </div>
    <div className="footer">
        <p>Fullstack Web Development</p>
    </div>
    </>
  );
};

export default index;
