import React from 'react';

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

    render() {
        return <div className="app">
            <header>
                <NavLink to="/perMessage" onlyActiveOnIndex={true}>个人简介</NavLink>
                <NavLink to="/skill">个人技能</NavLink>
                <NavLink to="/workflow">工作流</NavLink>
                <NavLink to="/experience">工作经历</NavLink>
                <NavLink to="/project">个人项目</NavLink>
                <NavLink to="/contract">联系我</NavLink>
            </header>
            {this.props.children}
        </div>;
    }
}