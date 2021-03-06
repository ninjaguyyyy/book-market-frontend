import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import { connect } from "react-redux";
import _ from "lodash";

import AvatarStore from "./components/AvatarStore";
import InfoStore from "./components/InfoStore";

import ReviewStore from "./components/ReviewStore";
import ProductStore from "./components/ProductStore";
import booksApi from "../../../../api/booksApi";
import userApi from "../../../../api/userApi";
import { getBooksStore } from "../../../../actions/books";
import { setComments } from "../../../../actions/user";
import "./index.scss";

class ShopStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seller: {},
            idStore: "",
        };
        this.onChangePagination = this.onChangePagination.bind(this);
    }
    componentDidMount() {
        (async () => {
            try {
                let idStore = this.props.match.params.id_store;
                this.setState({ idStore });
                let params = {
                    page: 1,
                    perPage: 4,
                    sellerId: idStore,
                };
                const response = await booksApi.get(params);
                const resGetUser = await userApi.getById({ ID: idStore });
                this.setState({
                    seller: { ...resGetUser },
                });
                let action = await getBooksStore(response);

                this.props.dispatch(action);
                this.props.dispatch(setComments(resGetUser.comments));
            } catch (error) {
                console.log(`failed post register as ${error}`);
            }
        })();
    }

    onChangePagination(e, page) {
        (async () => {
            try {
                let idStore = this.props.match.params.id_store;

                let params = {
                    page: page,
                    perPage: 4,
                    sellerId: idStore,
                };
                const response = await booksApi.get(params);

                let action = await getBooksStore(response);
                this.props.dispatch(action);

                // console.log(resDispatch);
            } catch (error) {
                console.log(`failed post register as ${error}`);
            }
        })();
    }

    render() {
        let { booksStore } = this.props;
        let { seller } = this.state;
        console.log(seller);
        return (
            <div className="shop-store">
                <Container className="shop-store">
                    <Row>
                        <Col xs={3}>
                            {_.isEmpty(seller) ? (
                                <h1>k co</h1>
                            ) : (
                                <div>
                                    <AvatarStore seller={seller} />
                                </div>
                            )}
                        </Col>
                        <Col xs={9}>
                            <Row>
                                <Col>
                                    <InfoStore />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {_.isEmpty(booksStore) ? (
                                        <h1>k co</h1>
                                    ) : (
                                        <div>
                                            <ProductStore
                                                onChangePagination={
                                                    this.onChangePagination
                                                }
                                                booksStore={booksStore}
                                            />
                                        </div>
                                    )}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <ReviewStore idStore={this.state.idStore} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    booksStore: state.books.booksStore,
});

export default connect(mapStateToProps, null)(ShopStore);
