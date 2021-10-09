import { combineReducers } from 'redux';
import { userRegisterReducer } from './reducers/userReducers';

const rootReducer = combineReducers({
    userRegister: userRegisterReducer

});

export default rootReducer;