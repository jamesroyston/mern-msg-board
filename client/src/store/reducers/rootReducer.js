import postReducer from './postReducer';
import homeReducer from './homeReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	post: postReducer,
	home: homeReducer,
	user: userReducer,
});

export default rootReducer;