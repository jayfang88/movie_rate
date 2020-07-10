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
        this.props.action(this.state);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li className='error-message' key={`error-${i}`}>
                        {`${error}`}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        let signingUp = (this.props.formType === 'Sign Up');
        return (
            <div className='session-form'>
                <h3>{this.props.formType}</h3>
                <br/>
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
                    <p>Have an account?<Link className='switch-session-form' to='/login'>Log in instead</Link></p>
                ) : (
                    <p>Don't have an account?<Link className='switch-session-form' to='/signup'>Sign up here</Link></p>
                )}
            </div>
        )
    }
};

export default SessionForm;