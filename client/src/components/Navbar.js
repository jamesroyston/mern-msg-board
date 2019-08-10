import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends React.Component {

	state = {
		burgerMenuActive: false,
		userAvatarShowing: false
	}

	componentDidMount() {

	}

	toggleMenu() {
		this.state.burgerMenuActive ?
			this.setState({ burgerMenuActive: false }) : this.setState({ burgerMenuActive: true })
	}

	render() {

		const welcomeInNavbar =
			this.props.user.loggedIn ? `Welcome, ${this.props.user.firstName} ${this.props.user.lastName}!` : ''

		const loginButton = this.props.user.loggedIn ?
			'' :
			<NavLink
				onClick={this.toggleMenu.bind(this)} className="navbar-item" to="/login">
				<button className="button is-success">
					Login
				</button>
			</NavLink>;

		return (
			<nav className="navbar is-primary">
				<div className="container">

					<div className="navbar-brand">
						<NavLink to="/" className="navbar-item">
							<span>
								<i className="fab fa-github"> </i></span>OdinBook
					</NavLink>

						<div onClick={this.toggleMenu.bind(this)}
							role="button" className={this.state.burgerMenuActive ? "is-active navbar-burger" : "navbar-burger"} aria-label="menu" aria-expanded="false" data-target="navbarCollapsable">
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
						</div>
					</div>

					<div
						id="navbarCollapsable" className={this.state.burgerMenuActive ? "is-active navbar-menu" : "navbar-menu"}
					>
						<div className="navbar-start">
							<NavLink onClick={this.toggleMenu.bind(this)} className="navbar-item" to="/home">Home</NavLink>
							<NavLink onClick={this.toggleMenu.bind(this)} className="navbar-item" to="/new_post">New Post</NavLink>

							<div className="navbar-item">
								{welcomeInNavbar}
							</div>
						</div>

						<div className="navbar-end">
							{loginButton}
							<NavLink onClick={this.toggleMenu.bind(this)} className="navbar-item" to="/signup">
								<button className="button">
									Sign Up</button></NavLink>
						</div>
					</div>

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