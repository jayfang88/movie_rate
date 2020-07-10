import React from "react";
import ReactDOM from "react-dom";
import { login } from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    window.login = login
    ReactDOM.render(<h1>Welcome to MovieRate</h1>, root);
});