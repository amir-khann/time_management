import { combineReducers } from 'redux';
import { userRegisterReducer, userLoginReducer } from './reducers/userReducers';

const rootReducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer

});

export default rootReducer;