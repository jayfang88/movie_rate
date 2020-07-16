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
            </div>
        )
    }
};

export default CommentItem;