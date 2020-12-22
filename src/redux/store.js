import { createStore,applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer,applyMiddleware(...middlewares));//THIS WILL REPRESENT A GIANT OBJECT I.E THE STATE

export default store;