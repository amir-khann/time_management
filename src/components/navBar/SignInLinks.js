import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../redux/actions/userActions'

const SignInLinks = () => {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
      };
   
    return (
        <>
            <Link to="/" >Home</Link>
            <Link to="/profile" >Profile</Link>
            <Link to="/logout" onClick={logoutHandler}>Log Out</Link>
        </>
    )
}

export default SignInLinks
