import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import GuestLayout from "../../components/Layout/guest/GuestLayout.js";
import "./index.scss";
import ShopDetail from "./pages/ShopDetail";
import ShopList from "./pages/ShopList";

function Shop(props) {
    const match = useRouteMatch();
    return (
        <GuestLayout>
            <Switch>
                <Route exact path={`${match.url}/`} component={ShopList} />
                <Route
                    exact
                    path={`${match.url}/detail`}
                    component={ShopDetail}
                />
            </Switch>
        </GuestLayout>
    );
}

Shop.propTypes = {};

export default Shop;
