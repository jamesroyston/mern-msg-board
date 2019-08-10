const initState = {
	loading: false,
	redirect: false,
	isStillAuth: false
};

const authReducer = (state = initState, action) => {
	switch (action.type) {

	case 'VALIDATE_TOKEN_START': {
		return Object.assign({}, state, {
			loading: true,
			redirect: false,
			isStillAuth: false
		});
	}
    
	case 'VALIDATE_TOKEN_SUCCESS': {
		return Object.assign({}, state, {
			loading: false, 
			redirect: false,
			isStillAuth: true
		});
	}
    
	case 'VALIDATE_TOKEN_FAILURE': {
		return Object.assign({}, state, {
			loading: false,
			redirect: true,
			isStillAuth: false
		});
	}
    
	default: 
		return state;
	}
};

export default authReducer;