import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer'; // THIS COULD REPRESENT MAYBE A CLAIM,DELETE OR REQUEST POLICIES
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory-reducer';
import shopReducer from './shop/shop.reducer';

const persisteConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers(
    { 
        user: userReducer, 
        cart: cartReducer,
        directory: directoryReducer,
        shop: shopReducer
    });



export default persistReducer(persisteConfig,rootReducer);//this represent a gian state object ie state = {user, {user_stuff}};
