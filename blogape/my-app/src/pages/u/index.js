import React, { Component } from "react";
import { Row, Col, Card, Affix } from "antd";
import "./index.css";

class U extends Component {

  render() {
    return (
      <div className="main-wrapper">
        <div className="main-container">
          <Row>
            {/* 个人中心左侧内容 */}
           
              <Col sm={8} xs={24} className="col_container">
                <Card className="user-info">
                  <div className="user-info-head">
                    <img
                      src="https://cdn.yuque.com/yuque/0/2018/png/99205/1524475683717-avatar/252f7b14-78e5-484b-aad6-3c44b8560ed0.png?x-oss-process=image/resize,m_fill,h_192,w_192/format,png"
                      className="avatar"
                      alt="语雀小编"
                    />
                    <div className="text">
                      <div className="name" title="语雀小编">
                        语雀小编
                      </div>
                      <div className="description">语雀官方新入职小编编</div>
                    </div>
                  </div>
                  <div className="user-info-follow">
                    <div className="user-info-btn">
                      <button
                        type="button"
                        className="ant-btn btn-follow ant-btn-default"
                      >
                        <span>关 注</span>
                      </button>
                    </div>
                    <div className="follow-info">
                      <a
                        className="follow-info-block"
                        href="/read?tab=following"
                      >
                        <p className="label">
                          <span>关注了</span>
                        </p>
                        <p className="count">0</p>
                      </a>
                      <div className="info-split" />
                      <a
                        className="follow-info-block"
                        href="/read?tab=followers"
                      >
                        <p className="label">
                          <span>关注者</span>
                        </p>
                        <p className="count">97</p>
                      </a>
                    </div>
                  </div>
                </Card>
              </Col>
            
            {/* 个人中心右侧内容 */}

            <Col xs={24} sm={16} className="u-right">
              <Card className='list-mine'>
                <div className="ant-card-head">
                  <div className="ant-card-head-title">
                    <ul
                      className="ant-menu lark-nav ant-menu-light ant-menu-root ant-menu-horizontal"
                      role="menu"
                    >
                      <li className="ant-menu-item" role="menuitem">
                        <a className="" aria-current="page" href="/read">
                          知识库
                        </a>
                      </li>
                      <li className="ant-menu-item" role="menuitem">
                        <a className="active" href="/read?tab=stars">
                          喜欢
                        </a>
                      </li>
                      <li className="ant-menu-item" role="menuitem">
                        <a className="" href="/read?tab=following">
                          关注了
                        </a>
                      </li>
                      <li className="ant-menu-item" role="menuitem">
                        <a className="" href="/read?tab=followers">
                          关注者
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                  

              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default U;
