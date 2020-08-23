import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Button } from "reactstrap";
import userApi from "../../../../../../api/userApi";

import "./index.scss";

function Payment(props) {
    const history = useHistory();
    let { totalPrice: total } = props.cart;
    const [openAlert, setOpenAlert] = useState(false);
    const [content, setContent] = useState("");
    const [type, setType] = useState("");

    const handleOrder = () => {
        console.log("order");
        (async () => {
            try {
                const response = await userApi.order();
                console.log(response);
                if (response.success) {
                    setOpenAlert(true);
                    setContent(
                        "Đã đặt hàng thành công. Quý khách sẽ được người bán liên hệ để xác nhận."
                    );
                    setType("success");
                    setTimeout(function () {
                        history.push("/shop");
                    }, 2000);
                } else {
                    setOpenAlert(true);
                    setContent(response.msg);
                    setType("warning");
                }
            } catch (error) {
                console.log(`failed remove cart api as ${error}`);
            }
        })();
    };

    return (
        <div className="payment">
            <h5 className="mb-3">Thông tin đơn hàng</h5>
            <div className="cost">
                <p>Tạm tính </p>
                <div className="number">
                    {total}.000<u>đ</u>
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
                    {total}.000<u>đ</u>
                </div>
            </div>
            <div className="button">
                <Button color="primary" block onClick={handleOrder}>
                    xác nhận đơn hàng
                </Button>
            </div>
            <Snackbar
                open={openAlert}
                autoHideDuration={6000}
                onClose={() => setOpenAlert(false)}
            >
                <Alert onClose={() => setOpenAlert(false)} severity={type}>
                    {content}
                </Alert>
            </Snackbar>
        </div>
    );
}

const mapStateToProps = (state) => ({
    cart: state.cart,
});

export default connect(mapStateToProps, null)(Payment);
