import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";

import AccountProfile from "./components/AccountProfile/AccountProfile";
import AccountDetails from "./components/AccountDetails/AccountDetails";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4),
    },
}));

const Account = (props) => {
    const classes = useStyles();
    const { user } = props;

    function handleUploadAvatar() {
        console.log("api upload avatar");
    }

    function handleRemoveAvatar() {
        console.log("api remove avatar");
    }

    function handleUpdate() {
        console.log("api update");
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item lg={4} md={6} xl={4} xs={12}>
                    <AccountProfile
                        user={user}
                        actions={{ handleUploadAvatar, handleRemoveAvatar }}
                    />
                </Grid>
                <Grid item lg={8} md={6} xl={8} xs={12}>
                    <AccountDetails user={user} actions={{ handleUpdate }} />
                </Grid>
            </Grid>
        </div>
    );
};

function mapStateToProps(state) {
    return { ...state.login_register.login };
}

export default connect(mapStateToProps)(Account);
