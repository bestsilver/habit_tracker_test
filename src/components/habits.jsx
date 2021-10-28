import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {

    handleIncrement = (habit) => {
        this.props.onIncrement(habit)
    }

    handleDecrement = (habit) => {
        this.props.onDecrement(habit)
    }

    handleDelete = (habit) => {
        this.props.onDelete(habit)
    //이런식으로 할 수도 있다.
    //const habits = this.state.habits.filter(item => item.id !== habit.id)
    }

    handleAdd = (name) => {
        this.props.onAdd(name)
    }



    render() {
        return (
            <>
                <HabitAddForm onAdd={this.handleAdd}></HabitAddForm>
                <ul>
                    {
                        this.props.habits.map(habit => (
                            <Habit habit={habit} key={habit.id}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                            onDelete={this.handleDelete}
                            ></Habit>
                        ))
                    }
                </ul>
                <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
            </>

        );
    }
}

export default Habits;