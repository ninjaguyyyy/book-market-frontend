import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, TextField, Grid } from "@material-ui/core";
import { Formik, Form, FastField } from "formik";

import InputField from "../../../../components/custom-field/InputField";
import SelectField from "../../../../components/custom-field/SelectField";
import { TYPE_SIGN } from "../../../../constants/options";

export default class LoginForm extends Component {
    static propTypes = {
        prop: PropTypes.func,
    };

    constructor(props) {
        super(props);
        this.initialValues = {
            email: "",
            type: "",
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
                                component={InputField}
                                label="Địa chỉ email"
                                placeholder="Email"
                                type="text_sign"
                            />
                            <FastField
                                name="type"
                                component={SelectField}
                                label="Phân hệ"
                                placeholder="Email"
                                type="sign"
                                options={TYPE_SIGN}
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
