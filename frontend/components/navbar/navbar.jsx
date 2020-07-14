import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    handleLogout() {
        this.props.logout().then(() => location.reload());
    }

    createMovie() {
        this.props.openModal('new-movie');
        console.log('opening modal to enter new movie')
    }

    render() {
        let currentUser = this.props.currentUser;
        return (
            <div className='navbar'>
                {/* Replace link below with MovieRate Logo */}
                <section className='nav-logo-section'>
                    <Link className='logo-link' to='/'><h3><span className='red'>M</span>R</h3></Link>
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
                        <Link to='/login' className='nav-link'>Log In</Link>
                        <Link to='/signup' className='nav-link'>Sign Up</Link>
                    </section>
                )}
            </div>
        )
    }
};

export default NavBar;