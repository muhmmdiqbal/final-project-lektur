import React, { useEffect } from 'react'
import { Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import user from '../store/reducers/user';
import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../store/types";
import PropTypes from 'prop-types'


const Login = ({
    login
}) => {

    useEffect(() => {
        login()
        // eslint-disable-next-line
      }, [])

      const onChange = (e) => {
        user(e.target.value)
      }
    
      const onSubmit = (e) => {
        e.preventDefault()
        login(email,password)
      }

    return(
        <div className="logIn-background">
            <div className="container-logIn">
                <h4>Welcome Back!</h4>
                <p>Login to your account</p>
                <div>
                    <form onSubmit={onSubmit}>
                        <p>Email*</p>
                        <div className="containerForm">
                            <input className="formInput" type="email" id="fname" name="fname" placeholder="john@doe.com" onChange={onChange}
	value={name}></input>
                        </div><br/>
                        <p>Password*</p>
                        <div className="containerForm">
                            <input className="formInput" type="password" id="fname" name="fname" placeholder="********" onChange={onChange}
	value={password}></input>
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
TodoForm.propTypes = {
    title: PropTypes.string,
    setTodoTitle: PropTypes.func.isRequired,
    createTodo: PropTypes.func.isRequired
  }
  
  // Get state to props
  const mapStateToProps = (state) => ({
    title: state.todo.title
  })
  
  // Get dispatch / function to props
  const mapDispatchToProps = (dispatch) => ({
    login: (user) => dispatch({ type: USER_LOGGED_IN, payload: user }),
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(Login)

// export default Login;