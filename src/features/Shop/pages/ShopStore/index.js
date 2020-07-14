import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

import AvatarStore from "./components/AvatarStore";
import InfoStore from "./components/InfoStore";
import ReviewStore from "./components/ReviewStore";
import ProductStore from "./components/ProductStore";
import "./index.scss";

export default class ShopStore extends Component {
    render() {
        return (
            <div className="shop-store">
                <Container className="shop-store">
                    <Row>
                        <Col xs={3}>
                            <AvatarStore />
                        </Col>
                        <Col xs={9}>
                            <Row>
                                <Col>
                                    <InfoStore />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <ProductStore />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <ReviewStore />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
