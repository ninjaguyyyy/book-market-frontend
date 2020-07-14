import { Avatar, Container, Typography } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../../../actions/login_register";
import userApi from "../../../../api/userApi";
import LoginForm from "../../components/LoginForm";
import "./styles.scss";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(values) {
        (async () => {
            try {
                const response = await userApi.login(values);
                let action = await loginUser(response);
                this.props.dispatch(action);
            } catch (error) {
                console.log(`failed post register as ${error}`);
            }
        })();
    }
    render() {
        return (
            <Container component="main" maxWidth="xs" className="login">
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
