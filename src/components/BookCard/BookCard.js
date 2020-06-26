import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import Typography from "@material-ui/core/Typography";
import "./BookCard.scss";

export default class BookCard extends Component {
    static propTypes = {
        prop: PropTypes,
    };

    render() {
        return (
            <Card className="BookCard">
                <div className="hover">
                    <div className="layout">
                        <Link className="icon">
                            <FavoriteIcon fontSize="large" />
                        </Link>
                        <Link className="icon">
                            <ShoppingBasketIcon fontSize="large" />
                        </Link>
                        <Link className="icon">
                            <FindInPageIcon fontSize="large" />
                        </Link>
                    </div>
                    <CardMedia
                        className="media"
                        image="https://www.nxbtre.com.vn/Images/Book/nxbtre_full_04152018_031555.jpg"
                        title="Contemplative Reptile"
                    />
                </div>

                <CardContent className="content">
                    <div className="author">
                        <Link>Nguyễn Nhật Ánh</Link>
                    </div>
                    <div className="title">
                        <Link>Tôi thấy hoa vàng trên cỏ xanh</Link>
                    </div>
                    <div className="price">
                        <img
                            src={require("../../assets/images/price.svg")}
                            alt="money"
                            width={20}
                        />
                        <span> 100.000 vnđ</span>
                    </div>
                </CardContent>
            </Card>
        );
    }
}
