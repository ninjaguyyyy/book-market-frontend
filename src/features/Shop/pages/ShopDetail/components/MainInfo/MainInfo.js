import React, { Component } from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StoreIcon from "@material-ui/icons/Store";

import "./MainInfo.scss";

export default class MainInfo extends Component {
    render() {
        const { book } = this.props;
        return (
            <div className="MainInfo">
                <div className="main">
                    <div>
                        <h4>{book.title}</h4>
                        <div className="author">Tác giả: {book.author}</div>
                    </div>
                    <div className="favorite">
                        <FavoriteIcon
                            fontSize="large"
                            onClick={this.props.addToFavorite}
                        />
                    </div>
                </div>
                <div className="extra">
                    <div className="des">
                        <h6>Mô tả: </h6>
                        <div>{book.description.slice(0, 200)} ...</div>
                    </div>
                    <div className="seller">
                        <StoreIcon />
                        <Link
                            to={`/shop/store/${book.seller._id}`}
                            className="store"
                        >
                            <p>{book.seller.name || book.seller.username}</p>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
