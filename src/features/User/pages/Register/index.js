import React from "react";
import PropTypes from "prop-types";
import { Avatar, Container, CssBaseline, Typography } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import RegisterForm from "../../components/RegisterForm";
import "./styles.scss";

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        // todo: get data
        // todo: call api
        // todo: notification
    }
    render() {
        return (
            <Container component="main" maxWidth="xs" className="register">
                <CssBaseline />
                <div className="paper">
                    <Avatar className="avatar">
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Đăng ký tài khoản
                    </Typography>
                    <RegisterForm handleSubmit={this.handleSubmit} />
                </div>
            </Container>
        );
    }
}

RegisterPage.propTypes = {};

export default RegisterPage;
