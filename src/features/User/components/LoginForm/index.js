import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Button, TextField, Grid } from "@material-ui/core";
import { Formik, Form, FastField } from "formik";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

import InputField from "../../../../components/custom-field/InputField";
import SelectField from "../../../../components/custom-field/SelectField";
import { TYPE_SIGN } from "../../../../constants/options";
import "./LoginForm.scss";

export default class LoginForm extends Component {
    static propTypes = {
        prop: PropTypes.func,
    };

    constructor(props) {
        super(props);
        this.initialValues = {
            email: "",
            password: "",
            type: "",
        };
        this.validationSchema = Yup.object().shape({
            email: Yup.string()
                .email("Không đúng định dạng của email.")
                .required("Vui lòng không để trống."),
            password: Yup.string().required("Vui lòng không để trống."),
            type: Yup.number().required("Vui lòng không để trống"),
        });
    }

    render() {
        return (
            <Formik
                initialValues={this.initialValues}
                validationSchema={this.validationSchema}
                onSubmit={() => console.log("data")}
            >
                {(formikProps) => {
                    // do something
                    const { values, errors, touched } = formikProps;
                    return (
                        <Form className="form login-form">
                            <FastField
                                category="text_sign"
                                name="email"
                                component={InputField}
                                label="Địa chỉ email"
                                type="text"
                            />
                            <FastField
                                category="text_sign"
                                name="password"
                                component={InputField}
                                label="Mật khẩu"
                                type="password"
                            />
                            <Grid container>
                                <Grid item xs>
                                    <FastField
                                        name="type"
                                        component={SelectField}
                                        label="Phân hệ"
                                        category="sign"
                                        options={TYPE_SIGN}
                                    />
                                </Grid>
                                <Grid item xs>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className="submit"
                                    >
                                        Xác nhận
                                    </Button>
                                </Grid>
                            </Grid>

                            <Grid container className="extra">
                                <Grid item xs>
                                    <Link
                                        to="/user/forgot"
                                        variant="body2"
                                        title="Bạn quên mật khẩu?"
                                    >
                                        <HelpOutlineIcon />
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link
                                        to="/user/register"
                                        className="redirect-register"
                                        variant="body2"
                                        title="Bạn chưa có tài khoản? Đăng ký ngay!"
                                    >
                                        <VpnKeyIcon />
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
