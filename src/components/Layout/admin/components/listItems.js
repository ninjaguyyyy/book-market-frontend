import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BarChartIcon from "@material-ui/icons/BarChart";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React from "react";
import { NavLink } from "react-router-dom";
import "./listItems.scss";

export const mainListItems = (
    <div>
        <NavLink
            className="item-sidebar"
            to="/admin/customers"
            activeClassName="active-menu"
        >
            <ListItem button>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Người mua" />
            </ListItem>
        </NavLink>

        <NavLink
            to="/admin/sellers"
            className="item-sidebar"
            activeClassName="active-menu"
        >
            <ListItem button>
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Người bán" />
            </ListItem>
        </NavLink>

        <NavLink
            to="/admin/orders"
            className="item-sidebar"
            activeClassName="active-menu"
        >
            <ListItem button>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Đơn hàng" />
            </ListItem>
        </NavLink>
        <NavLink
            to="/admin/aa"
            className="item-sidebar"
            activeClassName="active-menu"
        >
            <ListItem button>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Khác" />
            </ListItem>
        </NavLink>
    </div>
);
