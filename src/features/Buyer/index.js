import React from "react";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SettingsIcon from "@material-ui/icons/Settings";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import SellerLayout from "../../components/Layout/seller/SellerLayout";
import Account from "../Seller/pages/Account/Account";
import Setting from "../Seller/pages/Setting/Setting";

const pages = [
    {
        title: "Tài khoản",
        href: "/buyer/account",
        icon: <AccountBoxIcon />,
    },

    {
        title: "Cài đặt",
        href: "/buyer/setting",
        icon: <SettingsIcon />,
    },
];

function Buyer(props) {
    const match = useRouteMatch();
    return (
        <SellerLayout pages={pages}>
            <Switch>
                <Redirect exact from={match.url} to="/buyer/account" />

                <Route
                    exact
                    path={`${match.url}/account`}
                    component={Account}
                />
                <Route
                    exact
                    path={`${match.url}/setting`}
                    component={Setting}
                />
            </Switch>
        </SellerLayout>
    );
}

export default Buyer;
