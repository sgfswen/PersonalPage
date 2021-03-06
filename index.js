import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

import App from './components/App';
import PerMessage from './components/PerMessage';
import Contract from './components/Contract';
import Area from './components/Area';

render((<Router history={browserHistory}>
    <Route path="/perMessage" components={App}>
        <IndexRoute components={PerMessage}/>
        <Route path="/:title" components={Area}/>
        <Route path="/contract" components={Contract}/>
    </Route>
</Router>), document.getElementById('app'));


