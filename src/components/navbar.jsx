import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
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