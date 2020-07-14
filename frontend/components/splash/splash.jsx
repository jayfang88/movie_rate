import React from 'react';
import { Link } from 'react-router-dom';

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
                <Link to={`/m/${movie.id}`}>{movie.title}</Link>
                <p>{movie.year_released}</p>
                <p>Rating: {movie.score}</p>
                <p>About: {movie.description}</p>
                <br/>
            </li>
        ));

        return(
            <div>
                <section>
                    <h2>Featured Movies</h2>
                    { movies }
                    <Link to='/movies'>See all movies</Link>
                </section>
            </div>
        )
    }
};

export default Splash;