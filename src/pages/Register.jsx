
import {useState,useRef, React} from 'react'

import {createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth,storage,db} from '../firebase';
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { doc, setDoc } from "firebase/firestore"; 

import {Link,useNavigate} from 'react-router-dom'
import '../assets/styles/style.scss'
import logo from '../assets/images/logo.png'
import add from '../assets/images/add.png'
import { validateForm } from '../utils/validation/validateform'
function Register() {
  const [formData, setFormData] = useState({
    name:'',
    email: '',
    password: '',
    confirmPassword:'',
    file:''
  });
  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate=useNavigate();
 

 
    //const [email,setEmail]=useState("");
    //const [passwordvalid,setPasswordValid]=useState({password:"",confirmPassword:""});
    
    /*
    useEffect(() => {
      setErrors(validateForm(formData));
    }, [formData]);
  */
    /*
  
      
        
*/
    const onSubmitForm=async (e)=>{
     
       e.preventDefault();
       let errors = validateForm(formData);
       if (Object.keys(errors).length === 0) {
         // Form is valid, submit data to server
         setErrors(errors);
         //console.log(formData);
        
         
        
      
       

         try {
          const {user} = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
         console.log("user is "+user)
          const storageRef = ref(storage, formData.name);
          const uploadTask = uploadBytesResumable(storageRef, formData.file);
          // Register three observers:
          // 1. 'state_changed' observer, called any time the state changes
          // 2. Error observer, called on failure
          // 3. Completion observer, called on successful completion
          uploadTask.on('state_changed', 
            (snapshot) => {
              // Observe state change events such as progress, pause, and resume
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            }, 
            (error) => {
              // Handle unsuccessful uploads
             // setError(true);
            }, 
            () => {
              // Handle successful uploads on complete
              // For instance, get the download URL: https://firebasestorage.googleapis.com/...
              getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
               // console.log('File available at', downloadURL);
               await updateProfile(user,{displayName:formData.name,photoURL:downloadURL})
               await setDoc(doc(db, "users", user.uid), {
                uid:user.uid,
                displayName:formData.name,
                email:formData.email,
                photoURL:downloadURL
              });
              });
              navigate("/Login");
            }
          );
        
        // Add a new document in collection "cities"
        
        } catch (error) {
          console.log("error "+error)
         // setError(true);
        }
        

        



       } else {
         // Form is invalid, update errors state
         setErrors(errors);
       }
      // console.log(email)
    
      /*
      try {
       console.log(error.email.emailerror);
       console.log(error.email.message);
     // await signInWithEmailAndPassword(auth,email,password);
      //navigate("/")
      
      } catch (error) {
       // setError(true);
      }
      */
    }
    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    };
    function handleFile(e){
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0]
      });
    }
    return (
    <div className='container registers'>
        <div className='container_wrapper'>
          <div className="logo">
          <span className='logo_img'><img src={logo} alt=""/></span>
          <span className='logo_title'>DashboardKit</span>
        </div>
          <div className="info_text">
          <h2 className='info_text--login'>Register to Dashboard Kit</h2>
        </div>
          <form action="" className="form" onSubmit={onSubmitForm}>
            
          <div className="form_name">
              <label htmlFor="name">Name</label>
              <input name='name' id="name" type="text" placeholder='Enter your name' value={formData.name} onChange={handleChange}></input>
              <span className='error'>{errors.name && errors.name}</span>
            </div>
            <div className="form_email">
              <label htmlFor="email">Email</label>
              <input name='email' id="email" type="email" placeholder='Enter email' value={formData.email} onChange={handleChange}></input>
              <span className='error'>{errors.email && errors.email}</span>
            </div>
            <div className="form_file">
            <input name='file' id="file" style={{display:"none"}} type="file" onChange={handleFile} placeholder='File'></input>
             <label htmlFor='file'>
              <img className='uploadimage' src={add} alt="upload" />
              <span className='uploadfiletext'>{!formData.file?"Upload profile":formData.file.name}</span>
             </label>
             </div>
            <div className="form_password">
              <label htmlFor="password"><span className="password">Password</span></label>
              <div className="password-input">
              <input name='password' id='password' type={passwordVisible?"text":"password"}  placeholder='Enter password' value={formData.password} onChange={handleChange}/>
              <div className="password-toggle" onClick={()=>setPasswordVisible(!passwordVisible)}>
                <i className={passwordVisible?"fas fa-eye":"fas fa-eye-slash"}></i>
              </div>
              <span className='error'>{errors.password && errors.password}</span>
          </div>
            </div>

            <div className="form_password">
              <label htmlFor="passwordconfirm"><span className="password">Confirm Password</span> </label>
              <div className="password-input">
              <input name='confirmPassword' id='passwordconfirm' type={passwordVisible?"text":"password"} placeholder='Enter password' value={formData.confirmPassword} onChange={handleChange}/>
              <div className="password-toggle" onClick={()=>setPasswordVisible(!passwordVisible)}>
                <i className={passwordVisible?"fas fa-eye":"fas fa-eye-slash"}></i>
              </div>
              <span className='error'>{errors.confirmPassword && errors.confirmPassword}</span>
          </div>
            </div>
              <button className="form_login"><i>Sign Up</i></button>
              <p className='account'>Do you have an account? <Link to="/Login">Sign In</Link></p>
          </form>
          </div>     
      </div>
  )
}

export default Register;