import React from "react";
import reactDom from "react-dom";
import App from "./components/App";

reactDom.hydrate(
    <App />,
    document.querySelector('[data-reactroot]')
)