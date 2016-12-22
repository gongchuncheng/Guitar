/*
** 项目入口文件，加载所有依赖
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import reducer from './reducers/main';

import App from './containers/App';
import Index from './containers/Index';

import '../sass/index.scss';


const store = createStore(
    combineReducers({
      reducer,
      routing: routerReducer
    }),
	applyMiddleware(thunkMiddleware)

)

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
	<Provider store={ store }>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Index} />
			</Route>
		</Router>
	</Provider>
,document.getElementById('root'));
