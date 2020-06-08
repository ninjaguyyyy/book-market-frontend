import React from "react";
import PropTypes from "prop-types";
import { Avatar, Container, CssBaseline, Typography } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import LoginForm from "../../components/LoginForm";
import "./styles.scss";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log("data");
        // todo: get data
        // todo: call api
        // todo: notification
    }
    render() {
        return (
            <Container component="main" maxWidth="xs" className="login">
                <CssBaseline />
                <div className="paper">
                    <Avatar className="avatar">
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Đăng nhập
                    </Typography>
                    <LoginForm />
                </div>
            </Container>
        );
    }
}

LoginPage.propTypes = {};

export default LoginPage;
