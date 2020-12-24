import { combineReducers } from 'redux';

import userReducer from './user/user.reducer'; // THIS COULD REPRESENT MAYBE A CLAIM,DELETE OR REQUEST POLICIES
import cartReducer from './cart/cart.reducer';

export default combineReducers(
    { 
        user: userReducer, 
        cart: cartReducer
    });//this represent a gian state object ie state = {user, {user_stuff}};
