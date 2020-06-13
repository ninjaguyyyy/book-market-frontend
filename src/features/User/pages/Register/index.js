import React from "react";
import { connect } from "react-redux";
import { Avatar, Container, CssBaseline, Typography } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import RegisterForm from "../../components/RegisterForm";
import { registerUser } from "../../../../actions/login_register";
import "./styles.scss";

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    async handleSubmit(values) {
        let action = await registerUser(values);
        this.props.dispatch(action);
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

export default connect(null, null)(RegisterPage);
