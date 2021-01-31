import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { teacherSignUpRequest, createUserFailure } from '../store/actions/users';
import { Button} from 'react-bootstrap'

function Teacher() {
    const signUpStatus = useSelector (state => state.user)
    const [teacherData, setTeacherData] = useState ({
        name: "",
        email: "",
        password: "",
        isError: "",
        confirmPassword: "",
        signUpError: "",
    });

    const { name, email, password, confirmPassword } = teacherData;

    const dispatch = useDispatch();
    const [ isError, setIsError] = useState ( false );

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setIsError ('Password Confirmation Do Not Match!')
        }
    dispatch(teacherSignUpRequest({name, email, password}));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTeacherData((prevUserData) => {
          return {
            ...prevUserData,
            [name]: value,
          };
        });
      };
    
    if (signUpStatus.status === 'Signup success!'){
        window.location.href =`/Login`
    }
    return(
        <div className="signUp-background">
            <div className="container-signUp">
                <h4>Get Involved Now!</h4>
                <p>Create your account</p>
                <div>
                    <form onSubmit={handleSubmit}>
                        <p>Name*</p>
                        <div className="containerForm">
                            <input className="formInput formNama" value={name} onChange={handleChange} type="text" name="name" placeholder="John Doe" required></input>
                        </div><br/>
                        <p>Email*</p>
                        <div className="containerForm">
                            <input className="formInput formEmail" value={email} onChange={handleChange} type="email" name="email" placeholder="john@doe.com" required></input>
                        </div><br/>
                        <p>Password*</p>
                        <div className="containerForm">
                            <input className="formInput formPassword" value={password} onChange={handleChange} type="password" name="password" placeholder="Password" required></input>
                        </div><br/>
                        <p>Confirm Password*</p>
                        <div className="containerForm">
                            <input className="formInput" value={confirmPassword} onChange={handleChange} type="password" name="confirmPassword" placeholder="Confirm Password" required></input>
                        </div><br/>
                        <div style={{ position: "absolute", alignSelf: "left"}}>
                            { isError && <p className="text-danger"> {isError}</p> }
                        </div>
                        <br/><br/>
                        <div className="SignUp-button">
                            <Button className="accButton" type="submit" class="btn btn-link">Sign Up</Button>
                        </div><br/>
                        <div classNmae="loginQuestion">Already have an account? <a href="Login">Login</a></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Teacher;