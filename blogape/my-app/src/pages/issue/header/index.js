import React, { Component } from "react";
import { Breadcrumb, Icon, Button } from "antd";

import "./index.css";
class Header extends Component {
  render() {
    return (
      <div className="issue-header">
        {/*面包屑*/}
        <div className="header-crumb">
          <Breadcrumb>
            <Breadcrumb.Item href="">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
              <span>花少</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
              <span>用十年学会编程</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>点醒我的每一句话</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="header-action">
          <div className="header-action-item">
            <Button type="default" icon="heart-o" size>
              收藏
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
