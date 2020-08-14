import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import { connect } from "react-redux";
import cartApi from "../../../../api/cartApi";
import { getCartDetails } from "../../../../actions/user";
import Payment from "./components/Payment";
import CartItem from "./components/CartItem";
import "./index.scss";
import store from '../../../../app/store';

const mapStateToProps = (state) => ({
    cart: state.cart.cart
});
const mapDispatchToProps = (dispatch) => {
    return {
        getCartDetails: (cart) => dispatch(getCartDetails(cart))
    };
};

export class Cart extends Component {
    async componentDidMount() {
        let params = {
            userID: "123"
        };
        const response = await cartApi.get(params)
        store.dispatch(getCartDetails(response))
    }
    render() {
        const { cart } = this.props
        let cartItemArray
        if (cart[0]) {
            const productList = cart[0][0].productList
            cartItemArray=productList.map((item) => {
                return(
                 <Row>
                    <Col>
                        <CartItem details={item}/>
                    </Col>
                </Row>)
            })
        }
        return (
            <div className="cart">
                <Container>
                    <Row>
                        <Col xs={8}>
                            {cartItemArray}
                        </Col>
                        <Col xs={4}>
                            <Payment />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
const CartComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);

export default CartComponent;