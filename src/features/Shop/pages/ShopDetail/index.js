import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import queryString from "query-string";
import { compose } from "redux";
import { connect } from "react-redux";
import _ from "lodash";
import { withRouter } from "react-router-dom";

import MainInfo from "./components/MainInfo/MainInfo";
import PayCard from "./components/PayCard/PayCard";
import Slider from "./components/Slider/Slider";
import InfoTab from "./components/InfoTab";
import SimilarProducts from "./components/SimilarProducts";
import booksApi from "../../../../api/booksApi";
import cartApi from "../../../../api/cartApi";

import { getBook } from "../../../../actions/books";
import { addToCart } from "../../../../actions/cart";
import "./index.scss";

class ShopDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idBook: "",
            booksByAuthor: [],
        };

        this.handleAddToCart = this.handleAddToCart.bind(this);
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
                let resDispatch = this.props.dispatch(action);
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
        console.log("once");
        console.log(amount);
        let cartItem = {
            amount,
            productID: this.state.idBook,
        };
        (async () => {
            try {
                const response = await cartApi.add(cartItem);
                console.log(response);
                if (response.success) {
                    let action = await addToCart(
                        response.data.cart.productList
                    );
                    let resDispatch = this.props.dispatch(action);
                    console.log(resDispatch);
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
                                <MainInfo book={book} />
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
                        <InfoTab des={book.description} />
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
            <Container className="container-fluid ShopDetail">
                {_.isEmpty(book)
                    ? this.renderProgress()
                    : this.renderBook(book)}
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    bookDetail: state.books.bookDetail,
});

export default compose(withRouter, connect(mapStateToProps, null))(ShopDetail);
