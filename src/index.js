import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware,ReduxThunk)(createStore);


ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
</Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
