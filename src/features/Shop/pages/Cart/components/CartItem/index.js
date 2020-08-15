import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import userApi from "../../../../../../api/userApi";
import cartApi from "../../../../../../api/cartApi";
import BookImg from "../../../../../../assets/images/book.jpg";
import "./index.scss";

import { connect, useDispatch } from "react-redux";
import Payment from "../Payment/index";

function CartItem(props) {
    const [quantityTemp, setQuantityTemp] = useState(
        props.cartItem.productID.quantity
    );
    const [visible, setVisible] = useState(false);
    const [seller, setSeller] = useState({});
    const dispatch = useDispatch();

    console.log(props.cartItem.productID._id);
    const handleSub = () => {
        let temp = quantityTemp - 1 < 1 ? 1 : quantityTemp - 1;
        setQuantityTemp(temp);
    };
    const handleAdd = () => {
        let temp = quantityTemp + 1 > 10 ? 10 : quantityTemp + 1;
        setQuantityTemp(temp);
    };
    const handleDelete = () => {
        // (async () => {
        //     try {
        //         let params = {
        //             productID: props.details.productID._id,
        //         };
        //         const response = await cartApi.remove(params);
        //         console.log(response);
        //         let action = removeFromCart(response.data);
        //         console.log(action);
        //         let resDispatch = dispatch(action);
        //         console.log(resDispatch);
        //         // setVisible(true);
        //     } catch (error) {
        //         console.log(`failed post register as ${error}`);
        //     }
        // })();
    };

    // useEffect(() => {
    //     // execute after first render
    //     (async () => {
    //         try {
    //             let params = {
    //                 ID: props.details.productID.seller,
    //             };
    //             const seller = await userApi.getById(params);
    //             setSeller(seller);
    //         } catch (error) {
    //             console.log(`failed post register as ${error}`);
    //         }
    //     })();
    //     return {
    //         // execute when unmount
    //     };
    // }, []);
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
                <Col xs={5}>
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
                        <div className="inc action" onClick={() => handleAdd}>
                            +
                        </div>
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
