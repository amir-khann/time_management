import React from 'react'
import { Link } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <>
          <Link to="/signup" >Sig Up</Link>
          <Link to="/signin" >Log In</Link>
        </>
    )
}

export default SignedOutLinks
