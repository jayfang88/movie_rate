import React from 'react';
import { connect } from 'react-redux';

class CommentItem extends React.Component {
    constructor(props) {
        super(props);
    }

    parseDate(date) {
        let d = date.split('-');
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let year = d[0];
        let month = months[parseInt(d[1])-1];
        let dt = d[2].split('T');
        let day = dt[0];
        let hr = parseInt(dt[1].slice(0,2));
        let hour = hr % 12;
        let min = dt[1].slice(3, 5);
        let am = hr > 12 ? 'PM' : 'AM';
        
        return `${month} ${day}, ${year} at ${hour}:${min} ${am}`;
    }

    render() {
        const { comment } = this.props;
        const date = this.parseDate(comment.updated_at);
        const author = comment.author[0].toUpperCase() + comment.author.slice(1).toLowerCase();

        return(
            <div className='comment-item'>
                <section className='comment-user'>
                    <div className='comment-user-circle'>
                        <h1 className='comment-user-initial'>{author[0]}</h1>
                    </div>
                </section>
                <section className='comment-info'>
                    <h5 className='comment-author'>{author} <span className='comment-date'>- {date}</span></h5>
                    <p className='comment-body'>{comment.body}</p>
                    <button onClick={() => this.props.deleteComment(comment.id)}
                        className='comment-delete'>Delete comment</button>
                </section>
            </div>
        )
    }
};

export default CommentItem;