import { useEffect, useState } from 'react';
import { auth, provider } from './firebase.js';
import {signInWithPopup} from 'firebase/auth'
import Home from '../Home/Home';

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
    <div>
      {value?<Home />:
      <button onClick={handleClick}>Sing in with google</button>
      }
    </div>
  );
}

export default LoginGoogle;