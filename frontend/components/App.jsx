import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from '../components/splash/splash_container';
import NavBarContainer from '../components/navbar/navbar_container';
import SignupFormContainer from './session_forms/signup_form_container';
import LoginFormContainer from './session_forms/login_form_container';
import MovieIndexContainer from './movies/movie_index_container';
import MovieContainer from './movies/movie_container'
import Modal from './modal/modal';

const App = () => (
    <div>
        <Modal />
        <header>
            <NavBarContainer />
        </header>

        <Switch>
            <Route exact path='/' component={SplashContainer} />
            <Route exact path='/movies' component={MovieIndexContainer} />
            <Route exact path='/m/:movieId/' component={MovieContainer} />
        </Switch>
    </div>
);

export default App;