import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useHistory} from 'react-router'
import { Link,useHistory } from 'react-router-dom'
import { deleteUser, listUsers,updateUser } from '../../redux/actions/userActions'

import styles from './manager.module.css'


const Manager = () => {
    const dispatch = useDispatch()
    const userList = useSelector((state) => state?.userList?.users?.users?.data)

  

    const update = useSelector(state => state)
    console.log("update",update.userUpdate);
    const history= useHistory()

    useEffect(() => {
          dispatch(listUsers())
      }, [dispatch])

      const handelDelete = (id) => {
         
        if (window.confirm('Are you sure')) {
            dispatch(deleteUser(id))
          }
        }
       const handelUpdate = (user) => {
         dispatch(updateUser(user))
         history.push('/')
       }
    return (
        <div>
           
            <Link to="createuser"><button className={styles.btn}>createuser</button></Link>
          
            <table>
  <caption>Manager dashboard</caption>
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Role</th>
      <th scope='col'>Actions</th>
    </tr>
  </thead>
  <tbody>
  {userList?.map((user) => (
              <tr key={user.id}>
                <td scope="row" data-label="userId">{user.id}</td>
                <td data-label="firstName">{user.firstName} {user.lastName}</td>
                <td data-label="email">{user.email}</td>
                <td data-label="role">{user.roles[0].name}</td>
                <td data-label="Actions">
                    <button  onClick={() => handelDelete(user.id)}>Delete</button>
                  <Link to="/useredit"> <button onClick={()=>handelUpdate(user)}>Update</button></Link>
                </td>
             </tr>
            ))}
    
  </tbody>
</table>
        </div>
    )
}

export default Manager
