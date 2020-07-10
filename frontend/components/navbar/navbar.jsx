import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    handleLogout() {
        this.props.logout().then(() => location.reload());
    }

    render() {
        let currentUser = this.props.currentUser;
        return (
            <div className='navbar'>
                {/* Replace link below with MovieRate Logo */}
                <Link to='/'><h3>MovieRate</h3></Link>
                
                {currentUser ? (
                    <div className='nav-btn'>
                        <div>Logged in as: {currentUser.name[0].toUpperCase()}</div>
                        <button onClick={() => this.handleLogout()}
                            className='logout-btn'>Sign Out</button>
                    </div>
                ) : (
                    <div className='nav-btn'>
                        <Link to='/signup'>Sign Up</Link>
                        <Link to='/login'>Log In</Link>
                    </div>
                )}
            </div>
        )
    }
};

export default NavBar;