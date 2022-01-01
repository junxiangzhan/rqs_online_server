import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
    render () {
        return <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">隨機出題系統</Link>
                <button className="navbar-toggler"><i className="icon">{ '\n' }</i></button>
            </div>
        </nav>
    }
}