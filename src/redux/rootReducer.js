import { combineReducers } from 'redux';
import simpleReducer from './reducers/simpleReducer';

const rootReducer = combineReducers({
    simpleReducer
});

export default rootReducer;