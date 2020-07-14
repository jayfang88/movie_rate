import React from 'react';

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        this.props.fetchMovies();
    }
    
    render() {
        if (!this.props.movies) return null;
        
        let movies = this.props.movies.map((movie, i) => (
            <li key={i}>
                <h4>{movie.title}</h4>
                <p>{movie.year_released}</p>
                <p>Rating: {movie.score}</p>
                <p>About: {movie.description}</p>
            </li>
        ));

        return(
            <div>
                <section>
                    <h2>Movies</h2>
                    { movies }
                </section>
            </div>
        )
    }
};

export default Splash;