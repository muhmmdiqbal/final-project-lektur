import { 
    Switch,
    Route,
  } from 'react-router-dom';
import Home from '../page/Home';
import Teacher from '../page/Teacher';
import Detail from '../page/Detail';
import SignUp from '../page/SignUp';
import Login from '../page/Login'
import NavCourse from '../page/NavCourse'
import TeacherDashboard from '../page/TeacherDashboard'
import Course from '../page/Course'
import Assesment from '../page/Assesment'
import NewLesson from '../page/NewLesson'
import Students from '../page/Students'
import Filled from '../page/Filled'
import StudentDashboard from '../page/StudentDashboard'
import StudentAssesment from '../page/StudentAssesment'
import SearchResult from '../components/SearchResult'
import Category from '../page/Category';
import haha from '../components/assets/haha.jpg';
import {Image} from 'react-bootstrap'


const routes = () => {
    return (
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Teacher' component={Teacher} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/SignUp' component={SignUp} />
        <Route exact path='/Detail/:id' component={Detail} />
        <Route exact path='/TeacherDashboard' component={TeacherDashboard} />
        <Route exact path='/NavCourse' component={NavCourse} />
        <Route exact path='/Course' component={Course} />
        <Route exact path='/Assesment' component={Assesment} />
        <Route exact path='/Students' component={Students} />
        <Route exact path='/NewLesson' component={NewLesson} />
        <Route exact path='/Filled' component={Filled} />
        <Route exact path='/StudentDashboard' component={StudentDashboard} />
        <Route exact path='/StudentAssesment' component={StudentAssesment} />
        <Route exact path='/SearchResult' component={SearchResult} />
        <Route exact path='/Category/:category' component={Category} />
        <Route render={function() {
          return (
            <div>
            <br />
            <br />
            <h1 className="notFound">Yaaah Not Found!</h1>
            <Image className="notFound" src={haha}/>
            <br />
            <br />
            <br />
            </div>
          )
        }} />
      </Switch>
    );
  };

export default routes