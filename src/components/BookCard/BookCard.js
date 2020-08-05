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
        const { size, book } = this.props;
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
                        image={book.images[0]}
                        title="Contemplative Reptile"
                    />
                </div>

                <CardContent
                    className={`content ${size === "small" ? "small" : ""}`}
                >
                    <div className="author">
                        <span>{book.author}</span>
                    </div>
                    <div className="title">
                        <Link to={"/shop/detail/" + book._id}>
                            {book.title}
                        </Link>
                    </div>
                    <div className="price">
                        <img
                            src={require("../../assets/images/price.svg")}
                            alt="money"
                            width={20}
                        />
                        <span> {book.price}.000 vnđ</span>
                    </div>
                </CardContent>
            </Card>
        );
    }
}
