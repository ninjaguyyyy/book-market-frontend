import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Button } from "reactstrap";

import "./PayCard.scss";

export default class PayCard extends Component {
    // static propTypes = {
    //     prop: PropTypes,
    // };

    render() {
        return (
            <Card className="PayCard">
                <CardContent className="content">
                    <Typography
                        className="quantity"
                        color="textSecondary"
                        gutterBottom
                    >
                        Số lượng còn lại: 10
                    </Typography>
                    <Divider />
                    <div className="action">
                        <h5 className="priceLabel">Giá bán: 100.000 vnđ</h5>
                        <div className="wrapper">
                            <p>Số lượng mua: </p>
                            <div className="actionQuantity">
                                <div className="btn_cal">
                                    <RemoveCircleIcon />
                                </div>
                                <div className="quantity">2</div>
                                <div className="btn_cal">
                                    <AddCircleIcon />
                                </div>
                            </div>
                        </div>
                    </div>

                    <Divider />
                    <div className="cart">
                        <Button outline color="primary">
                            Thêm vào giỏ hàng
                        </Button>
                    </div>
                </CardContent>
            </Card>
        );
    }
}
