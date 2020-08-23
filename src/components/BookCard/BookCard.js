import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Snackbar } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import Alert from "@material-ui/lab/Alert";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BookCard.scss";

export default class BookCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openAlert: false,
        };
        this.handleNotSupport = this.handleNotSupport.bind(this);
    }

    handleNotSupport() {
        this.setState({ openAlert: true });
    }

    render() {
        const { size, book, type } = this.props;
        return (
            <Card className="BookCard">
                <div className="hover">
                    <div className="layout">
                        <Link className="icon" to="#">
                            <FavoriteIcon
                                fontSize="large"
                                onClick={this.handleNotSupport}
                            />
                        </Link>
                        <Link className="icon" to="#">
                            <ShoppingBasketIcon
                                fontSize="large"
                                onClick={this.handleNotSupport}
                            />
                        </Link>
                        <Link className="icon" to="#">
                            <FindInPageIcon
                                fontSize="large"
                                onClick={this.handleNotSupport}
                            />
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
                        <Link
                            target={type === "newTab" ? "_blank" : ""}
                            to={"/shop/detail/" + book._id}
                        >
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
                <Snackbar
                    open={this.state.openAlert}
                    autoHideDuration={6000}
                    onClose={() => this.setState({ openAlert: false })}
                >
                    <Alert
                        onClose={() => this.setState({ openAlert: false })}
                        severity="info"
                    >
                        Tính năng này chưa được hỗ trợ. Xin quý khách thông cảm.
                    </Alert>
                </Snackbar>
            </Card>
        );
    }
}
