const initState = {
	loading: false,
	loggedIn: false,
	registered: false,
	email: ''
};

const userReducer = (state = initState, action) => {
	switch (action.type) {
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