import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="nav-wrapper black">
            <div className="container">
                <NavLink to="/" className="left">	
                &lt;react-fandom-message-board /&gt;
                </NavLink>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/new_post">New Post</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

// higher order component returns a Navbar component
// with <withRouter>'s properties
export default withRouter(Navbar);