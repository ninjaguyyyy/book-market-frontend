import React, { Component, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { connect, useDispatch } from "react-redux";
import BookCard from "../../../../components/BookCard/BookCard";
import CardFilterCategory from "./components/CardFilterCategory/CardFilterCategory";
import CardFilterPrice from "./components/CardFilterPrice/CardFilterPrice";
import Pagination from "@material-ui/lab/Pagination";

import booksApi from "../../../../api/booksApi";
import categoriesApi from "../../../../api/categoriesApi";
import { getBooks, getCategories } from "../../../../actions/books";
import "./index.scss";

const ShopList = (props) => {
    const [page, setPage] = useState(1);
    const [category, setCategory] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            try {
                let params = {
                    page: page,
                    perPage: 2,
                    categoryId: category,
                };

                const response = await booksApi.get(params);
                console.log(response);
                let action = await getBooks(response);
                let resDispatch = dispatch(action);
                console.log(resDispatch);
            } catch (error) {
                console.log(`failed post register as ${error}`);
            }
        })();
        return () => {
            // before effect and unmount
        };
    }, [page, category]);

    useEffect(() => {
        (async () => {
            try {
                const response = await categoriesApi.get();
                let action = await getCategories(response);
                let resDispatch = dispatch(action);
                console.log(resDispatch);
            } catch (error) {
                console.log(`failed post register as ${error}`);
            }
        })();
        return {
            // before effect and unmount
        };
    }, []);

    const onChangeCategory = (category) => {
        setCategory(category);
    };

    return (
        <Container className=" ShopList" fluid={true}>
            <Row>
                <Col xs={9}>
                    <Row>
                        {props.booksShop.total &&
                            props.booksShop.docs.map((book) => (
                                <Col xs={3} key={book._id}>
                                    <BookCard book={book} />
                                </Col>
                            ))}
                    </Row>
                    <Row className="mt-5">
                        <Col sm={{ size: 6, offset: 4 }}>
                            <Pagination
                                count={
                                    props.booksShop.pages
                                        ? props.booksShop.pages
                                        : 1
                                }
                                color="secondary"
                                onChange={(e, page) => setPage(page)}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <CardFilterCategory
                        categories={props.categories}
                        onChangeCategory={onChangeCategory}
                    />
                    <CardFilterPrice />
                </Col>
            </Row>
        </Container>
    );
};

const mapStateToProps = (state) => ({
    booksShop: state.books.booksShop,
    categories: state.books.categories,
});

export default connect(mapStateToProps, null)(ShopList);
