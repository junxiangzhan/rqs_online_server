import React from "react";
import reactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

reactDom.hydrate(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.querySelector('[data-reactroot]')
)