import React from "react";
import reactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

reactDom.hydrate(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.querySelector('[data-reactroot]')
)