
import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import '../assets/styles/style.scss'
import logo from '../assets/images/logo.png'
import {auth} from '../firebase'
//import { validateForm } from '../utils/validation/validateform'
function Login() {
   
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      
      });
      const [errors, setErrors] = useState({});

       const validateForm = (data) => {
    
        let errorsone = {};
        
        if (!data.email) {
          errorsone.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
          errorsone.email = 'Email address is invalid';
        }
        if (!data.password) {
          errorsone.password = 'Password is required';
        } else if (data.password.length < 6) {
          errorsone.password = 'Password must be at least 6 characters';
        }
        return errorsone;
      };
    const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
      };

    const onSubmitForm=async (e)=>{
       e.preventDefault();
    
       let errors = validateForm(formData);
       if (Object.keys(errors).length === 0) {
         // Form is valid, submit data to server
         setErrors(errors);
         //console.log(formData);
      

         try {
   
            await signInWithEmailAndPassword(auth,formData.email,formData.password);
            navigate("/")
            
            } catch (error) {
             // setError(true);
            }


       } else {
         // Form is invalid, update errors state
         setErrors(errors);
       }

     
    }

  return (
    <div className='container'>
        <div className='container_wrapper'>
          <div className="logo">
          <span className='logo_img'><img src={logo} alt=""/></span>
          <span className='logo_title'>DashboardKit</span>
        </div>
          <div className="info_text">
          <h2 className='info_text--login'>Log In to Dashboard Kit</h2>
          <p className='info_text--description'>Enter Your Email and Password below:</p>
        </div>
          <form action="" className="form" onSubmit={onSubmitForm}>
            <div className="form_email">
              <label htmlFor="email">Email</label>
              <input name='email' id="email" type="email" placeholder='Enter email' value={formData.email} onChange={handleChange}></input>
              <span className='error'>{errors.email && errors.email}</span>
            </div>
            <div className="form_password">
              <label htmlFor="password"><span className="password">Password</span> <span className="forgot_pass">Forgot Password</span></label>
              <div className="password-input">
              <input name='password' id='password' type={passwordVisible?"text":"password"} placeholder='Enter password' value={formData.password} onChange={handleChange}/>
              <div className="password-toggle" onClick={()=>setPasswordVisible(!passwordVisible)}>
                <i className={passwordVisible?"fas fa-eye":"fas fa-eye-slash"}></i>
              </div>
              <span className='error'>{errors.password && errors.password}</span>
          </div>
            </div>
              <button className="form_login"><i>Login</i></button>
              <p className='account'>Don't you have an account? <Link to="/Register">Sign Up</Link></p>
          </form>
          </div>     
      </div>
  )
}

export default Login;