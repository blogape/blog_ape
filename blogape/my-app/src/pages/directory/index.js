import React, { Component } from "react";
import "./index.css";
class Directory extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <div className="book-repo">
          <div className="main-container">
            <div className="main-book-cover">
              <div className="main-book-cover-inner">
                <div>
                  <h1 className="main-book-cover-title">
                    <span>网文摘录</span>
                  </h1>
                  <div className="main-book-cover-meta">
                    <div className="desc">转载网络好文</div>
                  </div>
                  <div className="ant-row-flex ant-row-flex-center main-book-cover-meta main-book-cover-meta-user">
                    <div className="ant-col-3 main-book-cover-meta-user-item">
                      <a href="/read">
                        <img
                          src="https://cdn.yuque.com/yuque/0/2018/png/99205/1524475683717-avatar/252f7b14-78e5-484b-aad6-3c44b8560ed0.png?x-oss-process=image/resize,m_fill,h_64,w_64/format,png"
                          alt="语雀小编"
                        />
                      </a>
                    </div>
                    <span className="author-name">张鑫旭</span>
                  </div>
                </div>
                <div className="main-book-cover-contents">
                  <div className="typo">
                    <div className="typo-catalog">
                      <div className="book-catalog">
                        <ul className="typo-catalog-detail">
                          <li>
                            <span className="catalog-item catalog-item-NaN">
                              <span className="name">
                                <a
                                  href="/book-academy/share/hsy894"
                                  title="抖音「网红生态系」揭密"
                                >
                                  抖音「网红生态系」揭密
                                </a>
                              </span>
                              <span className="slug">
                                <a href="/book-academy/share/hsy894">hsy894</a>
                              </span>
                            </span>
                          </li>
                          <li>
                            <span className="catalog-item catalog-item-NaN">
                              <span className="name">
                                <a
                                  href="/book-academy/share/paglv3"
                                  title="没必要的苦，不值得经历"
                                >
                                  没必要的苦，不值得经历
                                </a>
                              </span>
                              <span className="slug">
                                <a href="/book-academy/share/paglv3">paglv3</a>
                              </span>
                            </span>
                          </li>
                        </ul>
                      </div>
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

export default Directory;
