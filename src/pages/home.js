import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Manager from '../components/manger';

const Home = () => {

    const amir = useSelector(state => state.userLogin.userInfo)

    const role = amir ? amir.user.roles[0].name : ""; 
  
    return (
        <div>
            {role && role==="admin"? <h1>admin dashboard</h1> : null}
            {role && role==="manager"? <>
             <Manager />
            </> : null}
            {role && role==="user"? <h1>user dashboard</h1> : null}
        </div>
    )
}

export default Home
