import React, { Component } from "react";
import Header from  './header/';
import './index.css';
class issue extends Component{
  render() {
    return (
        <div className='issue'>
        <div className='main-wrapper'>
        <div className='main-wrapper-doc'>
       
            <div className='header'>
                <Header></Header>
                <div className="doc-head doc-head-spacer"></div>
            </div>
           {/*左侧内容*/}
            <div className='doc doc-wrapper'>
                <div className='doc-aside'>
                <div className='doc-aside-wrapper'>
                <nav className='doc-aside-catalog' style={{height:'165px'}}>
                <div className='book-catalog'>
                <ul className='catalog'>
                <li>
                <span className="catalog-item catalog-item-NaN catalog-item-active"><span className="name"><a className="active" aria-current="page" title="8月18日，React DEV Conf 与你相约广州" href="/front_end/conf/ywz3kw">8月18日，React DEV Conf 与你相约广州</a></span></span>
                </li>
                </ul>
                </div>
                </nav>
                </div>
                </div>
                 {/*右侧内容*/}
                 <div className='doc-contents'>
                 {this.props.children}
                 </div>
                </div>

               
                </div>
            </div>
        </div>
    );
  }
}
export default issue;
