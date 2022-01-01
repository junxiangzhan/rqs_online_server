import React, { StrictMode } from "react";
import reactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

reactDom.hydrate(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>,
    document.querySelector('[data-reactroot]')
)