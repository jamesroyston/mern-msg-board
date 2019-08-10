import authReducer from './authReducer';
import homeReducer from './homeReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	auth: authReducer,
	home: homeReducer,
	user: userReducer,
});

export default rootReducer;