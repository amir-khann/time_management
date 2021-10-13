import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser, listUsers } from '../../redux/actions/userActions'

const Admin = () => {

    const dispatch = useDispatch()
  

    const userList = useSelector((state) => state?.userList?.users?.users?.data)
   

    console.log("waqas",userList);
  
 
 
     const handelDelete = (id) => {
         
            if (window.confirm('Are you sure')) {
                dispatch(deleteUser(id))
              }
            }

    useEffect(() => {
          dispatch(listUsers())
      }, [dispatch])
    return (
        <div>
            <h1>admin dashboard</h1>
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
  { userList?.map((user) => (
              <tr key={user.id}>
                <td scope="row" data-label="userId">{user.id}</td>
                <td data-label="firstName">{user.firstName} {user.lastName}</td>
                <td data-label="email">{user.email}</td>
                <td data-label="role">{user.roles[0].name}</td>
                <td data-label="Actions">
                    <button onClick={() => handelDelete(user.id)}>Delete</button>
                    <button>Update</button>
                </td>
             </tr>
            ))}
    
  </tbody>
</table>
        </div>
    )
}

export default Admin
