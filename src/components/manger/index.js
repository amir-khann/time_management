import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listUsers } from '../../redux/actions/userActions'

import styles from './manager.module.css'


const Manager = () => {
    const dispatch = useDispatch()
  

    const userList = useSelector((state) => state.userList)
    const users = userList.users?userList.users.users:[];


    const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

 

    useEffect(() => {
      
          dispatch(listUsers())
   
      }, [dispatch])
    
    return (
        <div>
            <h1>manager dashboard</h1>
            <Link to="createuser"><button>createuser</button></Link>
          
            <table>
  <caption>Statement Summary</caption>
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
  {users.data?.map((user) => (
              <tr key={user.id}>
                <td scope="row" data-label="userId">{user.id}</td>
                <td data-label="firstName">{user.firstName} {user.lastName}</td>
                <td data-label="email">{user.email}</td>
                <td data-label="role">{user.roles[0].name}</td>
                <td data-label="Actions">
                    <button>Delete</button>
                    <button>Update</button>
                </td>
             </tr>
            ))}
    
  </tbody>
</table>
        </div>
    )
}

export default Manager
