import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Admin from '../components/admin';
import Manager from '../components/manger';
import UserDashboard from '../components/userDasboard/userDashboard';

const Home = () => {

    const amir = useSelector(state => state.userLogin.userInfo)

    const role = amir ? amir.user.roles[0].name : ""; 
  
    return (
        <div>
            {role && role==="admin"? <Admin /> : null}
            {role && role==="manager"? <Manager /> : null}
            {role && role==="user"? <UserDashboard /> : null}
        </div>
    )
}

export default Home
