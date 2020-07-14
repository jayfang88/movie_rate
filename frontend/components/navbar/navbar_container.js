import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(NavBar);