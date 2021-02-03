import defaultAxios from 'axios';

const axios = defaultAxios.create({
    baseURL: 'https://lektur.kuyrek.com/'
});

export const getAllCourses = async () => {
    try {
        const courses = await axios.get('courses/all')
        return courses.data.data
    } catch (err) {
        return console.error(err)
    }
}

export const getCoursesCategory = async (category) => {
    try {
        const coursesCategory = await axios.get(`courses/find/byCategory?key=${category}`)
        return coursesCategory.data.data
    } catch (err) {
        return console.error(err)
    }
}