import React from 'react';
import { Row, Col } from 'reactstrap';
import { connect, useDispatch } from 'react-redux';

import AddComment from './components/AddComment';
import Comment from './components/Comment';
import userApi from '../../../../../../api/userApi';
import { setComments } from '../../../../../../redux/actions/user';
import './index.scss';

function ReviewStore(props) {
  const dispatch = useDispatch();

  const handleComment = (e, content) => {
    let body = {
      content,
      author: 'demo',
      rating: 4,
      sellerID: props.idStore,
    };
    (async () => {
      try {
        const response = await userApi.comment(body);
        if (response.success) {
          let action = await setComments(response.comments);
          dispatch(action);
        }
      } catch (error) {
        console.log(`failed post comments as ${error}`);
      }
    })();
  };
  return (
    <div className="review-store">
      <h5 className="mb-4">Nhận xét từ khách hàng:</h5>
      <Row>
        <Col xs={12}>
          <AddComment handleComment={handleComment} />
        </Col>
      </Row>
      {props.comments.map((comment) => (
        <Row>
          <Col xs={12}>
            <Comment comment={comment} />
          </Col>
        </Row>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  comments: state.user.comments,
});

export default connect(mapStateToProps, null)(ReviewStore);
