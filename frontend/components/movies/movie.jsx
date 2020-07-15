import React from 'react';

class Movie extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchMovies();
        window.scrollTo(0,0);
    }

    render() {
        if (!this.props.movie) return null;
        const { movie } = this.props;

        return(
            <div>
                <img src={movie.photoUrl} className='movie-photo'/>
                <h1>{movie.title}</h1>
                <h3>{movie.year_released}</h3>
                <p>Score: {movie.score}</p>
                <h5>Description:</h5>
                <p>{movie.description}</p>
            </div>
        )
    }
};

export default Movie