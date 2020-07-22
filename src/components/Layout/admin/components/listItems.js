import React from "react";
import { Link, NavLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";

import "./listItems.scss";

export const mainListItems = (
    <div>
        <NavLink
            className="item-sidebar"
            to="/admin/buyers"
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
            to="/admin/orders"
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
            to="/admin/customers"
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
