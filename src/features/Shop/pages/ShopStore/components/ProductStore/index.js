import React from "react";
import { Col, Row } from "reactstrap";

import BookCard from "../../../../../../components/BookCard/BookCard";
import "./index.scss";

export default function ProductStore() {
    return (
        <div className="product-store">
            <Row>
                <Col xs={3}>
                    <BookCard size="small" />
                </Col>
                <Col xs={3}>
                    <BookCard size="small" />
                </Col>
                <Col xs={3}>
                    <BookCard size="small" />
                </Col>
                <Col xs={3}>
                    <BookCard size="small" />
                </Col>
                <Col xs={3}>
                    <BookCard size="small" />
                </Col>
            </Row>
        </div>
    );
}
