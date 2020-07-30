import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            name: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.formType === 'Sign Up') {
            if (this.state.name !== '') {
                this.setState({ name: this.state.name[0].toUpperCase() + this.state.name.slice(1).toLowerCase()})
            }
        }
        this.props.action(this.state)
            .then(() => {
                if (this.props.errors.length <= 0) this.props.closeModal()});
    }

    renderErrors() {
        return (
            <ul className='session-errors-list'>
                {this.props.errors.map((error, i) => (
                    <li className='error-message' key={`error-${i}`}>
                        {`*${error}*`}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        let signingUp = (this.props.formType === 'Sign Up');
        return (
            <div className='session-form'>
                <h3 className='session-form-title'>{this.props.formType}</h3>
                {this.renderErrors()}
                <br/>
                <form className='session-form-box'>
                    <label className='session-form-section'>
                        Username<br/>
                        <input className='session-form-input' type="text"
                            value={this.state.username} onChange={this.update('username')}/>
                    </label>
                    <br/>
                    {signingUp ? (
                        <label className='session-form-section'>
                            Name<br />
                            <input className='session-form-input' type="text"
                                value={this.state.name} onChange={this.update('name')} />
                        </label>
                    ) : (
                        <div></div>
                    )}
                    {signingUp ? ( <br/> ) : ( <div></div> )}
                    <label className='session-form-section'>
                        Password<br/>
                        <input className='session-form-input' type="password"
                            value={this.state.password} onChange={this.update('password')}/>
                    </label>
                    <br/>
                    <button className='session-form-btn' onClick={this.handleSubmit}>
                        {this.props.formType}
                    </button>
                </form>
                {signingUp ? (
                    <p className='session-form-under'>Have an account? {this.props.switchForm}</p>
                ) : (
                    <p className='session-form-under'>Don't have an account? {this.props.switchForm}</p>
                )}
            </div>
        )
    }
};

export default SessionForm;