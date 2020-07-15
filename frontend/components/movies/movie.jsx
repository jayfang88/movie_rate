import React from 'react';

class Movie extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchMovies();
        this.props.fetchComments();
        window.scrollTo(0,0);
    }

    render() {
        if (!this.props.movie) return null;
        const { movieId, movie, comments, commentIds } = this.props;
        let filteredComments = [];
        for (let id of commentIds) {
            if (comments[id].movie_id.toString() === movieId) {
                filteredComments.push(comments[id]);
            }
        }
        filteredComments = filteredComments.map(comment => (
            <ul>
                <li>{comment.body}</li>
            </ul>
        ))
        
        return(
            <div>
                <img src={movie.photoUrl} className='movie-photo'/>
                <h1>{movie.title}</h1>
                <h3>{movie.year_released}</h3>
                <p>Score: {movie.score}</p>
                <h5>Description:</h5>
                <p>{movie.description}</p>
                <br/><br/>
                <p>COMMENTS</p>
                <div>{filteredComments}</div>
            </div>
        )
    }
};

export default Movie