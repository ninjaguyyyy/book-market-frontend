import React,{ useEffect, useState } from "react";
import { Button } from "reactstrap";
import cartApi from "../../../../../../api/cartApi";

import "./index.scss";

export default function Payment(props) {
    const [total, setTotal] = useState(0);
    useEffect(() => {
        // execute after first render
        (async () => {
            try {
                let params = {
                    userID: "123"
                };
                const response = await cartApi.get(params)
                setTotal(response[0].totalPrice)
            } catch (error) {
                console.log(`failed post register as ${error}`);
            }
        })();
        return {
            // execute when unmount
        };
    }, []);
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
