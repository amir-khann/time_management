import { combineReducers } from 'redux';
import { userRegisterReducer, userLoginReducer,managerRegisterReducer,userListReducer ,userUpdateReducer} from './reducers/userReducers';
import {createLogReducer, logListReducer} from './reducers/workLogReducers'
const rootReducer = combineReducers({
    userLogin: userLoginReducer,
    managerRegister:managerRegisterReducer,
    userRegister:userRegisterReducer,
    userList: userListReducer,
    userUpdate:userUpdateReducer,
    
    workLog:createLogReducer,
    workLogList:logListReducer

});

export default rootReducer;