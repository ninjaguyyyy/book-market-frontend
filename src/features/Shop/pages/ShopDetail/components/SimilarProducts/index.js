import React, { Component } from "react";
import { Col, Row } from "reactstrap";

import BookCard from "../../../../../../components/BookCard/BookCard";
import "./index.scss";

export default class SimilarProducts extends Component {
    render() {
        const { books } = this.props;
        return (
            <div className="similar-products">
                <h3>Sản phẩm tương tự</h3>
                <Row>
                    {books.map((book) => (
                        <Col key={book._id}>
                            <BookCard type="newTab" book={book} />
                        </Col>
                    ))}
                </Row>
            </div>
        );
    }
}
