import axios from 'axios'
import { LOG_CREATE_FAIL, LOG_CREATE_REQUEST, LOG_CREATE_SUCCESS } from '../constants/userConstants'


export const createLog = (workLog) => async (dispatch,getState) => {
    try {
      dispatch({
        type: LOG_CREATE_REQUEST,
      })

      const {
        userLogin: { userInfo },
      } = getState()
  
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
  