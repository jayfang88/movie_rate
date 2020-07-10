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
                    <div>
                        <p>Logged in as: {currentUser.name}</p>
                        <button onClick={() => this.handleLogout()}
                            className='logout-btn'>Sign Out</button>
                    </div>
                ) : (
                    <div>
                        <Link to='/signup'>Sign Up</Link>
                        <Link to='/login'>Log In</Link>
                    </div>
                )}
            </div>
        )
    }
};

export default NavBar;