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
    const [openModal, setOpenModal] = useState(false);
    const [files, setFiles] = useState([]);

    let user = { ...store.getState().user.login.user };

    console.log(user);
    function handleUploadAvatar() {
        console.log("api upload avatar");
    }

    function handleRemoveAvatar() {
        console.log("api remove avatar");
    }

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

    function receiveFile(files) {
        setFiles(files);
        console.log(files);
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
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                className="Modal"
            >
                <DraggableUploader
                    files={receiveFile}
                    title="Chọn ảnh chụp sách"
                />
            </Modal>
        </div>
    );
};

export default Account;
