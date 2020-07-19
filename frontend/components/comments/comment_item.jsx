import React from 'react';
import { connect } from 'react-redux';

class CommentItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { comment } = this.props;
        const user = comment.user[0].toUpperCase() + comment.user.slice(1).toLowerCase();

        return(
            <div className='comment-item'>
                <section className='comment-user'>
                    <div className='comment-user-circle'>
                        <h1 className='comment-user-initial'>{user[0]}</h1>
                    </div>
                </section>
                <section className='comment-info'>
                    <h5 className='comment-author'>{user}</h5>
                    <p>{comment.body}</p>
                    <button onClick={() => this.props.deleteComment(comment.id)}>Delete comment</button>
                </section>
            </div>
        )
    }
};

export default CommentItem;