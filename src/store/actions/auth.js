import ACTION from "../types";
import api from "../api";
import setAuthorizationHeader from "../utils/setAuthorizationHeader";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SET_MESSAGE,
} from "../types";
import AuthService from "../api";


// export const userLoggedOut = () => ({
//   type: USER_LOGGED_OUT
// });

// export const login = credentials => dispatch =>
//   api.user.login(credentials).then(user => {
//     localStorage.bookwormJWT = user.token;
//     setAuthorizationHeader(user.token);
//     dispatch(userLoggedIn({ ...user, loaded: true }));
//   });



// export const logout = () => dispatch => {
//   localStorage.removeItem("bookwormJWT");
//   setAuthorizationHeader();
//   dispatch(userLoggedOut());
// };

// export const confirm = token => dispatch =>
//   api.user.confirm(token).then(user => {
//     localStorage.bookwormJWT = user.token;
//     dispatch(userLoggedIn(user));
//   });

export const validateToken = token => () => api.user.validateToken(token);


