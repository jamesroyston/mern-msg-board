import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { isStillAuth } from '../store/actions/actions';

// hoc for protecting routes via our checkToken backend route

export default function withAuth(TargetComponent) {

	const mapStateToProps = state => {
		return {
			auth: state.auth
		};
	};

	const mapDispatchToProps = dispatch => {
		return {
			isStillAuth: () => {
				dispatch(isStillAuth());
			}
		};
	};

	class WrappedComponent extends Component {
        
		componentDidMount() {
			this.props.isStillAuth();
		}
        
		render() {
			const { loading, redirect } = this.props.auth;
			console.log('redirect in props: ', this.props.auth.redirect);
			if (loading) {
				return null;
			}
			if (redirect) {
				console.log('redirecting to login');
				return <Redirect to="/login" />;
			}
			return (
				<React.Fragment>
					<TargetComponent {...this.props} />
				</React.Fragment>
			);
		}
	}

	return connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);
}