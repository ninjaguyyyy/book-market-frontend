import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Formik, Form, FastField } from "formik";
import ErrorIcon from "@material-ui/icons/Error";
import {
    Button,
    TextField,
    FormControlLabel,
    Checkbox,
    Grid,
    Box,
} from "@material-ui/core";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import * as Yup from "yup";

import InputField from "../../../../components/custom-field/InputField";
import SelectField from "../../../../components/custom-field/SelectField";
import { TYPE_SIGN } from "../../../../constants/options";
import "./RegisterForm.scss";

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.initialValues = {
            username: "",
            password: "",
            email: "",
            address: "",
            phone: "",
            type: 1,
        };
        this.validationSchema = Yup.object().shape({
            username: Yup.string().required("Vui lòng không để trống."),
            password: Yup.string().required("Vui lòng không để trống."),
            email: Yup.string()
                .email("Không đúng định dạng của email.")
                .required("Vui lòng không để trống."),
            address: Yup.string().required("Vui lòng không để trống."),
            phone: Yup.number().required("Vui lòng không để trống."),
            type: Yup.number().required("Vui lòng không để trống"),
        });
    }
    render() {
        const { handleSubmit } = this.props;
        console.log(this.props);
        return (
            <Formik
                initialValues={this.initialValues}
                validationSchema={this.validationSchema}
                onSubmit={handleSubmit}
            >
                {(formikProps) => {
                    // do something
                    const { values, errors, touched } = formikProps;
                    return (
                        <Form className="form register-form">
                            <Grid container spacing={2}>
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    className="form-control"
                                >
                                    <FastField
                                        category="text_sign"
                                        name="username"
                                        component={InputField}
                                        label="Tên đăng nhập"
                                        type="text"
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    className="form-control"
                                >
                                    <FastField
                                        category="text_sign"
                                        name="password"
                                        component={InputField}
                                        label="Mật khẩu"
                                        type="password"
                                    />
                                </Grid>
                                <Grid item xs={12} className="form-control">
                                    <FastField
                                        category="text_sign"
                                        name="email"
                                        component={InputField}
                                        label="Địa chỉ email"
                                        type="email"
                                    />
                                </Grid>
                                <Grid item xs={12} className="form-control">
                                    <FastField
                                        category="text_sign"
                                        name="address"
                                        component={InputField}
                                        label="Địa chỉ"
                                        type="text"
                                    />
                                </Grid>
                                <Grid item xs={12} className="form-control">
                                    <FastField
                                        category="text_sign"
                                        name="phone"
                                        component={InputField}
                                        label="Số điện thoại"
                                        type="number"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container className="wrapper-submit">
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
                                <Grid item>
                                    <Link
                                        to="/user/login"
                                        variant="body2"
                                        title="Đăng nhập ngay!"
                                    >
                                        <LockOpenIcon />
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

RegisterForm.propTypes = {
    handleSubmit: PropTypes.func,
};
const mapStateToProps = (state) => {
    return {
        ...state.login_register.register,
    };
};
export default connect(mapStateToProps)(RegisterForm);
