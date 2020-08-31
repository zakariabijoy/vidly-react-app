import React, { useState, useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "./components/movies";
import Cutomers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import Logout from './components/logout';
import ProtectedRoute from "./components/common/protectedRoute";
import authService from "./services/authService";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const user = authService.getCurrentUser();
    setUser(user);

  }, []);

  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar user={user} />
      <main className="container">
        <Switch>
          <Route path="/register" component={RegisterForm}></Route>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/logout" component={Logout}></Route>
          <ProtectedRoute path="/movies/:id" component={MovieForm} />
          <Route path="/movies" render={props => <Movies {...props} user={user} />}></Route>
          <Route path="/customers" component={Cutomers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment >
  );
}

export default App;
