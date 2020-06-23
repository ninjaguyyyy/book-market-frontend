import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";

import Account from "./pages/Account/Account";
import SellerLayout from "../../components/Layout/seller/SellerLayout";

function Seller(props) {
    const match = useRouteMatch();
    return (
        <SellerLayout>
            <Switch>
                <Redirect exact from={match.url} to="/seller/dashboard" />

                <Route
                    exact
                    path={`${match.url}/dashboard`}
                    component={Account}
                />
            </Switch>
        </SellerLayout>
    );
}

export default Seller;
