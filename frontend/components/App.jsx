import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from '../components/navbar/navbar_container';
import SignupFormContainer from './session_forms/signup_form_container';
import LoginFormContainer from './session_forms/login_form_container';

const App = () => (
    <div>
        <header>
            <NavBarContainer />
        </header>

        <Switch>
            <AuthRoute path='/login' component={LoginFormContainer} />
            <AuthRoute path='/signup' component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;