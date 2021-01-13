import React from 'react';
import { Button} from 'react-bootstrap'

function Login() {
    return(
        <div className="logIn-background">
            <div className="container-logIn">
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
                        </div>
                        <div className="forgotPass">
                            <a href="/">Forgot Password</a>
                        </div><br/><br/>
                        <div className="loginButton">
                            <Button className="accButton" type="button" class="btn btn-link" href="#TeacherDashboard">Login</Button>
                        </div><br/>
                        <div>New user? <a href="#SignUp">Create an account</a></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;