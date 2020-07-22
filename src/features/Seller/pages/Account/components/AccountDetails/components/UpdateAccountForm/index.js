import React, { Component } from "react";
import { Button, Grid } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import InputField from "../../../../../../../../components/custom-field/InputField";
import SelectField from "../../../../../../../../components/custom-field/SelectField";
import { TYPE_SIGN } from "../../../../../../../../constants/options";
import "./index.scss";

class UpdateAccountForm extends Component {
    static propTypes = {
        prop: PropTypes.func,
    };

    constructor(props) {
        super(props);
        this.initialValues = {
            name: props.user.name,
            nameStore: props.user.name,
            email: props.user.name,
            address: props.user.address,
            phone: props.user.name,
        };
        this.validationSchema = Yup.object().shape({
            name: Yup.string().required("Vui lòng không để trống."),
            nameStore: Yup.string().required("Vui lòng không để trống."),
            email: Yup.string().required("Vui lòng không để trống."),
            address: Yup.string().required("Vui lòng không để trống."),
            phone: Yup.string().required("Vui lòng không để trống."),
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
                    return (
                        <Form className="form login-form">
                            <Grid container spacing={3}>
                                <Grid item md={6} xs={12}>
                                    <FastField
                                        category="text_thin"
                                        name="name"
                                        component={InputField}
                                        label="Tên tài khoản"
                                        type="text"
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <FastField
                                        category="text_thin"
                                        name="nameStore"
                                        component={InputField}
                                        label="Tên tài khoản"
                                        type="text"
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <FastField
                                        category="text_thin"
                                        name="email"
                                        component={InputField}
                                        label="Tên tài khoản"
                                        type="text"
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <FastField
                                        category="text_thin"
                                        name="username"
                                        component={InputField}
                                        label="Tên tài khoản"
                                        type="text"
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <FastField
                                        category="text_thin"
                                        name="phone"
                                        component={InputField}
                                        label="Tên tài khoản"
                                        type="text"
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <FastField
                                        category="text_thin"
                                        name="address"
                                        component={InputField}
                                        label="Tên tài khoản"
                                        type="text"
                                    />
                                </Grid>
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
export default connect(mapStateToProps)(UpdateAccountForm);
