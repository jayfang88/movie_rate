import React from 'react';

class MovieForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.movie
        this.handleCreate = this.handleCreate.bind(this)
    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState({ errors: nextProps.errors })
    // }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleCreate(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('movie[id]', this.state.id)
        formData.append('movie[title]', this.state.title)
        formData.append('movie[year_released]', this.state.year_released)
        formData.append('movie[score]', this.state.score)
        formData.append('movie[description]', this.state.description)
        this.props.createMovie(formData)
            .then(() => this.props.fetchMovies())
            .then(() => {
                if (this.state.errors.length <= 0) {
                    this.props.closeModal();
                }
            });
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li className='error-message' key={`error-${i}`}>
                        {`*${error}`}
                    </li>
                ))}
            </ul>
        )
    }

    render() {

        return(
            <form className='movie-form'>
                <h3>Add New Movie</h3>
                { this.renderErrors() }
                <label>Movie Title:<br/>
                    <input type="text" onChange={this.update('title')}
                        value={this.state.title}/>
                </label>
                <br/>
                <label>Year Released:<br/>
                    <input type="text" onChange={this.update('year_released')}/>
                </label>
                <br/>
                <label>
                    Description: <br/><textarea onChange={this.update('description')}></textarea>
                </label>
                <br/>
                <button onClick={this.handleCreate}>Add Movie</button>
            </form>
        )
    }
};

export default MovieForm;