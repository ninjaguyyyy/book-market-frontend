import React from "react";
import { Redirect, Switch, useRouteMatch } from "react-router-dom";
import GuestLayout from "../../components/Layout/guest/GuestLayout.js";

function Home(props) {
    const match = useRouteMatch();
    return (
        <GuestLayout>
            <Switch>
                {/* <Route exact path={`${match.url}/`} component={HomePage} /> */}
                <Redirect exact from={match.url} to="/shop" />
            </Switch>
        </GuestLayout>
    );
}

Home.propTypes = {};

export default Home;
