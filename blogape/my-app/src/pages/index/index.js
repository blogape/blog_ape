import React,{Component} from 'react';
import {Row,Col} from 'antd';
import './index.css';

class Index extends Component{
    render(){
        return(
                <div className='imain'>
                <Row>
                <Col md={16} xs={24}>
                <div className='block-index'>
                <div className='block-explore-title'>
                <h3>头条文章</h3>
                </div>
                </div>
                </Col>
                </Row>
                </div>
        )
    }
}

export default Index;