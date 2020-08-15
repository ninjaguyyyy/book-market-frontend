import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import { connect } from "react-redux";
import cartApi from "../../../../api/cartApi";
import { getCartDetails } from "../../../../actions/user";
import Payment from "./components/Payment";
import CartItem from "./components/CartItem";
import _ from "lodash";
import "./index.scss";
import { removeFromCart, setCart } from "../../../../actions/cart";
import store from "../../../../app/store";

class Cart extends Component {
    constructor(props) {
        super(props);
    }
    async componentDidMount() {
        let params = {
            userID: "123",
        };
        const response = await cartApi.get(params);
        console.log(response);
        store.dispatch(getCartDetails(response));
    }

    onDel(e, productID) {
        console.log("delete");
        console.log(productID);
        (async () => {
            try {
                let params = {
                    productID,
                };
                const response = await cartApi.remove(params);
                console.log(response);
                let action = setCart(response.data);
                console.log(action);
                let resDispatch = store.dispatch(action);
                console.log(resDispatch);
                // setVisible(true);
            } catch (error) {
                console.log(`failed post register as ${error}`);
            }
        })();
    }

    onChange(e, productID, amount) {
        console.log("delete");
        console.log(productID);
        console.log(amount);
        (async () => {
            try {
                let params = {
                    productID,
                    amount,
                };
                const response = await cartApi.update(params);
                console.log(response);
                let action = setCart(response.data);
                console.log(action);
                let resDispatch = store.dispatch(action);
                console.log(resDispatch);
                // // setVisible(true);
            } catch (error) {
                console.log(`failed post register as ${error}`);
            }
        })();
    }

    render() {
        const { cart } = this.props;
        console.log(cart);
        let cartItemArray;
        console.log(_.isEmpty(cart));
        if (!_.isEmpty(cart)) {
            const productList = cart.productList;
            cartItemArray = productList.map((item) => {
                return (
                    <Row>
                        <Col>
                            <CartItem
                                cartItem={item}
                                onDel={this.onDel}
                                onChange={this.onChange}
                            />
                        </Col>
                    </Row>
                );
            });
        }
        return (
            <div className="cart">
                <Container>
                    <Row>
                        <Col xs={8}>{cartItemArray}</Col>
                        <Col xs={4}>
                            <Payment />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart,
});
const mapDispatchToProps = (dispatch) => {
    return {
        getCartDetails: (cart) => dispatch(getCartDetails(cart)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
