import React, { useState } from "react";
import './Login.css'
import Title from './components/Title/Title';
import Label from "./components/Label/Label";
import Input from "./components/Input/Input";
import LoginGoogle from "./LoginGoogle";
import './Styles.css';
import LoginLinkedin from './LoginLinkedin';


const Login = () => {

    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordError, setPasswordError ] = useState(false);
    const [ setIsLogin ] = useState(false);
    const [ hasError, setHasError ] = useState(false);

    function handleChange(name, value) {
        if(name === 'usuario'){
            setUser(value)
        } else {
            if(value.length < 8){
                setPasswordError(true);
            } else {
                setPasswordError(false)
                setPassword(value)
            }
        }
    };

    function ifMatch(param) {
        if(param.user.length > 0 && param.password.length > 0){
            if(param.user === 'jsdeleon' && param.password === 'jsdeleon'){
                const { user, password} = param;
                let ac = {user, password};
                let account = JSON.stringify(ac);
                localStorage.setItem('account', account);
                setIsLogin(true);
            } else {
                setIsLogin(false);
                setHasError(true);
            }
        } else {
            setIsLogin(false);
            setHasError(true);
        }
    }

    function handleSubmit() {
        let account = { user, password }
        if(account) {
            ifMatch(account);
        }
    };

    return(
        <div className='login-container'>
                
                <div className='login-content'>
                    <Title text='¡Welcome to NextStep!'/>
                    {hasError &&
                    <label className="label-alert">
                        Please try again!
                         </label>
                    }
                    <Label text='Username'/>
                    <Input 
                    attribute={{
                     id: 'usuario',
                     name: 'usuario',
                     type: 'text',
                     placeholder: 'Enter your username'
                }}
                handleChange={handleChange}
                />

                <Label text='Password'/> 
                <Input 
                attribute={{
                    id: 'contraseña',
                    name: 'contraseña',
                    type: 'password',
                    placeholder: 'Enter you password'
                }}
                handleChange={handleChange}
                param={passwordError}
                />

                { passwordError &&
                    <label className='label-error'>
                        ¡Wrong password!
                    </label>
                }

                <div className='submit-button-container'>
                     <button onClick={handleSubmit} className='submit-button'>
                          Login
                     </button>
                     <LoginGoogle />
                     <LoginLinkedin />
                     
                </div>
            </div>
        </div>
    )
};

export default Login;