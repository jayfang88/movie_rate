import React from 'react';
import { connect } from 'react-redux';

class CommentItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { comment } = this.props;
        return(
            <div className='comment-item'>
                <p>{comment.body}</p>
                <h5 className='comment-author'>from: {comment.user}</h5>
                <button onClick={() => this.props.deleteComment(comment.id)}>delete comment</button>
            </div>
        )
    }
};

export default CommentItem;