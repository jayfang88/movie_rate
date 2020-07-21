import React from 'react';
import { Link } from 'react-router-dom';
import MovieIndexItem from '../movies/movie_index_item';

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
            <MovieIndexItem key={i} movie={movie} />
            // <li key={i}>
            //     <Link to={`/m/${movie.id}`}>{movie.title}</Link>
            //     <p>{movie.year_released}</p>
            //     <p>Rating: {movie.score}</p>
            //     <p>About: {movie.description}</p>
            //     <br/>
            // </li>
        ));

        return(
            <div className='splash'>
                <section>
                    <h2 className='splash-movies-title'>Featured Movies</h2>
                    <div className='splash-movie-i'>{ movies }</div>
                    <Link to='/movies' className='splash-all-movies'>See all movies</Link>
                </section>
            </div>
        )
    }
};

export default Splash;