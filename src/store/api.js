import axios from 'axios';
import user from './reducers/user';

export default {
    user: {
        // login: credentials =>
        // axios.post('https://lektur.kuyrek.com/login', { credentials }).then(res => res.data.token),
        signUp: user =>
            axios.post('https://lektur.kuyrek.com/signup', { name: user.name, email: user.email, password: user.password } ).then(res => res.data.token).catch(error => error),
        logIn: token =>
        axios.post('https://lektur.kuyrek.com/login', { email: token.email, password: token.password }).then(res => res.data.user),
        course: item =>
        axios.get('https://lektur.kuyrek.com/courses/all', 
        { 
            image: item.image, 
            title: item.title, 
            description: item.description, 
            category: item.category,

        }).then(res => res.data.user)
        
    }
};


// res.data.token
