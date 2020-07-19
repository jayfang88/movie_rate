import React from 'react';
import CommentItem from '../comments/comment_item';

class Movie extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            body: ''
        }

        this.addComment = this.addComment.bind(this);
    }

    componentDidMount() {
        this.props.fetchMovies();
        this.props.fetchComments();
        window.scrollTo(0,0);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    addComment(e) {
        e.preventDefault();
        // debugger;
        if (!this.props.currentUserId) {
            alert('sorry, you must be logged in')
            return;
        } 
        
        if (this.state.body !== '') {
            this.props.createComment({
                user_id: this.props.currentUserId,
                movie_id: parseInt(this.props.movieId),
                body: this.state.body
            })
                .then(() => this.setState({
                    body: ''
                }))
        }
    }

    render() {
        if (!this.props.movie) return null;
        const { movieId, movie, comments } = this.props;

        let filteredComments = comments.filter(comment => (
            comment.movie_id.toString() === movieId
        ))
      
        filteredComments = filteredComments.map((comment, i) => (
            <CommentItem key={i} comment={comment} deleteComment={commentId => this.props.deleteComment(commentId)}/>
        ))

        return(
            <div className='movie-show'>
                <div className='movie-photo-bg'>
                    <img src={movie.photoUrl} className='movie-photo'/>
                </div>
                <section className='movie-info'>
                    <aside className='movie-info-left'>
                        <h1 className='movie-info-title'>{movie.title}</h1>
                        <h3 className='movie-info-year'>{movie.year_released}</h3>
                        <aside>
                            <h5 className='movie-info-desc-label'>Description:</h5>
                            <p className='movie-info-description'>{movie.description}</p>
                        </aside>
                    </aside>
                    <aside className='movie-info-right'>
                        <p className='movie-info-score'>Score: <span className='movie-info-score-num'>{movie.score}</span></p>
                    </aside>
                </section>

                <section className='movie-comments-section'>
                <h1 className='movie-comments-title'>Comments</h1>
                    <div className='movie-comments'>{filteredComments}</div>
                    <h4>Add new comment</h4>
                    <textarea onChange={this.update('body')} 
                        value={this.state.body}></textarea>
                    <button onClick={this.addComment}>Comment</button>
                </section>
            </div>
        )
    }
};

export default Movie