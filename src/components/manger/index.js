import React from 'react'
import { Link } from 'react-router-dom'

import styles from './manager.module.css'

const Manager = () => {
    return (
        <div>
            <h1>manager dashboard</h1>
            <Link to="createuser"><button>createuser</button></Link>
            
        </div>
    )
}

export default Manager
