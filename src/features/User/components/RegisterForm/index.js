import React from "react";
import PropTypes from "prop-types";
import { render } from "@testing-library/react";
import { Link } from "react-router-dom";
import {
    Button,
    TextField,
    FormControlLabel,
    Checkbox,
    Grid,
    Box,
} from "@material-ui/core";

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { handleSubmit } = this.props;

        return (
            <form className="form" noValidate onSubmit={this.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="fname"
                            name="firstName"
                            variant="outlined"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="lname"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
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
                    Sign Up
                </Button>
                <Grid container justify="flex-end">
                    <Grid item>
                        <Link to="/user/login" variant="body2">
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>
            </form>
        );
    }
}

RegisterForm.propTypes = {
    handleSubmit: PropTypes.func,
};

export default RegisterForm;
