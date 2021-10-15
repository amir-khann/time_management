import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { createLog } from '../../redux/actions/workLogActions'

const WorkLogForm = () => {
    const dispatch = useDispatch();
    const [workLog, setWorkLog] = useState({
        logDate:"",
        hours:"",
        description:""
    })
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createLog(workLog))
    
    }
    const handelChange = (e) => {
        const {name, value} = e.target;
        setWorkLog({...workLog,[name]:value})
    }

    return (
        <div>

        <form onSubmit={submitHandler}>
          <h2 className="title">create log</h2>
          <input type="date"  placeholder="logDate" name="logDate" value={workLog.logDate} onChange={handelChange}/>
          <input type="text" placeholder="hours"  name="hours" value={workLog.hours} onChange={handelChange}/>
          <input type="text" placeholder="description"  name="description" value={workLog.description} onChange={handelChange}/>
          <button className="sign_in_btn">Create log</button>     
       </form>
        </div>
    )
}

export default WorkLogForm