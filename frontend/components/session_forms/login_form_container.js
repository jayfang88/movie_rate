import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mSTP = state => ({
    errors: state.errors.session,
    formType: 'Log In',
});

const mDTP = dispatch => ({
    action: user => dispatch(login(user)),
    switchForm: (
        <a onClick={() => dispatch(openModal('signup'))}
            className='switch-session-form'>Sign up here</a>
    ),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(SessionForm);