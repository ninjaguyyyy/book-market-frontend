import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import userApi from "../../../../../../api/userApi";
import cartApi from "../../../../../../api/cartApi";
import BookImg from "../../../../../../assets/images/book.jpg";
import "./index.scss";

import { connect, useDispatch } from "react-redux";
import Payment from "../Payment/index";

function CartItem(props) {
    const [quantityTemp, setQuantityTemp] = useState(props.cartItem.amount);
    const [visible, setVisible] = useState(false);
    const [seller, setSeller] = useState({});
    const dispatch = useDispatch();

    console.log(props.cartItem.productID._id);
    const handleSub = () => {
        console.log("sub");
        let temp = quantityTemp - 1 < 1 ? 1 : quantityTemp - 1;
        setQuantityTemp(temp);
    };
    const handleAdd = () => {
        console.log("add");
        let limit = props.cartItem.productID.quantity;

        let temp = quantityTemp + 1 > limit ? limit : quantityTemp + 1;
        setQuantityTemp(temp);
    };

    return (
        <div className="cart-item" hidden={visible}>
            <Row>
                <Col xs={2}>
                    <img
                        className="image"
                        src={props.cartItem.productID.images}
                        alt="img"
                    />
                </Col>
                <Col xs={4}>
                    <div className="info">
                        <Link className="title" to="/shop/detail">
                            {props.cartItem.productID.title}
                        </Link>
                        <p>
                            <u>Tác giả:</u> {props.cartItem.productID.author}
                        </p>
                        <p>
                            <u>Người bán:</u> {seller.username}
                        </p>
                    </div>
                </Col>
                <Col xs={2} className="price">
                    {props.cartItem.productID.price} <u>đ</u>
                </Col>
                <Col xs={2}>
                    <div className="action-quantity">
                        <div className="des action" onClick={handleSub}>
                            -
                        </div>
                        <input
                            type="text"
                            className="number"
                            value={quantityTemp}
                        />
                        <div className="inc action" onClick={handleAdd}>
                            +
                        </div>
                    </div>
                </Col>

                <Col xs={1}>
                    <div className="submit">
                        <CheckBoxIcon
                            onClick={(e) =>
                                props.onChange(
                                    e,
                                    props.cartItem.productID._id,
                                    quantityTemp
                                )
                            }
                        />
                    </div>
                </Col>
                <Col xs={1}>
                    <div className="del">
                        <DeleteIcon
                            onClick={(e) =>
                                props.onDel(e, props.cartItem.productID._id)
                            }
                        />
                    </div>
                </Col>
            </Row>
        </div>
    );
}
const mapStateToProps = (state) => ({ cart: state.cart.cart });
export default connect(mapStateToProps, null)(CartItem);
