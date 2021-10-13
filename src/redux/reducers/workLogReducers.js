import { LOG_CREATE_FAIL, LOG_CREATE_REQUEST, LOG_CREATE_SUCCESS } from '../constants/userConstants'


export const createLogReducer = (state = {}, action) => {
    switch (action.type) {
      case LOG_CREATE_REQUEST:
        return { loading: true }
      case LOG_CREATE_SUCCESS:
        return { loading: false, workLog: action.payload }
      case LOG_CREATE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }