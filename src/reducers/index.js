import { combineReducers } from 'redux';
// look into this
import userReducer from './userReducer';

const rootReducer = combineReducers({
   users: userReducer,
});

export default rootReducer;