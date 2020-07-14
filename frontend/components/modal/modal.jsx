import { connect } from 'react-redux';
import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import MovieFormContainer from '../movies/movie_form_container';

function Modal({modal, closeModal}) {
    if (!modal) {
        return null;
    }
    
    let component;
    
    switch(modal.modal) {
        case 'new-movie':
            component = <MovieFormContainer />;
            break;
        default:
            return null;
    }

    return (
        <div className='modal-background' onClick={closeModal}>
            <div className='modal-child' onClick={e => e.stopPropagation()}>
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