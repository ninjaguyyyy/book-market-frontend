import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import "./CardFilterCategory.scss";

export default class CardFilterCategory extends Component {
    static propTypes = {
        prop: PropTypes,
    };

    constructor(props) {
        super(props);
        this.state = {
            category: "",
        };
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }

    handleCategoryChange(event) {
        this.setState({
            category: event.target.value,
        });
    }

    render() {
        const { category } = this.state;
        return (
            <Card className="CardFilterCategory">
                <CardContent>
                    <Typography
                        className="title"
                        color="textSecondary"
                        gutterBottom
                    >
                        Phân loại sách
                    </Typography>
                    <Divider />
                    <FormControl component="fieldset">
                        <RadioGroup
                            aria-label="gender"
                            name="gender1"
                            value={category}
                            onChange={this.handleCategoryChange}
                        >
                            <FormControlLabel
                                value="female"
                                control={<Radio />}
                                label="Female"
                                className="radio"
                            />
                            <FormControlLabel
                                value="male"
                                control={<Radio />}
                                label="Male"
                                className="radio"
                            />
                            <FormControlLabel
                                value="other"
                                control={<Radio />}
                                label="Other"
                                className="radio"
                            />
                        </RadioGroup>
                    </FormControl>
                </CardContent>
            </Card>
        );
    }
}
