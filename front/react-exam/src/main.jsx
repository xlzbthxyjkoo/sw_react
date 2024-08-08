import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { legacy_createStore as createStore } from 'redux';
import reducers from './exe070/counter/reducers';

const store = createStore(reducers);
const root = ReactDOM.createRoot(document.getElementById('root'));

const listner = () => {
  root.render(
    <App store={store} />
  )
}

store.subscribe(listner);
listner();