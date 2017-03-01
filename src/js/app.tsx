import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import Store from './store';

import App from './components/App';
import Home from './components/Home';
import ItemList from './components/ItemList';
import Item from './components/Item';

ReactDOM.render(
    (
    	<Provider store={Store}>
	        <Router history={hashHistory}>
	            <Route path="/" component={App}>
	            	 <IndexRoute component={Home}/>
	                <Route path="/items" component={ItemList}/>
	                <Route path="/items/:id" component={Item}/>
	            </Route>
	        </Router>
	    </Provider>
    ),
    document.getElementById('root')
);
