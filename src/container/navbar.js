import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    linkStyle ={
        textDecoration:'none',
        color:'#000'
    }
    render() {
        return (

            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">Polling App</a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link style={this.linkStyle} to='/'>Create Poll</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={this.linkStyle} to='/previouspoll'>Previous Poll</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={this.linkStyle} to='/pollinglist'>Polling List</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
