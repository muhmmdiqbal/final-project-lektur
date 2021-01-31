import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpRequest, createUserFailure } from '../store/actions/users';
import { Button, Modal } from 'react-bootstrap';


const SignUp = () => {
    const signUpStatus = useSelector (state => state.user)
    const [userData, setUserData] = useState ({
        name: "",
        email: "",
        password: "",
        isError: "",
        confirmPassword: "",
        signUpError: "",
    });

    const { name, email, password, confirmPassword } = userData;

    const dispatch = useDispatch();
    const [ isError, setIsError] = useState ( false );
    const [ show, setShow ] = useState(false);
    const [ notif, setNotif ] = useState(false);
    const handleClose = () => setShow(false);
    const handleClose1 = () => setNotif(false);

    useEffect (() => {
        if (signUpStatus.status === 'Signup success!'){
            setShow(true);
        } 
    }, [signUpStatus]);


    console.log(signUpStatus, 'error')
    useEffect (() => {
        if (signUpStatus.errorMessages !== ''){
            setNotif(true);
        } 
    }, [signUpStatus]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setIsError ('Password Confirmation Do Not Match!')
        }
        dispatch(signUpRequest({name, email, password}));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevUserData) => {
          return {
            ...prevUserData,
            [name]: value,
          };
        });
      };

    return (
        <div className="signUp-background">
            <div className="container-signUp">
            <Modal show={notif} onHide={handleClose1}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>Seems like you're using the registered email that have already used.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose1}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>Your Account was successfuly made! <br/>Please check your email.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose} href='/Login' >
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                <h4>Start Learning!</h4>
                <p>Create your account</p>
                <div>
                    <form onSubmit={handleSubmit}>
                        <p>Name*</p>
                        <div className="containerForm">
                            <input className="formInput nameForm" value={name} onChange={handleChange} type="text" name="name" placeholder="John Doe" required></input>
                        </div><br/>
                        <p>Email*</p>
                        <div className="containerForm">
                            <input className="formInput emailForm" value={email} onChange={handleChange} type="email" name="email" placeholder="john@doe.com" required></input>
                        </div><br/>
                        <p>Password*</p>
                        <div className="containerForm">
                            <input className="formInput passwordForm" value={password} onChange={handleChange} type="password" id="password" name="password" placeholder="Password" required></input>
                        </div><br/>
                        <p>Confirm Password*</p>
                        <div className="containerForm">
                            <input className="formInput" value={confirmPassword} onChange={handleChange} type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" required></input>
                        </div><br/>
                        <div style={{ position: "absolute", alignSelf: "left"}}>
                            { isError && <p className="text-danger"> {isError}</p> }
                        </div>
                        <br/><br/>
                        <div className="SignUp-button">
                            <Button className="accButton" type="submit" class="btn btn-link">Sign Up</Button>
                        </div>
                        <br/>
                        <div classNmae="loginQuestion">Already have an account? <a href="Login">Login</a></div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
