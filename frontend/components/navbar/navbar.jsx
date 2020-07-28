import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    handleLogout() {
        this.props.logout().then(() => location.reload());
    }

    createMovie() {
        this.props.openModal('new-movie');
    }

    render() {
        let currentUser = this.props.currentUser;
        return (
            <div className='navbar'>
                {/* Create MovieRate Logo? */}
                <section className='nav-logo-section'>
                    <Link className='logo-link' to='/'><h3><span className='red'>Movie</span>Rate</h3></Link>
                </section>
                
                {currentUser ? (
                    <section className='nav-section'>
                        <button onClick={() => this.createMovie()}
                            className='nav-add'>Add New
                        </button>
                        <p className='nav-user'>Signed in as: {currentUser.name[0].toUpperCase()}</p>
                        <button onClick={() => this.handleLogout()}
                            className='nav-logout'>Log Out
                        </button>
                    </section>
                ) : (
                    <section className='nav-section'>
                        <button onClick={() => this.props.openModal('login')}
                            className='nav-btn'>Log In</button>
                        <button onClick={() => this.props.openModal('signup')}
                            className='nav-btn'>Sign Up</button>
                    </section>
                )}
            </div>
        )
    }
};

export default NavBar;