import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk' 
import { createStore, applyMiddleware } from 'redux'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'


const initialState = {
  data: [1, 2, 3],
  selected: 1,
}

function reducer (state = initialState, action){
  return state
}

const store = createStore(reducer, applyMiddleware(thunk))
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
