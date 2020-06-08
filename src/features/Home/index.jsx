import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import HomePage from './pages/Home'

function Home(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${match.url}/`} component={HomePage} />
        </Switch>
    )
}

Home.propTypes = {

}

export default Home

