import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/postActions';

class CommentItem extends Component {
  onDeleteClick(postId, commentId) {
    this.props.deleteComment(postId, commentId);
  }

  render() {
    const { comment, postId, auth } = this.props;

    return (
      <div className="card card-body mb-1 ">
        <div className="row">
          <div className="col-md-2 border pt-3">
            <a href="profile.html">
              <img
                className="rounded-circle d-none d-md-block circle-img"
                src={comment.avatar}
                alt=""
              />
            </a>
            <br />
            <p className="text-start">{comment.username}</p>
          </div>
          <div className="col-md-6 border pt-3">
            <p className="lead">{comment.text}</p>
          </div>
          <div className="col-md-4 border pt-3">
            <Moment 
              className="fs-12 text-end " 
              format="MMMM Do YYYY"
            >
              {comment.date}
            </Moment>
            {comment.user === auth.user.id ? (
              <button
                onClick={this.onDeleteClick.bind(this, postId, comment._id)}
                type="button"
                className="btn btn-outline-danger mx-5"
              >
                <i className="fas fa-times" />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);