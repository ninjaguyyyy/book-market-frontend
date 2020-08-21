import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Button } from "reactstrap";
import "./PayCard.scss";

export default class PayCard extends Component {
    static propTypes = {
        availableQuantity: PropTypes.number,
        price: PropTypes.number,
    };
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSub = this.handleSub.bind(this);
    }

    handleSub() {
        this.setState((state, props) => ({
            quantity: state.quantity - 1 < 1 ? 1 : state.quantity - 1,
        }));
    }
    handleAdd() {
        this.setState((state, props) => ({
            quantity:
                state.quantity + 1 > props.availableQuantity
                    ? props.availableQuantity
                    : state.quantity + 1,
        }));
    }

    render() {
        const { quantity } = this.state;
        const { book } = this.props;
        return (
            <Card className="PayCard">
                <CardContent className="content">
                    <Typography
                        className="quantity"
                        color="textSecondary"
                        gutterBottom
                    >
                        Số lượng còn lại: {book.quantity}
                    </Typography>
                    <Divider />
                    <div className="action">
                        <h5 className="priceLabel">
                            Giá bán: {book.price}.000 vnđ
                        </h5>
                        <div className="wrapper">
                            <p>Số lượng mua: </p>
                            <div className="actionQuantity">
                                <div
                                    className="btn_cal"
                                    onClick={this.handleSub}
                                >
                                    <RemoveCircleIcon />
                                </div>
                                <div className="quantity">{quantity}</div>
                                <div
                                    className="btn_cal"
                                    onClick={this.handleAdd}
                                >
                                    <AddCircleIcon />
                                </div>
                            </div>
                        </div>
                    </div>

                    <Divider />
                    <div className="cart">
                        <Button
                            outline
                            color="primary"
                            onClick={(e) =>
                                this.props.handleAddToCart(e, quantity)
                            }
                        >
                            Thêm vào giỏ hàng
                        </Button>
                    </div>
                </CardContent>
            </Card>
        );
    }
}
