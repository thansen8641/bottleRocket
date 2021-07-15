import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './store/reducers/rootReducer.jsx';

const store = createStore(rootReducer)
store.subscribe(() => console.log('Updated State', store.getState()))

ReactDOM.render(<Provider store={store} ><App/> </Provider>, document.getElementById('app'))