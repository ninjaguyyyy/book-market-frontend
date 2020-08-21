import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";

import Customers from "./pages/Customers/Customers";
import Sellers from "./pages/Sellers";
import Orders from "./pages/Orders/Orders";
import AdminLayout from "../../components/Layout/admin/AdminLayout";

export default function Admin(props) {
    const match = useRouteMatch();
    return (
        <AdminLayout>
            <Switch>
                <Redirect exact from={match.url} to="/admin/customers" />

                <Route
                    exact
                    path={`${match.url}/customers`}
                    component={Sellers}
                />
                <Route
                    exact
                    path={`${match.url}/sellers`}
                    component={Customers}
                />
                <Route exact path={`${match.url}/orders`} component={Orders} />
                <Route
                    exact
                    path={`${match.url}/orders`}
                    component={Customers}
                />
            </Switch>
        </AdminLayout>
    );
}
