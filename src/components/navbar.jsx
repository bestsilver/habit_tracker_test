import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="habit-nav">
                    <i className="navbar-logo fas fa-apple-alt"></i>
                    <span>Habit Tracker</span>
                    <span className="habit-nav-count">{this.props.totalCount}</span>
                </nav>
            </>

        );
    }
}

export default Navbar;