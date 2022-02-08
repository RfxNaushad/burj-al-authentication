import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const Login = () => {

    const { signInUsingGoogle } = useAuth()

    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home'

    console.log('came from', location.state?.from)
    const handleGoogleLogIn = ()=>{
         signInUsingGoogle()
         .then(result=>{
              history.push(redirect_uri);
         })
    }

    return (
        <div>
            <div className='login-form'>
                <button className='btn-regular' onClick={handleGoogleLogIn}>Google SignIn</button>
            </div>
        </div>
    );
};

export default Login;