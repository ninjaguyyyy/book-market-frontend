import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";

import BookImg from "../../../../../../assets/images/book.jpg";
import "./index.scss";

export default function CartItem() {
    const [quantityTemp, setQuantityTemp] = useState(1);

    const handleSub = () => {
        let temp = quantityTemp - 1 < 1 ? 1 : quantityTemp - 1;
        setQuantityTemp(temp);
    };
    const handleAdd = () => {
        let temp = quantityTemp + 1 > 10 ? 10 : quantityTemp + 1;
        setQuantityTemp(temp);
    };
    return (
        <div className="cart-item">
            <Row>
                <Col xs={2}>
                    <img className="image" src={BookImg} alt="img" />
                </Col>
                <Col xs={5}>
                    <div className="info">
                        <Link className="title" to="/shop/detail">
                            Tôi thấy hoa vàng trên cỏ xanh
                        </Link>
                        <p>
                            <u>Tác giả:</u> Nguyễn Nhật Ánh
                        </p>
                        <p>
                            <u>Người bán:</u> Nguyễn Huu Chi
                        </p>
                    </div>
                </Col>
                <Col xs={2} className="price">
                    88 000 <u>đ</u>
                </Col>
                <Col xs={2}>
                    <div className="action-quantity">
                        <div className="des action" onClick={handleSub}>
                            -
                        </div>
                        <input
                            type="text"
                            className="number"
                            value={quantityTemp}
                        />
                        <div className="inc action" onClick={handleAdd}>
                            +
                        </div>
                    </div>
                </Col>
                <Col xs={1}>
                    <div className="del">
                        <DeleteIcon />
                    </div>
                </Col>
            </Row>
        </div>
    );
}
