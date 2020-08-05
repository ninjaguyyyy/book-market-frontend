import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import StoreIcon from "@material-ui/icons/Store";

import "./MainInfo.scss";

export default class MainInfo extends Component {
    static propTypes = {
        prop: PropTypes,
    };

    render() {
        const { book } = this.props;
        return (
            <div className="MainInfo">
                <div className="main">
                    <h4>{book.title}</h4>
                    <div className="author">Tác giả: {book.author}</div>
                </div>
                <div className="extra">
                    <div className="des">
                        <h6>Mô tả: </h6>
                        <div>{book.description.slice(0, 200)} ...</div>
                    </div>
                    <div className="seller">
                        <StoreIcon />
                        <Link to="/shop/store" className="store">
                            <p>nguyen huu chi</p>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
