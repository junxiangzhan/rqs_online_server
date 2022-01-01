import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
    constructor ( props ) {
        super( props );
        
        this.state = {
            isCollapsed: true
        };
        
        this.toggleNav = this.toggleNav.bind( this );
        this.getWrapper = this.getWrapper.bind( this );
    }

    getWrapper ( wrapper ) {
        this.setState({ wrapper });
    }
    
    toggleNav () {
        this.setState({ isCollapsed: !this.state.isCollapsed });
    }

    render () {
        const togglerPorps = {
            className: [ 'navbar-toggler', !this.state.isCollapsed && 'active' ].filter( Boolean ).join(' '),
            'aria-label': 'navbar toggler',
            onClick: this.toggleNav
        };

        const collapseProps = {
            className: [ 'navbar-collapse', this.state.isCollapsed && 'collapsed' ].filter( Boolean ).join(' '),
            style: { height: this.state.isCollapsed || this.state.wrapper.getBoundingClientRect().height }
        }

        return <nav id="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand"><i className="icon">{'\uF7C1'}</i><span>隨機出題系統</span></Link>
                { /*<button { ...togglerPorps }>
                        <span className="navbar-toggler-icon"></span>
                    </button>*/ }
                <div className="navbar-collapse">
                    <div className="navbar-wrapper" ref={ this.getWrapper }>
                        <div className="navbar-nav">
                            <div className="nav-item"><Link to="/questions" className="nav-link"><span>題庫</span></Link></div>
                            <div className="nav-item"><Link to="/announcement" className="nav-link"><span>公告</span></Link></div>
                            <div className="nav-item"><Link to="/report" className="nav-link"><span>回報</span></Link></div>
                        </div>
                        <div className="navbar-nav">
                            <div className="nav-item"><Link to="/download" className="nav-link"><span className="icon-link">語言 <i className="icon">{'\uF2B7'}</i></span></Link></div>
                            <div className="nav-item"><Link to="/download" className="nav-link"><span className="icon-link">下載 <i className="icon">{'\uE896'}</i></span></Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    }
}