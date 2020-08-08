import React from "react";
import { Row, Col } from "reactstrap";

import AddComment from "./components/AddComment";
import Comment from "./components/Comment";
import "./index.scss";

export default function ReviewStore() {
    return (
        <div className="review-store">
            <h5 className="mb-4">Nhận xét từ khách hàng:</h5>
            <Row>
                <Col xs={12}>
                    <AddComment />
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Comment />
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Comment />
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Comment />
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Comment />
                </Col>
            </Row>
        </div>
    );
}
