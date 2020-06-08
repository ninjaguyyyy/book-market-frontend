import React from "react";
import PropTypes from "prop-types";
import {
    Avatar,
    Button,
    Container,
    CssBaseline,
    Typography,
    TextField,
    FormControlLabel,
    Checkbox,
    Grid,
    Box,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link } from "react-router-dom";

import Copyright from "../../../../components/Copyright";
import "./styles.scss";

function LoginPage(props) {
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
                <form className="form" noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Địa chỉ email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Mật khẩu"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="submit"
                    >
                        Xác nhận
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Quên mật khẩu?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/user/register" variant="body2">
                                {"Bạn chưa có tài khoản? Đăng ký"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

LoginPage.propTypes = {};

export default LoginPage;
