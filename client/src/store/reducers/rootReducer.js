import postReducer from './postReducer'
import homeReducer from './homeReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    post: postReducer,
    home: homeReducer
})

export default rootReducer