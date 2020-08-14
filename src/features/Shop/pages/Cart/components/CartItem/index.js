import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import userApi from "../../../../../../api/userApi"
import BookImg from "../../../../../../assets/images/book.jpg";
import "./index.scss";

export default function CartItem(props) {
    const [quantityTemp, setQuantityTemp] = useState(props.details.amount);
    const [seller,setSeller]=useState({})
    const handleSub = () => {
        let temp = quantityTemp - 1 < 1 ? 1 : quantityTemp - 1;
        setQuantityTemp(temp);
    };
    const handleAdd = () => {
        let temp = quantityTemp + 1 > 10 ? 10 : quantityTemp + 1;
        setQuantityTemp(temp);
    };
    useEffect(() => {
        // execute after first render
        (async () => {
            try {
                let params = {
                    ID: props.details.productID.seller,
                };
                const seller = await userApi.getById(params);
                setSeller(seller)
            } catch (error) {
                console.log(`failed post register as ${error}`);
            }
        })();
        return {
            // execute when unmount
        };
    }, []);
    return (
        <div className="cart-item">
            <Row>
                <Col xs={2}>
                    <img className="image" src={BookImg} alt="img" />
                </Col>
                <Col xs={5}>
                    <div className="info">
                        <Link className="title" to="/shop/detail">
                            {props.details.productID.title}
                        </Link>
                        <p>
                            <u>Tác giả:</u> {props.details.productID.author}
                        </p>
                        <p>
                            <u>Người bán:</u> {seller.username}
                        </p>
                    </div>
                </Col>
                <Col xs={2} className="price">
                {props.details.productID.price} <u>đ</u>
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
