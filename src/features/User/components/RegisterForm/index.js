import React from "react";
import PropTypes from "prop-types";
import { render } from "@testing-library/react";
import { Link } from "react-router-dom";
import { Formik, Form, FastField } from "formik";
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
            fname: "",
            lname: "",
            type: "",
            email: "",
            password: "",
        };
        this.validationSchema = Yup.object().shape({
            fname: Yup.string().required("Vui lòng không để trống."),
            lname: Yup.string().required("Vui lòng không để trống."),
            email: Yup.string()
                .email("Không đúng định dạng của email.")
                .required("Vui lòng không để trống."),
            password: Yup.string().required("Vui lòng không để trống."),
            type: Yup.number().required("Vui lòng không để trống"),
        });
    }
    render() {
        const { handleSubmit } = this.props;

        return (
            <Formik
                initialValues={this.initialValues}
                validationSchema={this.validationSchema}
                onSubmit={() => console.log("submit")}
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
                                        name="fname"
                                        component={InputField}
                                        label="Họ"
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
                                        name="lname"
                                        component={InputField}
                                        label="Tên"
                                        type="text"
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
                                        name="password"
                                        component={InputField}
                                        label="Mật khẩu"
                                        type="password"
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
                            <Grid container justify="flex-end">
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

export default RegisterForm;
