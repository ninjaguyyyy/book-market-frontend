import React, { Component } from "react";
import PropTypes from "prop-types";
import StoreIcon from "@material-ui/icons/Store";

import "./MainInfo.scss";

export default class MainInfo extends Component {
    static propTypes = {
        prop: PropTypes,
    };

    render() {
        return (
            <div className="MainInfo">
                <div className="main">
                    <h4>Tôi thấy hoa vàng trên cỏ xanh</h4>
                    <div className="author">Tác giả: nguyễn nhật ánh</div>
                </div>
                <div className="extra">
                    <div className="des">
                        <h6>Mô tả: </h6>
                        <div>Thông tin mô tả</div>
                    </div>
                    <div className="seller">
                        <StoreIcon />
                        <p>nguyen huu chi</p>
                    </div>
                </div>
            </div>
        );
    }
}
