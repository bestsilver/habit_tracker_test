import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        const habitsCount = this.props.habits.filter(habit => habit.count > 0).length
        return (
            <>
                <div className="habit-nav">
                    <span className="habit">Habit Tracker</span>
                    <span className="habit-nav-count">{habitsCount}</span>
                </div>
            </>

        );
    }
}

export default Navbar;