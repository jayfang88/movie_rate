import { connect } from 'react-redux';
import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import MovieFormContainer from '../movies/movie_form_container';
import SignupFormContainer from '../session_forms/signup_form_container';
import LoginFormContainer from '../session_forms/login_form_container';

function Modal({modal, closeModal}) {
    if (!modal) {
        return null;
    }
    
    let component;
    let childClass;
    
    switch(modal.modal) {
        case 'signup':
            component = <SignupFormContainer />;
            childClass = 'modal-session-form';
            break;
        case 'login':
            component = <LoginFormContainer />;
            childClass = 'modal-session-form';
            break;
        case 'new-movie':
            component = <MovieFormContainer />;
            childClass = 'modal-movie-form';
            break;
        default:
            return null;
    }

    return (
        <div className='modal-background' onClick={closeModal}>
            <div className={childClass} onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
};

const mstp = state => ({
    modal: state.ui.modal
});

const mdtp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
});

export default connect(mstp, mdtp)(Modal);