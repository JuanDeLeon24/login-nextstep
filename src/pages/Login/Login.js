import React from "react";
import './Login.css'
import Title from './components/Title/Title'
import Label from "./components/Label/Label";
import Input from "./components/Input/Input";

const Login = () => {
    return(
        <div className='login-container'>
            <Title text='No soy un titulo'/>
            <Label text='Usuario'/>
            <Input />
            <Label text='Contraseña'/> 
            <Input />
        </div>
    )
};

export default Login;