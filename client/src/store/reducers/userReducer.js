const initState = {
	loggedIn: false, 
};

const userReducer = (state = initState, action) => {
	switch(action.type) {
	case 'LOGIN_START': {
		return {
			loggedIn: true
		};
	}

	default: 
		return state;
	}
};


export default userReducer;