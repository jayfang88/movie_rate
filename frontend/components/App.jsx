import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from '../components/navbar/navbar_container';
import SignupFormContainer from './session_forms/signup_form_container';
import LoginFormContainer from './session_forms/login_form_container';
import MovieIndexContainer from './movies/movie_index_container';

const App = () => (
    <div>
        <header>
            <NavBarContainer />
        </header>

        <Switch>
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <AuthRoute exact path='/signup' component={SignupFormContainer} />
            <Route exact path='/movies' component={MovieIndexContainer} />
        </Switch>
    </div>
);

export default App;