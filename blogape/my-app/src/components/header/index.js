import React, { Component } from "react";
import "./index.css";
import { Router, Route, Link, browserHistory } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="layout-container">
        {/* logo */}
        <div className="logo">
          <Link to="/home" className="logo-link">
            <img
              src="https://yjyimages.oss-cn-shenzhen.aliyuncs.com/logo.png"
              className="image image-default"
              alt="语雀"
            />
          </Link>
        </div>
        {/* 左侧导航 */}
        <div className="header-nav header-nav-left">
          <ul
            className="ant-menu ant-menu-light ant-menu-root ant-menu-horizontal"
            role="menu"
          >
            <li className="ant-menu-item nav-item-enterprise" role="menuitem">
              <a href="/enterprise">企业空间</a>
            </li>
            <li
              className="ant-menu-item nav-item-pricing ant-menu-item-selected"
              role="menuitem"
            >
              <a href="/pricing">定价</a>
            </li>
            <li className="ant-menu-item nav-item-help" role="menuitem">
              <a href="https://yuque.com/help" target="_blank">
                帮助
              </a>
            </li>
          </ul>
        </div>
        {/* 右侧导航 */}
        <div className="header-nav header-nav-right">
          <div className="login-action">
            <Link to="/login" className="ant-btn login-link">
              <span>登 录</span>
            </Link>
            <a
              href="/register"
              className="ant-btn register-link ant-btn-primary"
            >
              <span>注册语雀</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
