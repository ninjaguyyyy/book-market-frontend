import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

import "./SelectField.scss";

export default class SelectField extends Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        field: PropTypes.object.isRequired,
        form: PropTypes.object.isRequired,

        category: PropTypes.string,
        label: PropTypes.string,
        placeholder: PropTypes.string,
        disabled: PropTypes.bool,
        options: PropTypes.array,
    };

    static defaultProps = {
        category: "sign",
        label: "",
        placeholder: "",
        disabled: false,
        options: [], // [{value, name}]
    };

    render() {
        const {
            field,
            form,
            category,
            label,
            placeholder,
            disable,
            options,
        } = this.props;
        const { name, value, onChange, onBlur } = field;
        return (
            <div>
                {category === "sign" && (
                    <FormControl className="select-field">
                        {label && (
                            <InputLabel id="demo-simple-select-label">
                                {label}
                            </InputLabel>
                        )}
                        <Select
                            labelId="demo-simple-select-label"
                            id={name}
                            {...field}
                            // onChange={handleChange}
                        >
                            {options.map((item, i) => (
                                <MenuItem key={i} value={item.value}>
                                    {item.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                )}
            </div>
        );
    }
}
