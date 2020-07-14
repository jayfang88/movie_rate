import React from 'react';
import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mSTP = state => ({
    errors: state.errors.session,
    formType: 'Sign Up',
});

const mDTP = dispatch => ({
    action: user => dispatch(signup(user)),
    switchForm: (
        <a onClick={() => dispatch(openModal('login'))}
            className='switch-session-form'>Log in instead</a>
    ),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(SessionForm);