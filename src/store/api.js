import axios from 'axios';

export default {
    user: {
        
        // STUDENT SIGN UP
        signUp: user =>
            axios.post('https://lektur.kuyrek.com/signup', 
            { 
                name: user.name, 
                email: user.email, 
                password: user.password 
            } ).then(res => res.data.status).catch(error => error),
        
        //TEACHER SIGN UP
        teacherSignUp: teacher =>
            axios.post('https://lektur.kuyrek.com/signupTeacher',
            {
                name: teacher.name,
                email: teacher.email,
                password: teacher.password
            }).then(res => res.data.status).catch(error => error),

        //USER LOGIN
        logIn: credentials =>
            axios.post('https://lektur.kuyrek.com/login', { email: credentials.email, password: credentials.password }).then(res => res.data.token).then((token)=> {
            setTimeout(console.log('masuk'), 500)
            localStorage.setItem('token', token);
            window.location.href ="/"
            })
            .catch(error => error),

        getData: () =>
            axios.get('https://lektur.kuyrek.com/userProfile', 
            { 
                'headers': 
                { 'Authorization': `Bearer ${localStorage.getItem('token')}`
            }}).then(res => res.data.data),

        // COURSES
        getCourse: () =>
            axios.get('https://lektur.kuyrek.com/courses/all' ).then(res => res.data.data),

        // COURSES CATEGORY
        getCourseCategory: getCategory =>
            axios.get(`https://lektur.kuyrek.com/courses/find/byCategory?key=${getCategory}` ).then(res => res.data.data),
        
        // GET COURSES
        getCourseDataDetail: getCoursesDetail =>
            axios.get(`https://lektur.kuyrek.com/courses/${getCoursesDetail}` ).then(res => res.data.data).catch(error => error.message),
        
        //GET LESSONS
        getLesson: getLessonDetail =>
            axios.get(`https://lektur.kuyrek.com/lessons/byCourse/${getLessonDetail}`).then(res => res.data.data).catch(error => error.message),

    }
        // getCourseDataDetail: getCoursesDetail =>
        //     axios.get(`https://lektur.kuyrek.com/courses/${getCoursesDetail}` ).then(res => res.data.data).then((course)=> 
        //     {
        //         window.location.href =`/Detail/${course.id}`
        //     }).catch(error =>error.message)
        // }
};


// res.data.token
