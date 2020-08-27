import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SettingsIcon from "@material-ui/icons/Settings";
import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import SellerLayout from "../../components/Layout/seller/SellerLayout";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Account from "../Seller/pages/Account/Account";
import Orders from "./pages/Orders";
import Favorites from "./pages/Favorites";
import Setting from "../Seller/pages/Setting/Setting";

const pages = [
    {
        title: "Tài khoản",
        href: "/buyer/account",
        icon: <AccountBoxIcon />,
    },
    {
        title: "Đơn hàng của tôi",
        href: "/buyer/orders",
        icon: <ShoppingBasketIcon />,
    },
    {
        title: "Danh sach yêu thích",
        href: "/buyer/favorites",
        icon: <FavoriteIcon />,
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
                <Route exact path={`${match.url}/orders`} component={Orders} />
                <Route
                    exact
                    path={`${match.url}/favorites`}
                    component={Favorites}
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
