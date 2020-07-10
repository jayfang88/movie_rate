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
        let formType = this.props.formType;
        return (
            <div className='session-form'>
                {formType === 'Sign Up' ? (
                    <h3>Sign Up</h3>
                ) : (
                    <h3>Log In</h3>
                )}
            </div>
        )
    }
};

export default SessionForm;