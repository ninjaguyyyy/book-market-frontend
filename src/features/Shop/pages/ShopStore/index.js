import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import { booksApi } from '../../../../api';
import userApi from '../../../../api/userApi';
import { setComments } from '../../../../redux/actions/user';
import AvatarStore from './components/AvatarStore';
import InfoStore from './components/InfoStore';
import ProductStore from './components/ProductStore';
import ReviewStore from './components/ReviewStore';
import './index.scss';

class ShopStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seller: {},
      idStore: props.match.params.id_store,
      books: {},
      page: 1,
    };
    this.onChangePagination = this.onChangePagination.bind(this);
  }

  componentDidMount() {
    this.getSellerInfo();
    this.fetchBooks();
  }

  componentDidUpdate(prevProps, prevState) {
    prevState.page !== this.state.page && this.fetchBooks();
  }

  async fetchBooks() {
    try {
      let params = {
        page: this.state.page,
        perPage: 4,
        sellerId: this.state.idStore,
      };
      const response = await booksApi.get(params);
      this.setState({ books: response });
    } catch (error) {
      console.log(`Failed call api because ${error}`);
    }
  }

  async getSellerInfo() {
    const resGetUser = await userApi.getById({ ID: this.state.idStore });
    this.setState({
      seller: { ...resGetUser },
    });

    this.props.dispatch(setComments(resGetUser.comments));
  }

  onChangePagination(e, page) {
    this.setState({ page });
  }

  render() {
    let { books, seller } = this.state;
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
                  {_.isEmpty(books) ? (
                    <h1>k co</h1>
                  ) : (
                    <div>
                      <ProductStore
                        onChangePagination={this.onChangePagination}
                        booksStore={books}
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
