import React from "react";
import { Button } from "reactstrap";

import "./index.scss";

export default function Payment() {
    return (
        <div className="payment">
            <h5 className="mb-3">Thông tin đơn hàng</h5>
            <div className="cost">
                <p>Tạm tính (0 sản phẩm)</p>
                <div className="number">
                    0 <u>đ</u>
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
                    0 <u>đ</u>
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
