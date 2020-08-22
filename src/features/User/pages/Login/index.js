import { Avatar, Container, Typography, Snackbar } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React from "react";
import Alert from "@material-ui/lab/Alert";
import { connect } from "react-redux";
import { loginUser } from "../../../../actions/user";
import userApi from "../../../../api/userApi";
import LoginForm from "../../components/LoginForm";
import { setSession } from "../../../../utils/auth";
import "./styles.scss";
import {Modal,Button} from "react-bootstrap"
import { makeStyles } from '@material-ui/core/styles';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openAlert: false,
            contentAlert: "",
            typeAlert: "",
            isloginFail:false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose=this.handleClose.bind(this)
    }
    handleClose(){
        this.setState({
            isloginFail:false   
        })
    }
    handleSubmit(values) {
        (async () => {
            try {
                const response = await userApi.login(values);
                let action = await loginUser(response);
                let resDispatch = this.props.dispatch(action);
                console.log(response);
                if(response.data.user.status==0) {
                    this.setState({
                        isloginFail:true
                    })
                    return
                }
                if (resDispatch.payload.success) {
                    setSession(
                        response.data.user.username,
                        response.data.accessToken,
                        response.data.user.role,
                        response.data.user.email,
                        response.data.user._id
                    );

                    if (response.data.user.role === 1) {
                        this.props.history.push("/shop");
                    }
                    if (response.data.user.role === 2) {
                        this.props.history.push("/seller/account");
                    }
                    if (response.data.user.role === 3) {
                        this.props.history.push("/admin");
                    }
                } else {
                    this.setState({
                        contentAlert: response.msg,
                        openAlert: true,
                        typeAlert: "error",
                    });
                }
            } catch (error) {
                console.log(`failed post register as ${error}`);
            }
        })();
    }
    render() {
        const {isloginFail}=this.state
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
                        severity={this.state.typeAlert}
                    >
                        {this.state.contentAlert}
                    </Alert>
                </Snackbar>
                <Modal show={isloginFail}>
                    <Modal.Header >
                        <Modal.Title>Đăng nhập thất bại!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Tài khoản của bạn đã bị cấm vì quản trị viên phát hiện vi phạm. Vui lòng liên hệ quản trị viên để được phục hồi tài khoản</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Đóng
                     </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        );
    }
}

LoginPage.propTypes = {};

export default connect(null, null)(LoginPage);
