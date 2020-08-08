import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

import Payment from "./components/Payment";
import CartItem from "./components/CartItem";
import "./index.scss";

export default class Cart extends Component {
    render() {
        return (
            <div className="cart">
                <Container>
                    <Row>
                        <Col xs={8}>
                            <Row>
                                <Col>
                                    <CartItem />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <CartItem />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <CartItem />
                                </Col>
                            </Row>
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
