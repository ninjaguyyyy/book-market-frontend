import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";
import "./CardFilterCategory.scss";

export default class CardFilterCategory extends Component {
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
        this.props.onChangeCategory(event.target.value);
    }

    render() {
        const { categories } = this.props;
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
                            value={this.state.category}
                            onChange={this.handleCategoryChange}
                        >
                            <FormControlLabel
                                value=""
                                control={<Radio />}
                                label="Tất cả"
                                className="radio"
                            />
                            {categories.map((category) => (
                                <FormControlLabel
                                    key={category._id}
                                    value={category._id}
                                    control={<Radio />}
                                    label={category.name}
                                    className="radio"
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                </CardContent>
            </Card>
        );
    }
}
