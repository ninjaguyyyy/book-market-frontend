import React from 'react';
import { Col, Row } from 'reactstrap';

import BookCard from '../../../../../../components/BookCard/BookCard';
import Pagination from '@material-ui/lab/Pagination';
import './index.scss';

export default function ProductStore(props) {
  return (
    <div className="product-store">
      <Row>
        {props.booksStore.docs.map((book) => (
          <Col xs={3}>
            <BookCard book={book} size="small" />
          </Col>
        ))}
      </Row>
      <div className="pagination">
        <Pagination
          count={props.booksStore.pages}
          color="secondary"
          onChange={props.onChangePagination}
        />
      </div>
    </div>
  );
}
