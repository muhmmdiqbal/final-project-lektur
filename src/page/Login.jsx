import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUserLogIn, createUserFailure } from '../store/actions/users';
import { Button} from 'react-bootstrap'


const Login = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    const { email, password } = userData;

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createUserLogIn({ email, password }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    return(
        <div className="logIn-background">
            <div className="container-logIn">
                <h4>Welcome Back!</h4>
                <p>Login to your account</p>
                <div>
                    <form onSubmit={handleSubmit}> 
                        <p>Email*</p>
                        <div className="containerForm">
                            <input className="formInput" value={email} onChange={handleChange} type="email" id="email" name="email" placeholder="john@doe.com" required></input>
                        </div><br/>
                        <p>Password*</p>
                        <div className="containerForm">
                            <input className="formInput" value={password} onChange={handleChange} type="password" id="password" name="password" placeholder="********" required></input>
                        </div>
                        <div className="forgotPass">
                            <a href="/">Forgot Password</a>
                        </div><br/><br/>
                        <div className="loginButton">
                            <Button className="accButton" type="submit" class="btn btn-link" >Login</Button>
                        </div><br/>
                        <div>New user? <a href="#SignUp">Create an account</a></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;