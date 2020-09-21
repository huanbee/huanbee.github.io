import { combineReducers } from 'redux';

import { loginReducer } from './loginReducer';
import { userReducer } from './usersReducer';

export default combineReducers({ login: loginReducer, users: userReducer })