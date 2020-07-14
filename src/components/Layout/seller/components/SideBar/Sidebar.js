import { Divider, Drawer } from "@material-ui/core";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import SettingsIcon from "@material-ui/icons/Settings";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import Profile from "./components/Profile/Profile";
import SidebarNav from "./components/SidebarNav/SidebarNav";

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: 240,
        [theme.breakpoints.up("lg")]: {
            marginTop: 64,
            height: "calc(100% - 64px)",
        },
    },
    root: {
        backgroundColor: theme.palette.white,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: theme.spacing(2),
    },
    divider: {
        margin: theme.spacing(2, 0),
    },
    nav: {
        marginBottom: theme.spacing(2),
    },
}));

const Sidebar = (props) => {
    const { open, variant, onClose, className, ...rest } = props;

    const classes = useStyles();

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

    return (
        <Drawer
            anchor="left"
            classes={{ paper: classes.drawer }}
            onClose={onClose}
            open={open}
            variant={variant}
        >
            <div {...rest} className={clsx(classes.root, className)}>
                <Profile />
                <Divider className={classes.divider} />
                <SidebarNav className={classes.nav} pages={pages} />
            </div>
        </Drawer>
    );
};

Sidebar.propTypes = {
    className: PropTypes.string,
    onClose: PropTypes.func,
    open: PropTypes.bool.isRequired,
    variant: PropTypes.string.isRequired,
};

export default Sidebar;
