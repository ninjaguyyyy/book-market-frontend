import { Avatar, Container, Typography } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React from "react";
import { connect } from "react-redux";
import { registerUser } from "../../../../actions/login_register";
import RegisterForm from "../../components/RegisterForm";
import userApi from "../../../../api/userApi";
import "./styles.scss";

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(values) {
        (async () => {
            try {
                const response = await userApi.register(values);
                let action = await registerUser(response);
                this.props.dispatch(action);
            } catch (error) {
                console.log(`failed post register as ${error}`);
            }
        })();
    }
    render() {
        return (
            <Container component="main" maxWidth="xs" className="register">
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
