import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import MainInfo from "./components/MainInfo/MainInfo";
import PayCard from "./components/PayCard/PayCard";
import Slider from "./components/Slider/Slider";
import InfoTab from "./components/InfoTab";
import "./index.scss";

export default class ShopDetail extends Component {
    // static propTypes = {
    //     prop: PropTypes(),
    // };

    render() {
        return (
            <Container className="container-fluid ShopDetail">
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
                        <PayCard availableQuantity={12} price={101} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <InfoTab />
                    </Col>
                </Row>
            </Container>
        );
    }
}
