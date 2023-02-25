

export const validateForm = (data) => {
    
    let errorsone = {};
   
    if(data.name.length<=2){
      errorsone.name = 'Enter name above three letter';
    }
    if (!data.email) {
      errorsone.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errorsone.email = 'Email address is invalid';
    }
    if (!data.password) {
      errorsone.password = 'Password is required';
    } else if (data.password.length < 6) {
      errorsone.password = 'Password must be at least 6 characters';
    }else if (data.password !== data.confirmPassword) {
      errorsone.confirmPassword = 'Password mismatch';
    }
    return errorsone;
  };
