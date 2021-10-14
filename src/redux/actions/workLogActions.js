import axios from 'axios'
import {
  LOG_LIST_FAIL,
  LOG_LIST_REQUEST,
  LOG_LIST_SUCCESS,
  LOG_CREATE_FAIL,
  LOG_CREATE_REQUEST,
  LOG_CREATE_SUCCESS 
} from '../constants/workLogsConstants'



export const createLog = (workLog) => async (dispatch,getState) => {
    try {
      dispatch({
        type: LOG_CREATE_REQUEST,
      })

      const {
        userLogin: { userInfo },
      } = getState()
      console.log("token",userInfo);
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.post(
        'http://34.210.129.167/api/work-logs',
        workLog,
        config
      )
  
      dispatch({
        type: LOG_CREATE_SUCCESS,
        payload: data,
      })
    
  
   
  
    } catch (error) {
      dispatch({
        type: LOG_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
  
  

  export const listWorkLogs = () => async (dispatch, getState) => {
    try {
      dispatch({
        type:LOG_LIST_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
    console.log("token=?",userInfo.token);
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
     
      const { data } = await axios.get(`http://34.210.129.167/api/work-logs `, config)
      console.log("logaction",data);
      dispatch({
        type: LOG_LIST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      dispatch({
        type: LOG_LIST_FAIL,
        payload: message,
      })
    }
  }
  