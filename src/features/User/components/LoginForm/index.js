import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, TextField, Grid } from "@material-ui/core";

export default class LoginForm extends Component {
    static propTypes = {
        prop: PropTypes.func,
    };

    render() {
        return (
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
        );
    }
}
