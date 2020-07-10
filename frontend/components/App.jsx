import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBarContainer from '../components/navbar/navbar_container';
import SignupFormContainer from './session_forms/signup_form_container';
import LoginFormContainer from './session_forms/login_form_container';

const App = () => (
    <div>
        <header>
            <NavBarContainer />
        </header>

        <Switch>
            <Route exact path='/login' component={LoginFormContainer} />
            <Route exact path='/signup' component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;