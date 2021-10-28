import './app.css';
import Habits from './components/habits';

import React, { Component,  } from 'react';
import Navbar from './components/navbar';

class App extends Component {

  state = {
    habits: [
        { id: 1, 'name': 'Reading', count: 0 },
        { id: 2, 'name': 'Running', count: 0 },
        { id: 3, 'name': 'Coding', count: 0 }
    ],
    input: ""
  }

  handleUpdateInput = (event) => {
    this.setState({'input' : event.target.value})
  }

  handleAddHabit = (event) => {
    // event.preventDefault();
    if (this.state.input.length <= 0) {
      return;
    }
    this.setState((state, props) => {
      const inputHabit = state.input
      const habits = [...state.habits, 
        {'id' : Math.random(), 'count' : 0, 'name' : inputHabit}]
      
      return {
        habits,
        input: ''
      }
    })

  }

  //리액트에서는 state를 직접 수정하면 안된다. this.setState(this.state) <- X
  handleIncrement = (habit) => {
    //직접적으로 배열의 state를 수정하면 좋지 않기 때문에 새로운 배열에 껍데기를 만든 것이다.
    const habits = [...this.state.habits]
    const index = habits.indexOf(habit)
    //직접 수정하지 좋지 않은 코드인데 바로 수정했다..이것도 좋지 않은 코드이다.
    habits[index].count++
    this.setState({habits})
  }

  handleDecrement = (habit) => {
    const habits = [...this.state.habits]
    const index = habits.indexOf(habit)
    habits[index].count - 1 <= 0 ? habits[index].count = 0 : habits[index].count--
    this.setState({habits}) 
  }

  handleDelete = (habit) => {
    const habits = [...this.state.habits]
    const index = habits.indexOf(habit)
    habits.splice(index, 1)
    this.setState({habits})
    //이런식으로 할 수도 있다.
    //const habits = this.state.habits.filter(item => item.id !== habit.id)
  }

  handleReset = () => {
    const habits = [
      { id: 1, 'name': 'Reading', count: 0 },
      { id: 2, 'name': 'Running', count: 0 },
      { id: 3, 'name': 'Coding', count: 0 }
    ]
    
    this.setState({
      habits,
      input: ''
    })
  }

  render() {
    return (
      <React.Fragment>
        <Navbar habits={this.state.habits}></Navbar>
        <input type="text" className="habit-input" onChange={this.handleUpdateInput} value={this.state.input}/>
        <button className="habit-add-btn" onClick={this.handleAddHabit}>add</button>
        <Habits habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        >
        </Habits>
        <button className="habits-reset" onClick={this.handleReset}>Reset All</button>
      </React.Fragment>
    );
  }
}

export default App;
