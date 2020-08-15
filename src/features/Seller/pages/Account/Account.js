import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import { Grid, Snackbar, Modal } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { useDispatch, useStore } from "react-redux";

import AccountProfile from "./components/AccountProfile/AccountProfile";
import AccountDetails from "./components/AccountDetails/AccountDetails";
import userApi from "../../../../api/userApi";
import DraggableUploader from "../../../../components/imageUploader/DraggableUploader";
import { updateUser } from "../../../../actions/user";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4),
    },
}));

const Account = (props) => {
    const dispatch = useDispatch();
    const store = useStore();
    const classes = useStyles();

    const [openAlert, setOpenAlert] = useState(false);

    let user = { ...store.getState().user.login.user };

    console.log(user);

    function handleSubmit(values) {
        (async () => {
            try {
                const response = await userApi.update(values);
                let action = await updateUser(response);
                let resDispatch = dispatch(action);
                if (resDispatch.payload.success) {
                    setOpenAlert(true);
                    setTimeout(() => {
                        user = { ...user };
                    }, 3000);
                }
            } catch (error) {
                console.log(`failed post register as ${error}`);
            }
        })();
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item lg={4} md={6} xl={4} xs={12}>
                    <AccountProfile user={user} />
                </Grid>
                <Grid item lg={8} md={6} xl={8} xs={12}>
                    <AccountDetails user={user} handleSubmit={handleSubmit} />
                </Grid>
            </Grid>
            <Snackbar
                open={openAlert}
                autoHideDuration={6000}
                onClose={() => setOpenAlert(false)}
            >
                <Alert onClose={() => setOpenAlert(false)} severity="success">
                    Đã đăng nhập thành công. Chuyển sang Giỏ hàng sau vài giây.
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Account;
