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

import InputField from "../../../../components/custom-field/InputField";

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.initialValues = {
            fname: "",
            lname: "",
            type: "",
        };
    }
    render() {
        const { handleSubmit } = this.props;

        return (
            <Formik initialValues={this.initialValues}>
                {(formikProps) => {
                    // do something
                    const { values, errors, touched } = formikProps;
                    console.log(values);
                    return (
                        <Form className="form">
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <FastField
                                        category="text_sign"
                                        name="fname"
                                        component={InputField}
                                        label="Họ"
                                        type="text"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FastField
                                        category="text_sign"
                                        name="lname"
                                        component={InputField}
                                        label="Tên"
                                        type="text"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FastField
                                        category="text_sign"
                                        name="email"
                                        component={InputField}
                                        label="Địa chỉ email"
                                        type="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FastField
                                        category="text_sign"
                                        name="password"
                                        component={InputField}
                                        label="Mật khẩu"
                                        type="password"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Xác nhận
                            </Button>
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
