import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import { compose } from "redux";
import { connect } from "react-redux";
import _ from "lodash";
import { withRouter } from "react-router-dom";

import MainInfo from "./components/MainInfo/MainInfo";
import Alert from "@material-ui/lab/Alert";
import PayCard from "./components/PayCard/PayCard";
import Slider from "./components/Slider/Slider";
import { Snackbar } from "@material-ui/core";
import InfoTab from "./components/InfoTab";
import SimilarProducts from "./components/SimilarProducts";
import booksApi from "../../../../api/booksApi";
import cartApi from "../../../../api/cartApi";
import userApi from "../../../../api/userApi";

import { getBook } from "../../../../actions/books";
import { addToCart } from "../../../../actions/cart";
import { isLogin } from "../../../../utils/auth";
import "./index.scss";

class ShopDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idBook: "",
            booksByAuthor: [],
            openAlert: false,
            contentAlert: "Loading",
            typeAlert: "info",
        };

        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.addToFavorite = this.addToFavorite.bind(this);
    }

    componentDidMount() {
        (async () => {
            try {
                let idBook = this.props.match.params.id_book;
                this.setState({ idBook });
                const response = await booksApi.getDetail(idBook);

                const paramForByAuthor = {
                    page: 1,
                    perPage: 4,
                    author: response.author,
                };
                let action = await getBook(response);
                this.props.dispatch(action);
                const resByAuthor = await booksApi.get(paramForByAuthor);

                this.setState({
                    booksByAuthor: [...resByAuthor.docs],
                });

                // console.log(resDispatch);
            } catch (error) {
                console.log(`failed post register as ${error}`);
            }
        })();
    }

    handleAddToCart(e, amount) {
        if (!isLogin()) {
            this.props.history.push("/user/login");
            return;
        }
        let cartItem = {
            amount,
            productID: this.state.idBook,
        };

        (async () => {
            try {
                const response = await cartApi.add(cartItem);
                if (response.success) {
                    let action = await addToCart(response.data[0]);
                    this.props.dispatch(action);
                    this.setState({
                        openAlert: true,
                        contentAlert:
                            "Đã thêm thành công. Chuyển sang Giỏ hàng để xem chi tiết.",
                        typeAlert: "success",
                    });
                }
            } catch (error) {
                console.log(`failed post register as ${error}`);
            }
        })();
    }

    addToFavorite() {
        if (!isLogin()) {
            this.props.history.push("/user/login");
            return;
        }
        (async () => {
            try {
                const response = await userApi.addToFavorite({
                    idBook: this.state.idBook,
                });
                if (response.success) {
                    this.setState({
                        openAlert: true,
                        contentAlert:
                            "Đã thêm thành công. Chuyển sang Quản lý tài khoản để xem chi tiết.",
                        typeAlert: "success",
                    });
                } else {
                    this.setState({
                        openAlert: true,
                        contentAlert: response.msg,
                        typeAlert: "error",
                    });
                }
            } catch (error) {
                console.log(`failed post register as ${error}`);
            }
        })();
    }

    renderBook(book) {
        return (
            <div>
                <Row>
                    <Col xs={8}>
                        <Row>
                            <Col xs={5}>
                                <Slider images={book.images} />
                            </Col>
                            <Col xs={7}>
                                <MainInfo
                                    book={book}
                                    addToFavorite={this.addToFavorite}
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={4}>
                        <PayCard
                            handleAddToCart={this.handleAddToCart}
                            book={book}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <InfoTab
                            des={book.description}
                            previews={book.previewImgs}
                        />
                    </Col>
                </Row>
                {this.state.booksByAuthor.length && (
                    <Row>
                        <SimilarProducts books={this.state.booksByAuthor} />
                    </Row>
                )}
            </div>
        );
    }

    renderProgress() {
        return <div>progress</div>;
    }

    render() {
        let { bookDetail: book } = this.props;

        return (
            <div>
                <Container className="container-fluid ShopDetail">
                    {_.isEmpty(book)
                        ? this.renderProgress()
                        : this.renderBook(book)}
                </Container>
                <Snackbar
                    open={this.state.openAlert}
                    autoHideDuration={6000}
                    onClose={() => this.setState({ openAlert: false })}
                >
                    <Alert
                        onClose={() => this.setState({ openAlert: false })}
                        severity={this.state.typeAlert}
                    >
                        {this.state.contentAlert}
                    </Alert>
                </Snackbar>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    bookDetail: state.books.bookDetail,
});

export default compose(withRouter, connect(mapStateToProps, null))(ShopDetail);
