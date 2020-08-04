import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import { connect } from "react-redux";
import BookCard from "../../../../components/BookCard/BookCard";
import CardFilterCategory from "./components/CardFilterCategory/CardFilterCategory";
import CardFilterPrice from "./components/CardFilterPrice/CardFilterPrice";
import Pagination from "@material-ui/lab/Pagination";

import booksApi from "../../../../api/booksApi";
import { getBooks } from "../../../../actions/books";
import "./index.scss";

class ShopList extends Component {
    constructor(props) {
        super(props);
        this.onChangePagination = this.onChangePagination.bind(this);
    }
    componentDidMount() {
        (async () => {
            try {
                const response = await booksApi.get({ page: 1, perPage: 2 });
                let action = await getBooks(response);
                let resDispatch = this.props.dispatch(action);
                console.log(resDispatch);
            } catch (error) {
                console.log(`failed post register as ${error}`);
            }
        })();
    }

    onChangePagination(e, page) {
        (async () => {
            try {
                console.log(page);
                const response = await booksApi.get({ page, perPage: 2 });
                let action = await getBooks(response);
                let resDispatch = this.props.dispatch(action);
            } catch (error) {
                console.log(`failed post register as ${error}`);
            }
        })();
    }
    render() {
        let { docs, pages } = this.props.booksShop;
        console.log(this.props.booksShop);
        return (
            <Container className=" ShopList" fluid={true}>
                <Row>
                    <Col xs={9}>
                        <Row>
                            {docs &&
                                docs.map((book) => (
                                    <Col xs={3} key={book._id}>
                                        <BookCard book={book} />
                                    </Col>
                                ))}
                        </Row>
                        <Row className="mt-5">
                            <Col sm={{ size: 6, offset: 4 }}>
                                <Pagination
                                    count={pages ? pages : 1}
                                    color="secondary"
                                    onChange={this.onChangePagination}
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <CardFilterCategory />
                        <CardFilterPrice />
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({ booksShop: state.books.booksShop });

export default connect(mapStateToProps, null)(ShopList);
