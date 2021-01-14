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