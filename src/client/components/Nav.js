import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
    constructor ( props ) {
        super( props );
        
        this.getWrapper = this.getWrapper.bind( this );
    }

    getWrapper ( wrapper ) {
        this.setState({ wrapper });
    }

    render () {
        return <nav id="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand"><i className="icon">{'\uF7C1'}</i><span>隨機出題系統</span></Link>
                <div className="navbar-collapse">
                    <div className="navbar-wrapper" ref={ this.getWrapper }>
                        <div className="navbar-nav">
                            <div className="nav-item"><Link to="/questions" className="nav-link"><span>題庫</span></Link></div>
                            <div className="nav-item"><Link to="/announcement" className="nav-link"><span>公告</span></Link></div>
                            <div className="nav-item"><Link to="/report" className="nav-link"><span>回報</span></Link></div>
                        </div>
                        <div className="navbar-nav">
                            <div className="nav-item"><Link to="/language" className="nav-link"><span className="icon-link">語言 <i className="icon">{'\uF2B7'}</i></span></Link></div>
                            <div className="nav-item"><Link to="/download" className="nav-link"><span className="icon-link">下載 <i className="icon">{'\uE896'}</i></span></Link></div>
                            <div className="nav-item"><a href="https://github.com/junxiangzhan/rqs_online_server" target="_blank" className="nav-link"><span className="icon-link">GitHub <i className="icon">{'\uEBA1'}</i></span></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    }
}