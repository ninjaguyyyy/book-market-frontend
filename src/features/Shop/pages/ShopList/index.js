import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import BookCard from "../../../../components/BookCard/BookCard";
import CardFilterCategory from "./components/CardFilterCategory/CardFilterCategory";
import CardFilterPrice from "./components/CardFilterPrice/CardFilterPrice";
import "./index.scss";

export default class ShopList extends Component {
    render() {
        return (
            <Container className=" ShopList" fluid={true}>
                <Row>
                    <Col xs={9}>
                        <Row>
                            <Col>
                                <BookCard />
                            </Col>
                            <Col>
                                <BookCard />
                            </Col>
                            <Col>
                                <BookCard />
                            </Col>
                            <Col>
                                <BookCard />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={3}>
                        <CardFilterCategory />
                        <CardFilterPrice />
                    </Col>
                </Row>
            </Container>
        );
    }
}
