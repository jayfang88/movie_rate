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
        ));

        return(
            <div className='splash'>
                <section>
                    <h2 className='splash-movies-title'>Featured Movies</h2>
                    <div className='splash-movie-i'>{ movies }</div>
                    <div className='splash-all-movies'>
                        <Link to='/movies' className='splash-movies-link'>
                            See all movies</Link></div>
                </section>
            </div>
        )
    }
};

export default Splash;