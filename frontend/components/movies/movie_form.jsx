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

    handleFile(e) {
        this.setState({ photoFile: e.currentTarget.files[0] })
    }
    handleCreate(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('movie[id]', this.state.id)
        formData.append('movie[title]', this.state.title)
        formData.append('movie[year_released]', this.state.year_released)
        formData.append('movie[score]', this.state.score)
        formData.append('movie[description]', this.state.description)
        if (this.state.photoFile) {
            formData.append('movie[photo]', this.state.photoFile)
        }
        this.props.createMovie(formData)
            .then(() => this.props.fetchMovies())
            .then(() => {
                if (this.props.errors.length <= 0) {
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
                <h3 className='movie-form-title'>Add New Movie</h3>
                { this.renderErrors() }
                <label className='movie-form-label'>Movie Title:</label>
                <input type="text" onChange={this.update('title')}
                    value={this.state.title} className='movie-form-input'/>
                <label className='movie-form-label'>Year Released:</label>
                <input type="text" onChange={this.update('year_released')}
                    value={this.state.year_released} className='movie-form-input'/>
                <label className='movie-form-label'>Description:</label>
                <textarea onChange={this.update('description')} 
                    className='movie-form-input'></textarea>
                <label className='movie-form-label'>Movie Image:</label>
                <input type="file" onChange={this.handleFile.bind(this)}
                    className='movie-form-photofile'/>
                <button className='movie-form-submit'
                    onClick={this.handleCreate}>Add Movie</button>
            </form>
        )
    }
};

export default MovieForm;