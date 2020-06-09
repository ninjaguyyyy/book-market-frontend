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
        } = this.props;
        const { name, value, onChange, onBlur } = field;
        return (
            <div>
                {category === "text_sign" && (
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        type={type}
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