import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link,useHistory } from 'react-router-dom'
import {  updateUser } from '../../redux/actions/userActions'

import styles from './UserEdit.module.css'

const UserEdit = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [updatedUserr , setUpdatedUser] = useState(localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('updateUser')):{}) 
  const userLogin = useSelector((state) => state.userLogin)
  const {  userInfo } = userLogin

  const handelChange = (e) => {
      const {name, value} = e.target;
      setUpdatedUser({...updatedUserr,[name]:value})
  }
   
  const submitHandler = (e) => {
  e.preventDefault()
    dispatch(updateUser(updatedUserr))
    history.push('/')
  
}
    return ( 
        <div className={styles.form_wrapper}>
            <form onSubmit={submitHandler}>
              <h2 className={styles.title}>Edit Form</h2>
              <input type="text"  placeholder="First_Name" name="firstName" value={updatedUserr.firstName} onChange={handelChange}/>
              <input type="text" placeholder="Last_Name"  name="lastName" value={updatedUserr.lastName} onChange={handelChange}/>
              <input type="email" placeholder="Email"  name="email" value={updatedUserr.email} onChange={handelChange}/>
              <button className={styles.sign_in_btn}>Update user</button>
          </form>
    </div>

    )
}

export default UserEdit
