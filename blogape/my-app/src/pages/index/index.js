import React, { Component } from "react";
import { Row, Col, List, Icon, Avatar } from "antd";
import "./index.css";
// 右侧热搜
const data = [
  {
    title: '为什么年轻人应该去大城市？',
  },
  {
    title: '用最简单的方法描述第一个',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];




// 首页左侧列表
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: "http://ant.design",
    title: `ant design part ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class Index extends Component {
  render() {
    return (
      <div className="imain">
        <Row>
          {/*左侧首页内容*/}
          <Col md={16} xs={24}>
            <div className="block-index">
              <div className="block-explore-title">
                <h3>头条文章</h3>
              </div>
              {/*循环内容*/}
              <List
                itemLayout="vertical"
                size="large"
                pagination={{
                  onChange: page => {
                    console.log(page);
                  },
                  pageSize: 3
                }}
                dataSource={listData}
                footer={
                  <div>
                    <b>ant design</b> footer part
                  </div>
                }
                renderItem={item => (
                  <List.Item
                    key={item.title}
                    actions={[
                      <IconText type="star-o" text="156" />,
                      <IconText type="like-o" text="156" />,
                      <IconText type="message" text="2" />
                    ]}
                    extra={
                      <img
                        width={272}
                        alt="logo"
                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                      />
                    }
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={item.avatar} />}
                      title={<a href={item.href}>{item.title}</a>}
                      description={item.description}
                    />
                    {item.content}
                  </List.Item>
                )}
              />,
            </div>
          </Col>
          {/*右侧首页内容排行*/}
          <Col xs={24} md={8} style={{padding: '0 34px',}}>
                <div className='block-explore repos-hot'>
                <div className="block-explore-title"><h3>热门知识库</h3></div>
                <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                      title={<a href="https://ant.design">{item.title}</a>}
                      description="2018年，拉合尔，夏 头顶的吊扇正在呼呼地转动，窗外下着雨，淅淅沥沥。屋外的大风吹拂着这里的一"
                    />
                  </List.Item>
                )}
              />,
                </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Index;
