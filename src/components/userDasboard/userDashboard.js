import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listWorkLogs } from '../../redux/actions/workLogActions'
import style from './Dashboard.module.css'

const UserDashboard = () => {
 const dispatch = useDispatch();
 const logs = useSelector(state => state?.workLogList?.users?.workLogs?.data)

   const updateBlog = () =>{
       console.log("clicked");
   }
   
    useEffect(() => {
        dispatch(listWorkLogs())
    }, [dispatch])

    return (
        <div>  
            <Link to="/createworklog"><button className="workLogBtn"> create Log</button></Link>
            <table>
              <caption>User dashboard</caption>
              <caption>Created logs</caption>
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">DATE</th>
                  <th scope="col">HOURS</th>
                  <th scope="col">Description</th>
                  <th scope='col'>Actions</th>
                </tr>
              </thead>
              <tbody>      
                  {logs?.map((log) => (
                    <tr key={log.id}  className={log.hours >=8? style.green : style.red}>
                      <td scope="row" data-label="userId">{log.id}</td>
                      <td data-label="firstName">{log.log_date}</td>
                      <td data-label="email" >{log.hours}</td>
                      <td data-label="role">{log.description}</td>
                      <td data-label="Actions">
                      <button onClick={updateBlog}>Update</button>
                      </td>
                    </tr>
                  ))}
             </tbody>
          </table>
        </div>
    )
}

export default UserDashboard
