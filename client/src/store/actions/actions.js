import axios from 'axios';

export const deletePost = (id) => {
	return (dispatch) => {
		dispatch({ type: 'DELETE_POST_START', id });
		return axios.delete('/api/posts/' + id)
			.then(() => {
				dispatch({ type: 'DELETE_POST_SUCCESS' });
			})
			.catch(() => {
				dispatch({ type: 'DELETE_POST_FAILURE' });
			});
	};
};

export const fetchPosts = () => {
	return (dispatch) => {
		// make async call to database
		dispatch({ type: 'FETCH_POSTS_START' });
		return axios.get('/api/posts')
			.then(res => {
				dispatch({
					type: 'FETCH_POSTS_SUCCESS',
					posts: res.data
				});
			})
			.catch(err => {
				dispatch({ type: 'FETCH_POSTS_FAILURE', payload: err });
			});
	};
};


export const createPost = (post) => {
	return (dispatch) => {
		dispatch({ type: 'CREATE_POST_START' });
		return axios.post('/api/posts', post)
			.then(() => {
				dispatch({ type: 'CREATE_POST_SUCCESS' });
			})
			.catch((err) => {
				dispatch({ type: 'CREATE_POST_ERROR' });
			});
	};
};

export const loginPayload = (user) => {
	return (dispatch) => {
		dispatch({ type: 'LOGIN_START' });
		return axios({
			method: 'post',
			url: '/api/authenticate',
			data: {
				email: user.email,
				password: user.password
			},
			headers: { 'Content-Type': 'application/json' }
		})
			.then(res => {
				console.log(res);
				if (res.status === 200) {
					dispatch({ type: 'LOGIN_SUCCESS' });
					return axios
						.get('/api/user')
						.then(res => {
							dispatch({ type: 'GET_USER_SUCCESS', userData: res.data });
						})
						.catch(err => {
							dispatch({ type: 'GET_USER_FAILURE', error: err});
						});
				} else {
					dispatch({ type: 'LOGIN_ERROR' });
					const error = new Error(res.error);
					throw error;
				}
			})
			.catch(err => {
				dispatch({ type: 'LOGIN_FAILURE' });
				console.error(err);
				alert('error logging in please try again');
			});
	};
};

export const registerPayload = (user) => {
	return (dispatch) => {
		dispatch({ type: 'REGISTER_START', email: user.email });
		return axios({
			method: 'post',
			url: '/api/signup',
			data: {
				username: user.username,
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
				password: user.password
			},
			headers: { 'Content-Type': 'application/json' }
		})
			.then(res => {
				if (res.status === 200) {
					dispatch({ type: 'REGISTER_SUCCESS' });
				} else {
					dispatch({ type: 'REGISTER_FAILURE' });
					const error = new Error(res.error);
					throw error;
				}
			})
			.catch(err => {
				dispatch({ type: 'REGISTER_FAILURE' });
				console.error(err);
				alert('error occured during registration. please try again.');
			});
	};
};