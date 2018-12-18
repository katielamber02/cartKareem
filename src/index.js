import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import allSagas from './sagas'
//import {fetchProducts} from './actions'
//import {fetchCart} from './actions'
//import {addToCart} from './actions'
import reducers from './reducers'
//import * as productApi from './libs/api'
import './libs/cart/api'




import { composeWithDevTools } from 'redux-devtools-extension';

/*
productApi.fetchAll()
		 .then((products)=>console.log('products:',products))
*/

const sagaMiddleware=createSagaMiddleware()


const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(allSagas)

//store.dispatch(fetchProducts())
//store.dispatch(fetchCart())
//store.dispatch(addToCart('599598ac28f12c52841110bf',2))


window.store=store
//store.dispatch({type:'SET_STATE',value:42})



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
