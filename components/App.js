import React from 'react';
import $ from 'jquery';

import Header from './Header';
import PerMessage from './PerMessage';
import Contract from './Contract';
import NavLink from './NavLink';

import '../style/app.scss';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            area: 'perMessage'
        }
    }

    /*移动端中的下拉导航方法*/
    toggleNav() {
        $('.mobile-nav div').slideToggle();
    }

    /*导航菜单事件*/


    render() {
        return <div className="app">
            <header className="pc-nav">
                <li>徐文超的个人主页</li>
                <NavLink to="/perMessage" onlyActiveOnIndex={true}>个人简介</NavLink>
                <NavLink to="/skill">个人技能</NavLink>
                <NavLink to="/workflow">工作流</NavLink>
                <NavLink to="/experience">工作经历</NavLink>
                <NavLink to="/project">个人项目</NavLink>
                <NavLink to="/contract">联系我</NavLink>
            </header>
            <header className="mobile-nav" onClick={this.toggleNav}>
                <li id="navToggle">徐文超的个人主页<img src="../img/down.png" alt="down"/></li>
                <div>
                    <NavLink to="/perMessage" onlyActiveOnIndex={true}>个人简介</NavLink>
                    <NavLink to="/skill">个人技能</NavLink>
                    <NavLink to="/workflow">工作流</NavLink>
                    <NavLink to="/experience">工作经历</NavLink>
                    <NavLink to="/project">个人项目</NavLink>
                    <NavLink to="/contract">联系我</NavLink>
                </div>
            </header>
            {this.props.children}
        </div>;
    }
}