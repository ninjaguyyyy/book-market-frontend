import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BookCard.scss";

export default class BookCard extends Component {
    render() {
        return (
            <Card className="BookCard">
                <div className="hover">
                    <div className="layout">
                        <Link className="icon" to="/">
                            <FavoriteIcon fontSize="large" />
                        </Link>
                        <Link className="icon" to="/">
                            <ShoppingBasketIcon fontSize="large" />
                        </Link>
                        <Link className="icon" to="/">
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
                        <Link to="/shop">Nguyễn Nhật Ánh</Link>
                    </div>
                    <div className="title">
                        <Link to="/shop/detail">
                            Tôi thấy hoa vàng trên cỏ xanh
                        </Link>
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
