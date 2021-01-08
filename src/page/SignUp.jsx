import React from 'react';
import { Button} from 'react-bootstrap'

function SignUp() {
    return(
        <div className="signUp-background">
            <div className="container-signUp">
                <h4>Start Learning!</h4>
                <p>Create your account</p>
                <div>
                    <form>
                        <p>Name*</p>
                        <div className="containerForm">
                            <input className="formInput" type="text" id="fname" name="fname" placeholder="John Doe"></input>
                        </div><br/>
                        <p>Email*</p>
                        <div className="containerForm">
                            <input className="formInput" type="text" id="fname" name="fname" placeholder="john@doe.com"></input>
                        </div><br/>
                        <p>Password*</p>
                        <div className="containerForm">
                            <input className="formInput" type="text" id="fname" name="fname" placeholder="********"></input>
                        </div><br/>
                        <div className="SignUp-button">
                            <Button className="accButton" type="button" class="btn btn-link">Sign Up</Button>
                        </div><br/>
                        <div classNmae="loginQuestion">Already have an account? <a href="#Login">Login</a></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;