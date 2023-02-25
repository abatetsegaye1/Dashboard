import React,{useContext,useState} from 'react'
import { signOut } from 'firebase/auth'
import { AuthContext } from '../../context/AuthContext'
import { auth } from '../../firebase'
export default function Profile() {

  const {currentUser} = useContext(AuthContext)
  console.log("current user "+Object.keys(currentUser));
  console.log("current user "+currentUser.photoURL);
  
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
 
  return (
    <div className="profile">
    <p className="text">Overview</p> 
    <div className="profile_info"> 
        <div className="Notification">
            <span className="search"><a href=""><i className="fa-solid fa-magnifying-glass"></i></a></span>
            <span className="notification_icon"><a href=""><i className="fa-regular fa-bell"></i></a></span>
           </div>
         <span className="profile_name">{currentUser.displayName}</span>
         <img className="profile_image" src={currentUser.photoURL} alt=""  onClick={toggleDropdown}/>
         <i className="fa fa-caret-down" aria-hidden="true"></i>
         {isOpen && (
        <div className="dropdown-content" onClick={closeDropdown}>
          <button onClick={()=>signOut(auth)}>Logout</button>
        </div>
      )}
    </div>
   </div>
  )
}
