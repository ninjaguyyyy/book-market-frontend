import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import GuestLayout from "../../components/Layout/guest/GuestLayout.js";
import "./index.scss";
import ShopDetail from "./pages/ShopDetail";
import ShopList from "./pages/ShopList";
import ShopStore from "./pages/ShopStore";
import Cart from "./pages/Cart";
import PrivateRoute from "../../components/Common/PrivateRoute";

function Shop(props) {
    const match = useRouteMatch();
    return (
        <GuestLayout>
            <Switch>
                <Route exact path={`${match.url}/`} component={ShopList} />
                <Route
                    path={`${match.url}/detail/:id_book`}
                    component={ShopDetail}
                />
                <Route
                    exact
                    path={`${match.url}/store/:id_store`}
                    component={ShopStore}
                />
                <PrivateRoute path={`${match.url}/cart`} component={Cart} />
            </Switch>
        </GuestLayout>
    );
}

Shop.propTypes = {};

export default Shop;
