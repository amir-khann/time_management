import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { registerManager} from '../../redux/actions/userActions'
import styles from './ManagerSignUp.module.css'

const ManagerSignUp = () => {
    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        password_confirmation:""
    })
    
    const [message, setMessage] = useState(null)
   
    const dispatch = useDispatch()
    const history = useHistory()
    
    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin
   console.log(userInfo);

    const handelChange = (e) => {
        const {name, value} = e.target;
        setUser({...user,[name]:value})
    }
   

    const submitHandler = (e) => {
    e.preventDefault()
    
    if (user.password !== user.password_confirmation) {
      setMessage('Passwords do not match')
    } else {
      dispatch(registerManager(user))
    }
  }
    return (
        
          <>
            <div className={styles.form_wrapper}>
            <form onSubmit={submitHandler}>
          <h2 className={styles.title}>Sign Up</h2>
          <input type="text"  placeholder="First_Name" name="firstName" value={user.firstName} onChange={handelChange}/>
          <input type="text" placeholder="Last_Name"  name="lastName" value={user.lastName} onChange={handelChange}/>
          <input type="email" placeholder="Email"  name="email" value={user.email} onChange={handelChange}/>
          <input type="password" placeholder="Password"  name="password" value={user.password} onChange={handelChange} autoComplete="on"/>
          <input type="password" placeholder="Confirm_password"  name="password_confirmation" value={user.password_confirmation} onChange={handelChange} autoComplete="on"/>
          {/* dropdown */}
          <button className={styles.sign_in_btn}>Sign Up</button>
          <h5>
            all ready have account? <Link to="/signin" className={styles.sign_up}>Sign In</Link>
          </h5>
       </form>
        </div>
          </>

    )
}

export default ManagerSignUp




// const ManagerSignUp = () => {

//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [confirmPassword, setConfirmPassword] = useState('')
//     const [message, setMessage] = useState(null)
  
//     const dispatch = useDispatch()
  
//     const userRegister = useSelector((state) => state.userRegister)
//     const { loading, error, userInfo } = userRegister
  

  
//     useEffect(() => {
     
  
//     const submitHandler = (e) => {
//       e.preventDefault()
//       if (password !== confirmPassword) {
//         setMessage('Passwords do not match')
//       } else {
//         dispatch(register(name, email, password))
//       }
//     }
//     return (
//      
      
//     )
// }

// export default ManagerSignUp
