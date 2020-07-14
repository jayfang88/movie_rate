import React from 'react';
import { Link } from 'react-router-dom';

class MovieIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchMovies();
    }

    delete(movieId) {
        this.props.deleteMovie(movieId)
            .then(console.log('success'))
    }

    render() {
        if (!this.props.movies) return null;

        let movies = this.props.movies.map((movie, i) => (
            <li key={i}>
                <Link to={`/m/${movie.id}`}>{movie.title} - {movie.year_released}</Link>
                <p>Overall Rating: {movie.score}</p>
                <p>Summary: {movie.description}</p>
                <button onClick={() => this.delete(movie.id)}>Delete movie</button>
                <br/><br/>
            </li>
        ))
        return(
            <div className='movie-index-page'>
                <h1 className='movie-index-title'>Movies</h1>
                { movies }
            </div>
        )
    }
};

export default MovieIndex;