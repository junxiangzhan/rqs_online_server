import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
    constructor ( props ) {
        super( props );
        
        this.state = {
            isCollapsed: true
        };

        this.getToggler = this.getToggler.bind( this );
        this.componentDidMount = this.componentDidMount.bind( this );
    }

    getToggler ( toggler ) {
        this.setState({ toggler });
    }

    componentDidMount () {
        document.addEventListener( 'click', function ( event ) {
            if ( event.target === this.state.toggler ) {
                return this.setState( {
                    isCollapsed: !this.state.isCollapsed
                });
            }

            this.setState( {
                isCollapsed: true
            });
        }.bind( this ));
    }

    render () {
        return <nav id="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">隨機出題系統</Link>
                <button
                    className={[
                        'navbar-toggler', !this.state.isCollapsed && 'active'
                    ].filter( Boolean ).join(' ')}
                    aria-label="navbar-toggler"
                    ref={ this.getToggler }
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    }
}