import { Avatar, Container, Typography, Snackbar } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React from "react";
import Alert from "@material-ui/lab/Alert";
import { connect } from "react-redux";
import { loginUser } from "../../../../actions/login_register";
import userApi from "../../../../api/userApi";
import LoginForm from "../../components/LoginForm";
import "./styles.scss";

class LoginPage extends React.Component {
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
                const response = await userApi.login(values);
                let action = await loginUser(response);
                let resDispatch = this.props.dispatch(action);
                if (resDispatch.payload.success) {
                    this.setState({ openAlert: true });
                    setTimeout(() => {
                        this.props.history.push("/shop/cart");
                    }, 3000);
                }
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
                        Đã đăng nhập thành công. Chuyển sang Giỏ hàng sau vài
                        giây.
                    </Alert>
                </Snackbar>
            </Container>
        );
    }
}

LoginPage.propTypes = {};

export default connect(null, null)(LoginPage);
