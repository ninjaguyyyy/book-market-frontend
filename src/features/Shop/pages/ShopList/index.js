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
    componentDidMount() {
        (async () => {
            try {
                const response = await booksApi.get();
                let action = await getBooks(response);
                let resDispatch = this.props.dispatch(action);
                console.log(resDispatch);
            } catch (error) {
                console.log(`failed post register as ${error}`);
            }
        })();
    }

    onChangePagination(e, page) {
        console.log(page);
    }
    render() {
        let { docs } = this.props;
        console.log(this.props.booksShop);
        console.log(docs);
        return (
            <Container className=" ShopList" fluid={true}>
                <Row>
                    <Col xs={9}>
                        <Row>
                            {docs &&
                                docs.map((book) => (
                                    <Col xs={3}>
                                        <BookCard />
                                    </Col>
                                ))}
                        </Row>
                        <Row className="mt-5">
                            <Col sm={{ size: 6, offset: 4 }}>
                                <Pagination
                                    count={10}
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
