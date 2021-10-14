import { LOG_CREATE_FAIL, LOG_CREATE_REQUEST, LOG_CREATE_SUCCESS, LOG_LIST_FAIL, LOG_LIST_REQUEST, LOG_LIST_SUCCESS } from '../constants/workLogsConstants'


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

  export const logListReducer = (state = { logs: [] }, action) => {
    switch (action.type) {
      case LOG_LIST_REQUEST:
        return { loading: true }
      case LOG_LIST_SUCCESS:
        return { loading: false, users: action.payload }
      case LOG_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
