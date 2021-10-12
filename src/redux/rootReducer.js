import { combineReducers } from 'redux';
import { userRegisterReducer, userLoginReducer,managerRegisterReducer,userListReducer } from './reducers/userReducers';

const rootReducer = combineReducers({
    userLogin: userLoginReducer,
    managerRegister:managerRegisterReducer,
    userRegister:userRegisterReducer,
    userList: userListReducer,

});

export default rootReducer;