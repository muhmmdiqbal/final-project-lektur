import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Teacher from "../components/Teacher";



const routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Login" exact>
          <Login />
        </Route>
        <Route path="/SignUp" exact>
          <SignUp />
        </Route>
        <Route path="/Teacher" exact>
          <Teacher />
        </Route>
      </Switch>
    </Router>
  );
};

export default routes;