import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SignInLinks = () => {
   
    return (
        <>
            <Link to="/" >Home</Link>
            <Link to="/profile" >Profile</Link>
            <Link to="/logout" >Log Out</Link>
        </>
    )
}

export default SignInLinks
