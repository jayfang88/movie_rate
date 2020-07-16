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
            <CommentItem key={i} comment={comment}/>
        ))
        return(
            <div className='movie-show'>
                <img src={movie.photoUrl} className='movie-photo'/>
                <section className='movie-info'>
                    <h1>{movie.title}</h1>
                    <h3>{movie.year_released}</h3>
                    <p>Score: {movie.score}</p>
                    <h5>Description:</h5>
                    <p>{movie.description}</p>
                </section>

                <section className='movie-comments'>
                    <h4>Add new comment</h4>
                    <textarea onChange={this.update('body')} value={this.state.body}></textarea>
                    <button onClick={this.addComment}>Comment</button>
                    <p>COMMENTS</p>
                    <div>{filteredComments}</div>
                </section>
            </div>
        )
    }
};

export default Movie