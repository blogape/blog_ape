import React, { Component } from "react";
import "./index.css";
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete
} from "antd";

class Login extends Component {
  render() {
    return (
      <div className="lark page-account lark-login">
        <div className="main-wrapper">
          <div className="layout-container">
            <div className="lark-form">
              <div className="lark-form-main">
                <div className="lark-form-logo">
                  <a href="/">
                    <img
                      src="https://gw.alipayobjects.com/zos/rmsportal/kyjrtmqaKAvzJAaoZfFp.svg"
                      alt="语雀"
                    />
                  </a>
                </div>
                <div className="account-slogon">
                  <h2 className="account-slogon-main">欢迎回到语雀</h2>
                  <p className="account-slogon-subhead">
                    <span>写文档，就用语雀</span>
                  </p>
                </div>
                <div className="account-input">
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="用户名"
                  />
                  <Input
                    type="password"
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="密码"
                  />
                  <Button type="primary" span={24}>
                    登录
                  </Button>
                </div>
                <div className="third-login">
                  <div className="ant-row">
                    <div className="ant-col-12 dingtalk-link">
                      <a href="/login?login_type=dingtalk" title="钉钉登录">
                        <span className="dingtalk" />钉钉登录
                      </a>
                    </div>
                    <div className="ant-col-12 dingtalk-extra">
                      <a href="/register">免费注册账户</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
