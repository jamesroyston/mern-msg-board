const initState = {
	loggedIn: false,
	registered: false,
	username: ''
};

const userReducer = (state = initState, action) => {
	switch (action.type) {
	case 'LOGIN_START': {
		return {
			...state
		};
	}
	case 'LOGIN_SUCCESS': {
		return Object.assign({}, state, {
			loggedIn: true,
			username: action.username
		});
	}
	case 'LOGIN_FAILURE': {
		return {
			...state
		};
	}

	case 'REGISTER_START': {
		return {
			...state
		};
	}
	case 'REGISTER_SUCCESS': {
		return {
			registered: true
		};
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