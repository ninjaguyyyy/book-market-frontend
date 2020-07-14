import React, { Component } from "react";
import { Col, Row } from "reactstrap";

import BookCard from "../../../../../../components/BookCard/BookCard";
import "./index.scss";

export default class SimilarProducts extends Component {
    render() {
        return (
            <div className="similar-products">
                <h3>Sản phẩm tương tự</h3>
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
            </div>
        );
    }
}
