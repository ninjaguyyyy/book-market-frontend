import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";

import ShopList from "./pages/ShopList";
import GuestLayout from "../../components/Layout/guest/GuestLayout.js";

function Shop(props) {
    const match = useRouteMatch();
    return (
        <GuestLayout>
            <Switch>
                <Route exact path={`${match.url}/`} component={ShopList} />
            </Switch>
        </GuestLayout>
    );
}

Shop.propTypes = {};

export default Shop;
