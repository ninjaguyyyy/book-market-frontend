import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, TextField, Grid } from "@material-ui/core";
import { Formik, Form, FastField } from "formik";

import InputFieldSign from "../../../../components/custom-field/Sign/InputField";

export default class LoginForm extends Component {
    static propTypes = {
        prop: PropTypes.func,
    };

    constructor(props) {
        super(props);
        this.initialValues = {
            email: "",
        };
    }

    render() {
        return (
            <Formik initialValues={this.initialValues}>
                {(formikProps) => {
                    // do something
                    const { values, errors, touched } = formikProps;
                    console.log(values);
                    return (
                        <Form className="form">
                            <FastField
                                name="email"
                                component={InputFieldSign}
                                label="Địa chỉ email"
                                placeholder="Email"
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
                        </Form>
                    );
                }}
            </Formik>
        );
    }
}
