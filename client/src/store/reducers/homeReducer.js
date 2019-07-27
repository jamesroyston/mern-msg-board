const initState = {
	posts: [],
	fetching: false,
	error: null
};

const homeReducer = (state = initState, action) => {
	switch(action.type) {
	case 'DELETE_POST':
		// commented out because we handle delete via REST now
        
		// newPosts = state.home.posts.filter(post => {
		//     return action.id !== post.id
		// })
		return {
			...state
		};

	case 'CREATE_POST_START':
		return {
			...state
		};

	case 'CREATE_POST_SUCCESS':
		return {
			...state
		};

	case 'CREATE_POST_FAILURE':
		return {
			...state
		};

	case 'FETCH_POSTS_START':
		return { 
			...state, 
			fetching: true,
			error: null
		};

	case 'FETCH_POSTS_SUCCESS':
		return { 
			...state, 
			fetching: false, 
			posts: [...action.posts]
		};
            
	case 'FETCH_POSTS_FAILURE':
		return { 
			...state, 
			fetching: false, 
			error: action.error,
			posts: []
		}; 
        
	default: 
		return state;
	}
};

export default homeReducer;