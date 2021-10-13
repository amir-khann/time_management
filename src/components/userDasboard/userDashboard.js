import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { createLog } from '../../redux/actions/workLogActions'

const UserDashboard = () => {

 const state = useSelector(state => state.workLog)
 console.log(state.workLog.log);
 
    const dispatch = useDispatch();

    const [workLog, setWorkLog] = useState({
        logDate:"",
        hours:"",
        description:""
    })


   

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createLog(workLog))
        console.log(workLog);
    }
    const handelChange = (e) => {
        const {name, value} = e.target;
        setWorkLog({...workLog,[name]:value})
    }

    return (
        <div>
            <button >create works log</button>

            <form onSubmit={submitHandler}>
          <h2 className="title">create log</h2>
          <input type="date"  placeholder="logDate" name="logDate" value={workLog.logDate} onChange={handelChange}/>
          <input type="text" placeholder="hours"  name="hours" value={workLog.hours} onChange={handelChange}/>
          <input type="text" placeholder="description"  name="description" value={workLog.description} onChange={handelChange}/>
          {/* dropdown */}
          <button className="sign_in_btn">Create log</button>

          
          
       </form>
        </div>
    )
}

export default UserDashboard
