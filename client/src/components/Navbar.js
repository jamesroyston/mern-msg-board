import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends React.Component {
	render() {
		return (
			<nav className="nav-wrapper blue">
				<div className="container">
					<NavLink to="/" className="left">	
                OdinBook
					</NavLink>
					<span className="right">
						<NavLink to="/home">Home</NavLink>
						<span> | </span>
						<NavLink to="/new_post">New Post</NavLink>
						<span> | </span>
						<NavLink to="/login">Login</NavLink>
						<span> | </span>
						<NavLink to="/register">Register</NavLink>
						<span> | </span>
						<NavLink to="/secret">Secret</NavLink>
					</span>
				</div>
			</nav>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.user
	};
};

// higher order component returns a Navbar component
// with <withRouter>'s properties
export default connect(mapStateToProps)(withRouter(Navbar));