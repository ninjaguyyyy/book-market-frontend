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
        category: PropTypes.string,
        row: PropTypes.number,
    };

    static defaultProps = {
        category: "text_sign",
        type: "text",
        label: "",
        placeholder: "",
        disable: false,
    };

    render() {
        const {
            field,
            form,
            type,
            label,
            placeholder,
            disable,
            category,
            row,
        } = this.props;
        const { name, value, onChange, onBlur } = field;
        const { errors, touched } = form;
        const showError = errors[name] && touched[name];
        return (
            <div>
                {category === "text_sign" && (
                    <TextField
                        variant="outlined"
                        margin="normal"
                        type={type}
                        fullWidth
                        id={name}
                        label={label}
                        disabled={disable}
                        {...field}
                        error={showError}
                        helperText={showError ? errors[name] : ""}
                    />
                )}
                {category === "text_thin" && (
                    <TextField
                        id={name}
                        type={type}
                        fullWidth
                        label={label}
                        margin="dense"
                        disabled={disable}
                        variant="outlined"
                        {...field}
                        error={showError}
                        helperText={showError ? errors[name] : ""}
                    />
                )}
                {category === "multiple" && (
                    <TextField
                        id="outlined-multiline-static"
                        label={label}
                        multiline
                        rows={row}
                        fullWidth
                        id={name}
                        variant="outlined"
                        {...field}
                        error={showError}
                        helperText={showError ? errors[name] : ""}
                    />
                )}
            </div>
        );
    }
}
