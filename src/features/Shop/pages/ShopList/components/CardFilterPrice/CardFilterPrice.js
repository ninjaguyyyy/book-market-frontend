import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { marksPrice } from "../../../../../../constants/sliderForm";

export default class CardFilterPrice extends Component {
    static propTypes = {
        // prop: PropTypes,
    };

    constructor(props) {
        super(props);
    }

    valuetext(value) {
        return value;
    }

    render() {
        return (
            <Card className="CardFilterCategory">
                <CardContent>
                    <Typography
                        className="title"
                        color="textSecondary"
                        gutterBottom
                    >
                        Giá sách
                    </Typography>
                    <Divider />
                    <div className="root">
                        <Slider
                            defaultValue={80}
                            getAriaValueText={this.valuetext}
                            aria-labelledby="discrete-slider-always"
                            step={10}
                            marks={marksPrice}
                            valueLabelDisplay="on"
                        />
                    </div>
                </CardContent>
            </Card>
        );
    }
}
