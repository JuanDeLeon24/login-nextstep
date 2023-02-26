import React, {useState} from "react";
import './Login.css'
import Title from './components/Title/Title'
import Label from "./components/Label/Label";
import Input from "./components/Input/Input";

const Login = () => {

    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordError, setPasswordError ] = useState(false);

    function handleChange(name, value){
        if(name === 'Usuario'){
            setUser(value)
        }else {
            if(value.length < 8){
                setPasswordError(true);
            }else{
                setPasswordError(false)
                setPassword(value)
            }
        }
    };

    function handleSubmit(){
        let account = {user, password}
        if(account){
            console.log('account: ', account)
        }
    };

    return(
        <div className='login-container'>
                <div className='login-content'>
                <Title text='¡Bienvenido a NexStep!'/>
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
                <div className='submit-button-container'>
                     <button onClick={handleSubmit} className='submit-button-container'>
                          Login
                     </button>
                </div>
            </div>
        </div>
    )
};

export default Login;