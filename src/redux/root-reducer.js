import { combineReducers } from 'redux';

import userReducer from './user/user.reducer'; // THIS COULD REPRESENT MAYBE A CLAIM,DELETE OR REQUEST POLICIES

export default combineReducers({ user: userReducer });//this represent a gian state object ie state = {user, {user_stuff}};
