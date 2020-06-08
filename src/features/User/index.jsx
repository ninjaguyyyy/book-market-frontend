import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'

function User(props) {
    const match = useRouteMatch();
    console.log(match)
    return (
        <Switch>
            <Route exact path={`${match.url}/login`} component={LoginPage} />
            <Route exact path={`${match.url}/register`} component={RegisterPage} />
        </Switch>
    )
}

User.propTypes = {}

export default User

