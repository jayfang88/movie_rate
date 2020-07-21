import React from 'react';
import { Link } from 'react-router-dom';

class MovieIndexItem extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { movie } = this.props;
        return(
            <div className='movie-ii'>
                <img src={movie.photoUrl} alt={`${movie.title} image`} 
                    className='movie-ii-photo'/>
                <p className='movie-ii-head'><Link to={`/m/${movie.id}`} className='movie-ii-title'>
                    {movie.title}</Link> - 
                    <span> ({movie.year_released})</span>
                </p>
                <p>Rating: {movie.score}</p>
                {/* <p>About: {movie.description}</p> */}
            </div>
        )
    }
};

export default MovieIndexItem;