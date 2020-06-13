import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Avatar, Container, CssBaseline, Typography } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import LoginForm from "../../components/LoginForm";
import { loginUser } from "../../../../actions/login_register";
import "./styles.scss";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    async handleSubmit(values) {
        const action = await loginUser(values);
        this.props.dispatch(action);
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
                    <LoginForm handleSubmit={this.handleSubmit} />
                </div>
            </Container>
        );
    }
}

LoginPage.propTypes = {};

export default connect(null, null)(LoginPage);
