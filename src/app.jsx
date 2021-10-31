import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

// import React, { Component,  } from 'react';
import React, { useCallback, useState } from 'react';

const App = (props) => { 
  const [habits, setHabits] = useState([
    { id: 1, 'name': 'Reading', count: 0 },
    { id: 2, 'name': 'Running', count: 0 },
    { id: 3, 'name': 'Coding', count: 0 }
])

  const handleIncrement = useCallback((habit) => {
    setHabits(habits =>
      habits.map(item => {
        if (item.id === habit.id) {
          return { ...habit, count: habit.count + 1 };
        }
        return item;
      })
    );
  }, [])

  const handleDecrement = useCallback((habit) => {
    setHabits(habits =>
      habits.map(item => {
        if (item.id === habit.id) {
          const count = habit.count - 1;
          return { ...habit, count: count < 0 ? 0 : count };
        }
        return item;
      })
    );
  }, [])

  const handleDelete = useCallback((habit) => {
    setHabits(habits => habits.filter(item => item.id !== habit.id));
    //이런식으로 할 수도 있다.
    //const habits = habits.filter(item => item.id !== habit.id)
  }, [])

  const handleReset = useCallback(() => {
    setHabits(habits =>
      habits.map(habit => {
        if (habit.count !== 0) {
          return { ...habit, count: 0 };
        }
        return habit;
      })
    )
  }, [])

  const handleAdd = useCallback((name) => {
    setHabits(habits => [...habits, { id: Date.now(), name, count: 0 }]);
  }, [])

  return (
    <React.Fragment>
      <Navbar totalCount={habits.filter(habit => habit.count > 0).length}></Navbar>
      <Habits habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAdd={handleAdd}
        onReset={handleReset}
      >
      </Habits>
    </React.Fragment>
  );
}

export default App;

// class App extends Component {

//   state = {
//     habits: [
//         { id: 1, 'name': 'Reading', count: 0 },
//         { id: 2, 'name': 'Running', count: 0 },
//         { id: 3, 'name': 'Coding', count: 0 }
//     ]
//   }


//   //리액트에서는 state를 직접 수정하면 안된다. setState(this.state) <- X
//   // state를 직접 수정하지 않는 이유가 리액트가 shallow comparison을 이용하기 때문이다.
//   handleIncrement = (habit) => {
//     // //직접적으로 배열의 state를 수정하면 좋지 않기 때문에 새로운 배열에 껍데기를 만든 것이다.
//     // const habits = [...this.state.habits]
//     // const index = habits.indexOf(habit)
//     // //직접 수정하지 좋지 않은 코드인데 바로 수정했다..이것도 좋지 않은 코드이다.
//     // habits[index].count++
//     // this.setState({habits})

//     const habits = this.state.habits.map(item => {
//       if (item.id === habit.id) {
//         // 기존 habit에 있는 모든 attribute를 기반으로 새로운 obj가 만들어진다. (deconstructing object)
//         // 이후 count만 덮어쓰기
//         return {...habit, count : habit.count + 1}
//       }

//       return item
//     })

//     this.setState({habits})
//   }

//   handleDecrement = (habit) => {
//     // const habits = [...this.state.habits]
//     // const index = habits.indexOf(habit)
//     // habits[index].count - 1 <= 0 ? habits[index].count = 0 : habits[index].count--
//     // this.setState({habits}) 

//     const habits = this.state.habits.map(item => {
//       if (item.id === habit.id) {
//         const count = item.count - 1
//         return {...habit, count : count < 0 ? 0 : count}
//       }
//       return item
//     })

//     this.setState({habits})
//   }

//   handleDelete = (habit) => {
//     const habits = [...this.state.habits]
//     const index = habits.indexOf(habit)
//     habits.splice(index, 1)
//     this.setState({habits})
//     //이런식으로 할 수도 있다.
//     //const habits = this.state.habits.filter(item => item.id !== habit.id)
//   }

//   handleReset = () => {
//     const habits = this.state.habits.map(habit => {
//       if (habit.count !== 0) {
//         return {...habit, count : 0}
//       }
//       return habit
//     })

//     this.setState({habits})
//   }

//   handleAdd = (name) => {
//     const habits = [...this.state.habits, 
//       {id : Math.random(), count : 0, name}]
//     this.setState({habits})
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <Navbar totalCount={this.state.habits.filter(habit => habit.count > 0).length}></Navbar>
//         <Habits habits={this.state.habits}
//           onIncrement={this.handleIncrement}
//           onDecrement={this.handleDecrement}
//           onDelete={this.handleDelete}
//           onAdd={this.handleAdd}
//           onReset={this.handleReset}
//         >
//         </Habits>
//       </React.Fragment>
//     );
//   }
// }

// export default App;
