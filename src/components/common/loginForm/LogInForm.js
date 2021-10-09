import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './LogInForm.module.css'
const LogInForm = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handelSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
        console.log(password);
    }
    return (
        <div className={styles.form_wrapper}>
            <form onSubmit={handelSubmit}>
                <h2 className={styles.title}>Sign In</h2>
                <input type="email" placeholder="Email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="password" placeholder="Password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <button className={styles.sign_in_btn}>Sign In</button>
                <h5>Dont'have account? <Link to="/signup" className={styles.sign_up}>Sign In</Link></h5>
            </form>

        </div>
    )
}

export default LogInForm
