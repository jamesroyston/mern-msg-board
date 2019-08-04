const initState = {
	loading: false,
	loggedIn: false,
	firstName: '',
	lastName: '',
	username: ''
};

const userReducer = (state = initState, action) => {
	switch (action.type) {
	case 'GET_USER_START': {
		return {
			...state
		};
	}

	case 'GET_USER_SUCCESS': {
		return Object.assign({}, state, {
			firstName: action.userData[0].firstName,
			lastName: action.userData[0].lastName
		});
	}


	case 'LOGIN_START': {
		return Object.assign({}, state, {
			loading: true,
		});
	}
	case 'LOGIN_SUCCESS': {
		return Object.assign({}, state, {
			loading: false,
			loggedIn: true
		});
	}
	case 'LOGIN_FAILURE': {
		return {
			...state
		};
	}

	case 'REGISTER_START': {
		return Object.assign({}, state, {
			loading: true,
		});
	}
	case 'REGISTER_SUCCESS': {
		return Object.assign({}, state, {
			loading: false,
			registered: true,
			email: action.email
		});
	}
	case 'REGISTER_FAILURE': {
		return {
			...state
		};
	}

	default:
		return state;
	}
};


export default userReducer;