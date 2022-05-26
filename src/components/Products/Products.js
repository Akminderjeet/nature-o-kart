import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';

// import Sellerhome from './Sellerhome';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import Data from "./Data";
const store = createStore(reducers, compose(applyMiddleware(thunk)));

function Products() {


    return (
        <Provider store={store}>
            <Data />
        </Provider>

    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

export default Products;