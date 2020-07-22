import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    Snackbar,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useState } from "react";
import UpdateAccountForm from "./components/UpdateAccountForm";

const useStyles = makeStyles(() => ({
    root: {},
}));

const AccountDetails = (props) => {
    const { className, user, actions, ...rest } = props;

    const [openAlertUpdated, setOpenAlertUpdated] = useState(false);

    const classes = useStyles();

    const [values, setValues] = useState({
        firstName: "Shen",
        lastName: "Zhi",
        email: "shen.zhi@devias.io",
        phone: "",
        state: "Alabama",
        country: "USA",
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const states = [
        {
            value: "alabama",
            label: "Alabama",
        },
        {
            value: "new-york",
            label: "New York",
        },
        {
            value: "san-francisco",
            label: "San Francisco",
        },
    ];

    function handleUpdate() {
        setOpenAlertUpdated(true);
        actions.handleUpdate();
    }

    return (
        <Card {...rest} className={clsx(classes.root, className)}>
            <CardHeader
                subheader="Người dùng có thể cập nhật thông tin của mình"
                title="Thông tin cửa hàng"
            />
            <Divider />
            <CardContent>
                <UpdateAccountForm user={user} />
            </CardContent>
            <Divider />
            <CardActions style={{ display: "flex", justifyContent: "center" }}>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={handleUpdate}
                >
                    Cập nhật
                </Button>
            </CardActions>
            <Snackbar
                open={openAlertUpdated}
                autoHideDuration={6000}
                onClose={() => setOpenAlertUpdated(false)}
            >
                <Alert
                    onClose={() => setOpenAlertUpdated(false)}
                    severity="success"
                >
                    Đã cập nhật thành công
                </Alert>
            </Snackbar>
        </Card>
    );
};

AccountDetails.propTypes = {
    className: PropTypes.string,
};

export default AccountDetails;
