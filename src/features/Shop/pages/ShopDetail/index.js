import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";

import Slider from "./components/Slider/Slider";
import PayCard from "./components/PayCard/PayCard";
import MainInfo from "./components/MainInfo/MainInfo";

export default class ShopDetail extends Component {
    // static propTypes = {
    //     prop: PropTypes(),
    // };

    render() {
        return (
            <Container className="container-fluid ShopList">
                <Row>
                    <Col xs={8}>
                        <Row>
                            <Col xs={6}>
                                <Slider />
                            </Col>
                            <Col xs={6}>
                                <MainInfo />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={4}>
                        <PayCard />
                    </Col>
                </Row>
            </Container>
        );
    }
}
