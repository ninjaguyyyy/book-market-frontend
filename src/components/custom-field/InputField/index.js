import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, TextField, Grid } from "@material-ui/core";

export default class InputField extends Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        field: PropTypes.object.isRequired,
        form: PropTypes.object.isRequired,

        type: PropTypes.string,
        label: PropTypes.string,
        placeholder: PropTypes.string,
        disable: PropTypes.bool,
    };

    static defaultProps = {
        type: "text_sign",
        label: "",
        placeholder: "",
        disable: false,
    };

    render() {
        const { field, form, type, label, placeholder, disable } = this.props;
        const { name, value, onChange, onBlur } = field;
        return (
            <div>
                {type === "text_sign" && (
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id={name}
                        label={label}
                        autoComplete="email"
                        autoFocus
                        disabled={disable}
                        {...field}
                    />
                )}
            </div>
        );
    }
}
