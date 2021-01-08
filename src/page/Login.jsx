import React from 'react';
import { Button} from 'react-bootstrap'

function Login() {
    return(
        <div>
            <div className="container-signUp">
                <h4>Welcome Back!</h4>
                <p>Login to your account</p>
                <div>
                    <form>
                        <p>Email*</p>
                        <div className="containerForm">
                            <input className="formInput" type="text" id="fname" name="fname" placeholder="john@doe.com"></input>
                        </div><br/>
                        <p>Password*</p>
                        <div className="containerForm">
                            <input className="formInput" type="text" id="fname" name="fname" placeholder="********"></input>
                        </div><br/>
                        <div className="forgotPass">
                            <a href="#">Forgot Password</a>
                        </div>
                        <div className="loginButton">
                            <Button className="accButton" type="button" class="btn btn-link">Login</Button>
                        </div>
                        <div>New user? <a href="#SignUp">Create an account</a></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;