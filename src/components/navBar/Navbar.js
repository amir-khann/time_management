import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import styles from './navBar.module.css'
import SignedOutLinks from './SignedOutLinks'
import SignInLinks from './SignInLinks'


const Navbar = () => {
  const userInfo = useSelector(state => state.userLogin.userInfo)

  
    return (
        <div class={styles.nav}>
  <input type="checkbox" id={styles.nav_check} />
  <div class={styles.nav_header}>
    <div class={styles.nav_title}>
     <Link to="/">Logo</Link>
    </div>
  </div>
  <div class={styles.nav_btn}>
    <label  for={styles.nav_check}>
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class={styles.nav_links}>
    {userInfo? <SignInLinks />:<SignedOutLinks />}
    
   
  </div>
  
</div>
    )
}

export default Navbar
