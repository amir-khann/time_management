import axios from 'axios'
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  MANAGER_REGISTER_FAIL,
  MANAGER_REGISTER_REQUEST,
  MANAGER_REGISTER_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_SUCCESS,
  USER_LIST_REQUEST,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_UPDATE_FAIL,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_REQUEST,
} from '../constants/userConstants'


export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      'http://34.210.129.167/api/login',
      { email, password },
      config
    )

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}


export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({ type: USER_LOGOUT })
  document.location.href = '/signin'
}

// MANAGER REGISTER ACTION

export const registerManager = (user) => async (dispatch) => {
  try {
    dispatch({
      type: MANAGER_REGISTER_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      'http://34.210.129.167/api/register',
      { firstName:user.firstName,lastName:user.lastName, email:user.email, password:user.password, password_confirmation:user.password_confirmation },
      config
    )

    dispatch({
      type: MANAGER_REGISTER_SUCCESS,
      payload: data,
    })
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: MANAGER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}


export const registerUser = (user) => async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      })
   
    const {
      userLogin: { userInfo },
    } = getState()

    console.log("userinfo.token",userInfo.token);

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }  

      const { data } = await axios.post(
        'http://34.210.129.167/api/users',
        { firstName:user.firstName,lastName:user.lastName, email:user.email, password:user.password, password_confirmation:user.password_confirmation,userType:user.userType},
        config
      )
  
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      })
  
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      })
  
      localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }

  }

  export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()
 

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`http://34.210.129.167/api/users`, config)
    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: USER_LIST_FAIL,
      payload: message,
    })
  }
}


export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DELETE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`http://34.210.129.167/api/users/${id}`, config)

    dispatch({ type: USER_DELETE_SUCCESS })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: USER_DELETE_FAIL,
      payload: message,
    })
  }
}


export const updateUser = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_REQUEST,
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

localStorage.setItem('updateUser', JSON.stringify(user))

    const { data } = await axios.put(`http://34.210.129.167/api/users/${user.id}`, user, config)

    dispatch({ type: USER_UPDATE_SUCCESS,payload:data })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: USER_UPDATE_FAIL,
      payload: message,
    })
  }
}
