import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import styles from './navBar.module.css'
import SignedOutLinks from './SignedOutLinks'
import SignInLinks from './SignInLinks'


const Navbar = () => {

  const userInfo = useSelector(state => state.userLogin.userInfo)
  
    return (
        <div className={styles.nav}>
  <input type="checkbox" id={styles.nav_check} />
  <div className={styles.nav_header}>
    <div className={styles.nav_title}>
     <Link to="/" className={styles.logo}>Logo</Link>
    </div>
  </div>
  <div className={styles.nav_btn}>
    <label  htmlFor={styles.nav_check}>
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className={styles.nav_links}>
    {userInfo? <SignInLinks userInfo={userInfo} />:<SignedOutLinks />}
    
   
  </div>
  
</div>
    )
}

export default Navbar
