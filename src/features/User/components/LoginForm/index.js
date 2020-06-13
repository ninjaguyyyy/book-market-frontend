import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { connect } from "react-redux";
import { Button, TextField, Grid } from "@material-ui/core";
import { Formik, Form, FastField } from "formik";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import ErrorIcon from "@material-ui/icons/Error";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

import InputField from "../../../../components/custom-field/InputField";
import SelectField from "../../../../components/custom-field/SelectField";
import { TYPE_SIGN } from "../../../../constants/options";
import "./LoginForm.scss";

class LoginForm extends Component {
    static propTypes = {
        prop: PropTypes.func,
    };

    constructor(props) {
        super(props);
        this.initialValues = {
            username: "",
            password: "",
            type: 1,
        };
        this.validationSchema = Yup.object().shape({
            username: Yup.string().required("Vui lòng không để trống."),
            password: Yup.string().required("Vui lòng không để trống."),
            type: Yup.number().required("Vui lòng không để trống"),
        });
    }

    render() {
        return (
            <Formik
                initialValues={this.initialValues}
                validationSchema={this.validationSchema}
                onSubmit={this.props.handleSubmit}
            >
                {(formikProps) => {
                    // do something
                    const { values, errors, touched } = formikProps;
                    return (
                        <Form className="form login-form">
                            <FastField
                                category="text_sign"
                                name="username"
                                component={InputField}
                                label="Tên tài khoản"
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

                            <Grid
                                container
                                justify={
                                    this.props.success === false
                                        ? "space-between"
                                        : "flex-end"
                                }
                            >
                                {this.props.success === false && (
                                    <Grid item className="err-wrapper">
                                        <ErrorIcon />{" "}
                                        <span className="err-msg">
                                            {this.props.msg}
                                        </span>
                                    </Grid>
                                )}
                                <div className="extra">
                                    <Grid item xs className="item">
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
                                </div>
                            </Grid>
                        </Form>
                    );
                }}
            </Formik>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        ...state.login_register.login,
    };
};
export default connect(mapStateToProps)(LoginForm);
