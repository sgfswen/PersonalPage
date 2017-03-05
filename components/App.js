import React from 'react';
import {Link} from 'react-router';

import Header from './Header';
import PerMessage from './PerMessage';
import Contract from './Contract';

export default class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div>
            <Link to="/perMessage">个人简介</Link>
            <Link to="/area/skill">个人技能</Link>
            <Link to="/area/workflow">工作流</Link>
            <Link to="/area/experience">工作经历</Link>
            <Link to="/area/project">个人项目</Link>
            <Link to="/contract">联系我</Link>
            {this.props.children}
        </div>;
    }
}