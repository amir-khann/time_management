import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { registerUser } from '../../redux/actions/userActions'

import styles from './User.module.css'

const UserSignup = () => {
    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        password_confirmation:"",
        userType:"user"
    })

   
    const dispatch = useDispatch()
 
    
    const userLogin = useSelector((state) => state.userLogin)
    const {  userInfo } = userLogin
   console.log("userInfo",userInfo);

    const handelChange = (e) => {
        const {name, value} = e.target;
        setUser({...user,[name]:value})
    }
   

    const submitHandler = (e) => {
    e.preventDefault()

      dispatch(registerUser(user))
    
  }
    return (
        
        <div className={styles.form_wrapper}>
        <form onSubmit={submitHandler}>
      <h2 className={styles.title}>Creat User</h2>
      <input type="text"  placeholder="First_Name" name="firstName" value={user.firstName} onChange={handelChange}/>
      <input type="text" placeholder="Last_Name"  name="lastName" value={user.lastName} onChange={handelChange}/>
      <input type="email" placeholder="Email"  name="email" value={user.email} onChange={handelChange}/>
      <input type="password" placeholder="Password"  name="password" value={user.password} onChange={handelChange} autoComplete="on"/>
      <input type="password" placeholder="Confirm_password"  name="password_confirmation" value={user.password_confirmation} onChange={handelChange} autoComplete="on"/>
      {/* dropdown */}
      <button className={styles.sign_in_btn}>Sign Up</button>
      <h5>
        all ready have account? <Link to="/signin" className={styles.sign_up}>Sign In</Link>
      </h5>
   </form>
    </div>

    )
}

export default UserSignup
