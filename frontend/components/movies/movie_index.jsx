import React from 'react';

class MovieIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        if (!this.props.movies) return null;
        // const { movies } = this.props;

        let movies = this.props.movies.map((movie, i) => (
            <li key={i}>
                <p>{movie.title} - {movie.year_released}</p>
                <p>Overall Rating: {movie.score}</p>
                <p>Summary: {movie.description}</p>
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