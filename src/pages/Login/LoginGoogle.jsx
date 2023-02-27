import { useEffect, useState } from 'react';
import { auth, provider } from './firebase.js';
import {signInWithPopup} from 'firebase/auth'
import Home from '../Home/Home';
import './Styles.css';


function LoginGoogle() {
  const [value, setValue] = useState('');

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data)=>{
      setValue(data.user.email)
      localStorage.setItem('email', data.user.email)
    })
  };

  useEffect(()=>{
    setValue(localStorage.getItem('email'))
  })

  return (
    <div className='submit'>
      {value ? (
        <Home />
      ) : (
        <button onClick={handleClick} className='submit-button'>
          Sign in with Google
        </button>
      )}
    </div>
  );
}

export default LoginGoogle;