import React from "react";
import ReactDOM from "react-dom";
import { login } from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    // window.login = login
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    ReactDOM.render(<h1>Welcome to MovieRate</h1>, root);
});