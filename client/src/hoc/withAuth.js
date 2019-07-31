import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';

// this hoc will wrap the components we want protected via protected routing

export default function withAuth(TargetComponent) {
	return class extends Component {
		constructor () {
			super();
			this.state = {
				loading: true,
				redirect: false
			};
		}
        
		componentDidMount() {
			Axios.get('/api/checkToken')
				.then(res => {
					if (res.status === 200) {
						this.setState({ loading: false });
					} else {
						const error = new Error(res.error);
						throw error;
					}
				})
				.catch(err => {
					console.error(err);
					this.setState({ loading: false, redirect: true});
				});
		}
        
		render() {
			const { loading, redirect } = this.state;
			if (loading) {
				return null;
			}
			if (redirect) {
				return <Redirect to="/login" />;
			}
			return (
				<React.Fragment>
					<TargetComponent {...this.props} />
				</React.Fragment>
			);
		}
	};
}