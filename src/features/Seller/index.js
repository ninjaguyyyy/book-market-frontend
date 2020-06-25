import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";

import Account from "./pages/Account/Account";
import Orders from "./pages/Orders/Orders";
import Books from "./pages/Books/Books";
import Setting from "./pages/Setting/Setting";
import SellerLayout from "../../components/Layout/seller/SellerLayout";

function Seller(props) {
    const match = useRouteMatch();
    return (
        <SellerLayout>
            <Switch>
                <Redirect exact from={match.url} to="/seller/account" />

                <Route
                    exact
                    path={`${match.url}/account`}
                    component={Account}
                />
                <Route exact path={`${match.url}/orders`} component={Orders} />
                <Route exact path={`${match.url}/books`} component={Books} />
                <Route
                    exact
                    path={`${match.url}/setting`}
                    component={Setting}
                />
            </Switch>
        </SellerLayout>
    );
}

export default Seller;
