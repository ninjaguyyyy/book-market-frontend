import React from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";

import "./index.scss";

function Payment(props) {
    let { totalPrice: total } = props.cart;

    return (
        <div className="payment">
            <h5 className="mb-3">Thông tin đơn hàng</h5>
            <div className="cost">
                <p>Tạm tính </p>
                <div className="number">
                    {total} <u>đ</u>
                </div>
            </div>
            <div className="cost">
                <p>Phí giao hàng</p>
                <div className="number">
                    0 <u>đ</u>
                </div>
            </div>
            <div className="cost total">
                <p>Tổng cộng</p>
                <div className="number">
                    {total} <u>đ</u>
                </div>
            </div>
            <div className="button">
                <Button color="primary" block>
                    xác nhận đơn hàng
                </Button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    cart: state.cart,
});

export default connect(mapStateToProps, null)(Payment);
