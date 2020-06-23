import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";

import AccountProfile from "./components/AccountProfile/AccountProfile";
import AccountDetails from "./components/AccountDetails/AccountDetails";
import "./Account.scss";

const Account = () => {
    return (
        <div className="Account">
            <Grid container spacing={4}>
                <Grid item lg={4} md={6} xl={4} xs={12}>
                    <AccountProfile />
                </Grid>
                <Grid item lg={8} md={6} xl={8} xs={12}>
                    <AccountDetails />
                </Grid>
            </Grid>
        </div>
    );
};

export default Account;
