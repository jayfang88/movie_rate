import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = state => ({
    errors: state.errors.session,
    formType: 'Sign Up',
});

const mDTP = dispatch => ({
    action: user => dispatch(signup(user)),
});

export default connect(mSTP, mDTP)(SessionForm);