import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SettingsIcon from "@material-ui/icons/Settings";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Account from "./pages/Account/Account";
import Orders from "./pages/Orders/Orders";
import Books from "./pages/Books/Books";
import Setting from "./pages/Setting/Setting";
import SellerLayout from "../../components/Layout/seller/SellerLayout";

const pages = [
    {
        title: "Tài khoản",
        href: "/seller/account",
        icon: <AccountBoxIcon />,
    },
    {
        title: "Đơn hàng",
        href: "/seller/orders",
        icon: <ShoppingCartIcon />,
    },
    {
        title: "Sách của tôi",
        href: "/seller/books",
        icon: <MenuBookIcon />,
    },
    {
        title: "Cài đặt",
        href: "/seller/setting",
        icon: <SettingsIcon />,
    },
];

function Seller(props) {
    const match = useRouteMatch();
    return (
        <SellerLayout pages={pages}>
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
