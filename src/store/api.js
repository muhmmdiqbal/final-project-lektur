import axios from 'axios';

export default {
    user: {
        login: credentials =>
        axios.post('https://lektur.kuyrek.com/login', { credentials }).then(res => res.data.user),
        signup: user =>
        axios.post('https://lektur.kuyrek.com/signup', { user }).then(res => res.data.user),
        confirm: token =>
        axios.post('https://lektur.kuyrek.com/login', { token }).then(res => res.data.user)
    }
};

// import axios from "axios";

// const API_URL = "https://lektur.kuyrek.com/";

// const register = (name, email, password) => {
//   return axios.post(API_URL + "signup", {
//     name,
//     email,
//     password,
//   });
// };

// const login = (username, password) => {
//   return axios
//     .post(API_URL + "signin", {
//       username,
//       password,
//     })
//     .then((response) => {
//       if (response.data.accessToken) {
//         localStorage.setItem("user", JSON.stringify(response.data));
//       }

//       return response.data;
//     });
// };

// const logout = () => {
//   localStorage.removeItem("user");
// };

// export default {
//   register,
//   login,
//   logout,
// };