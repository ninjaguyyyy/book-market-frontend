import { Avatar, Container, Typography, Snackbar } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Alert from "@material-ui/lab/Alert";
import React from "react";
import { connect } from "react-redux";
import { registerUser } from "../../../../actions/login_register";
import RegisterForm from "../../components/RegisterForm";
import userApi from "../../../../api/userApi";
import "./styles.scss";

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openAlert: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(values) {
        (async () => {
            try {
                const response = await userApi.register(values);
                let action = await registerUser(response);
                let resDispatch = this.props.dispatch(action);
                if (resDispatch.payload.success) {
                    this.setState({ openAlert: true });
                    setTimeout(() => {
                        this.props.history.push("/user/login");
                    }, 3000);
                }
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
                <Snackbar
                    open={this.state.openAlert}
                    autoHideDuration={6000}
                    onClose={() => {
                        this.setState({ openAlert: false });
                    }}
                >
                    <Alert
                        onClose={() => {
                            this.setState({ openAlert: false });
                        }}
                        severity="success"
                    >
                        Đã đăng ký thành công. Chuyển sang Đăng nhập sau vài
                        giây.
                    </Alert>
                </Snackbar>
            </Container>
        );
    }
}

RegisterPage.propTypes = {};

export default connect(null, null)(RegisterPage);
