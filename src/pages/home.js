import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {

    const amir = useSelector(state => state.userLogin.userInfo)

    const manager = amir ? amir.user.roles[0].name : ""; 
  
    return (
        <div>
            {manager && manager==="admin"? <h1>admin dashboard</h1> : null}
            {manager && manager==="manager"? <h1>manager dashboard</h1> : null}
            {manager && manager==="user"? <h1>user dashboard</h1> : null}
        </div>
    )
}

export default Home
