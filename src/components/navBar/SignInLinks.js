import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Avatar from 'react-avatar';
import { logout } from '../../redux/actions/userActions'


const SignInLinks = ({userInfo}) => {
    const name = `${userInfo.user.firstName} ${userInfo.user.lastName}}`
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
      };
   
    return (
        <>
            <Link to="/" >Home</Link>
            <Link to="/profile" ><Avatar name={name} size="35" round={true} /> Profile</Link>
            <Link to="/logout" onClick={logoutHandler}>Log Out</Link>
        </>
    )
}

export default SignInLinks
