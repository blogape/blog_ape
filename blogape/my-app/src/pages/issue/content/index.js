import React, { Component } from "react";
import "./index.css";

class Content extends Component {
  render() {
    return (
      <div className="doc_container">
        <div className="doc-article">
          <h3>8月18日，React DEV Conf 与你相约广州</h3>
          <p>
            w3ctech除了为大家组织了Web标准化交流会、走进名企、拥抱HTML5、JavaScript专题会议、Mobile专题会议之外，最近几年联合W3C中国及前端圈为大家推出了CSS大会、FEDAY、VueConf三个会议。
          </p>
          <p>
            随着技术的不断发展与变化，在我们的日常工作中，除了使用最基本的HTML,CSS,JS之外，在很多公司，像Vue.js,React.js也变成了不可或缺的，所以大家也可以从现在的招聘要求上面从原来对HTML、CSS、JavaScript、jQuery、Zepto.js的要求外，已经又增加Vue.js,React.js的身影。
          </p>
          <p>
            为了帮助大家更深入的了解React，了解行业内大家都在如何使用React，今天我们正式向大家宣传，w3ctech联合前端圈将于2018年8月18日在广州举办（React
            DEV Conf）中国首届React开发者大会。
          </p>
          <img src="https://cdn.yuque.com/yuque/0/2018/png/88978/1531134559698-d30ac7ab-0b30-47a6-b29f-527743acec37.png" />
     
          {/*  作者与描述  */}
          <div className="meta clearfix">
          <div className="meta-info clearfix">
            <div className="meta-left">
              <div className="meta-item">
                <span className="item">
                  <span className="larkicon larkicon-user" />
                  <span className="item-text">
                    <a href="/read">
                      <span>语雀小编</span>
                    </a>
                  </span>
                </span>
              </div>
              <div className="meta-item">
                <span className="item">
                  <span className="larkicon larkicon-clock" />
                  <span className="item-text">2018.07.23</span>
                </span>
              </div>
              <div className="meta-item">
                <div className="item">
                  <span className="larkicon larkicon-read" />
                  <span className="item-text">382</span>
                </div>
              </div>
              <div className="meta-item">
                <div className="item">
                  <span className="larkicon larkicon-comments" />
                  <span className="item-text">8</span>
                </div>
              </div>
            </div>
            <div className="meta-right">
              <div className="social-share">
                <span>
                  分享到：<a
                  className="social-share-item"
                    target="_blank"
                    href="http://service.weibo.com/share/share.php?url=https%3A%2F%2Fwww.yuque.com%2Fbook-academy%2Fshare%2Fpaglv3&amp;pic=http%3A%2F%2Fcms-bucket.nosdn.127.net%2F2018%2F07%2F17%2F0d9b10e9538a43fc8e4796a80ccba37f.jpeg%3FimageView%26amp%3Bamp%3Bthumbnail%3D550x0&amp;title=%E6%B2%A1%E5%BF%85%E8%A6%81%E7%9A%84%E8%8B%A6%EF%BC%8C%E4%B8%8D%E5%80%BC%E5%BE%97%E7%BB%8F%E5%8E%86%20%C2%B7%20%E8%AF%AD%E9%9B%80%20%7C%20%E6%9C%AC%E6%96%87%E7%B3%BB%E7%BD%91%E6%98%93%E6%B2%B8%E7%82%B9%E5%B7%A5%E4%BD%9C%E5%AE%A4%E3%80%8A%E6%A7%BD%E5%80%BC%E3%80%8B%E6%A0%8F%E7%9B%AE%EF%BC%88%E5%85%AC%E4%BC%97%E5%8F%B7%EF%BC%9Acaozhi163%EF%BC%89%E5%87%BA%E5%93%81%EF%BC%8C%E6%AF%8F%E5%A4%A9%E6%9B%B4%E6%96%B0%E3%80%82%E7%9F%A5%E4%B9%8E%E4%B8%8A%E6%9C%89%E4%B8%80%E4%B8%AA%E9%97%AE%E9%A2%98%EF%BC%9A%E2%80%9C%E5%B0%8F%E5%9C%B0%E6%96%B9%E5%B7%A5%E5%8E%82%E6%8B%9B%E4%BA%BA%EF%BC%8C%E6%9C%88%E8%96%AA4000%E5%85%83%E6%B2%A1%E4%BA%BA%E5%BA%94%E8%81%98%EF%BC%8C%E9%AB%98%E6%A1%A3%E5%92%96%E5%95%A1%E5%BA%97%E6%9C%88%E8%96%AA3000%E5%85%83%E5%B0%B1%E8%83%BD%E8%BD%BB%E6%9D%BE%E6%8B%9B%E5%88%B0%E4%BA%BA%EF%BC%8C%E6%98%AF%E4%B8%8D%E6%98%AF%E7%8E%B0%E5%9C%A8%E7%9A%84%E5%B9%B4%E8%BD%BB%E4%BA%BA%E9%83%BD%E4%B8%8D%E6%84%BF%E6%84%8F%E5%90%83%E8%8B%A6%E4%BA%86%EF%BC%9F%E2%80%9D%E5%9B%9E%E7%AD%94%E4%B8%AD%E4%B8%80%E7%89%87%E9%99%84%E5%92%8C%EF%BC%9A%E4%B8%80%E4%BB%A3%E4%B8%8D%E5%A6%82%E4%B8%80%E4%BB%A3%EF%BC%8C%E7%8E%B0%E5%9C%A8%E8%83%BD%E5%90%83%E8%8B%A6%E7%9A%84%E4%B8%8D%E5%A4%9A%E4%BA%86%EF%BC%9B%E7%8E%B0%E5%9C%A8%E7%9A%84%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%A8%87%E6%B0%94%E7%9D%80%E5%91%A2%EF%BC%8C%E8%A6%81%E5%90%83%E8%8B%A6%E7%9A%84%E5%B7%A5%E4%BD%9C%E7%BB%99%E5%86%8D%E5%A4%9A%E9%92%B1%E9%83%BD%E4%B8%8D%E6%83%B3%E5%B9%B2%E2%80%A6%E2%80%A6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%90%91%E6%9D%A5%E8%AE%B2%E7%A9%B6%E2%80%9C%E5%90%83%E5%BE%97%E8%8B%A6%E4%B8%AD%E8%8B%A6%EF%BC%8C%E6%96%B9%E4%B8%BA%E4%BA%BA%E4%B8%8A%E4%BA%BA%E2%80%9D%E3%80%82%E5%8F%AF%E6%98%AF%EF%BC%8C%E4%BA%BA%E7%94%9F%E4%B8%AD%E6%9C%89%E4%BA%9B%E6%B2%A1%E5%BF%85%E8%A6%81%E7%9A%84%E2%80%9C%E8%8B%A6%E2%80%9D%EF%BC%8C%E5%AE%9E%E5%9C%A8%E6%98%AF%E4%B8%8D%E5%80%BC%E5%BE%97%E7%BB%8F%E5%8E%86%E3%80%82..."
                  >
                    <i className="anticon anticon-weibo" />
                  </a>
                  <span className="social-share-item">
                    <div className="lark-popover ">
                      <a className="social-share-wechat">
                        <i className="anticon anticon-wechat" />
                      </a>
                    </div>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="meta-pages clearfix">
            <div className="meta-right" />
          </div>
        </div>
     
          </div>

   
      </div>
    );
  }
}

export default Content;
