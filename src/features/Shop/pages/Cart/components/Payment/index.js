import React,{ useEffect, useState } from "react";
import {connect} from 'react-redux'
import { Button } from "reactstrap";
import cartApi from "../../../../../../api/cartApi";

import "./index.scss";
// dung redux -> k dung state
// chay lai check console.log thu
// co r ak co cai gi :v
function Payment(props) {
    const [total, setTotal] = useState(props.cart.totalPrice);
    console.log(props.cart)
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
    cart: state.cart.cart
});

export default connect(mapStateToProps, null)(Payment)