import React, { Component, useState } from 'react';

const SimpleHabit = (props) => {

  /*
    초기값은 0이다.
    useState를 사용하면 React에서 두가지를 return해준다.
    1) 실제의 state값 (count)
    2) state를 업데이트 할 수 있는 함수 (setCount)
  */
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1)
  };

  return (
    <li className="habit">
      <span className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button
        className="habit-button habit-increase"
        onClick={handleIncrement}
      >
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
}

// class SimpleHabit extends Component {
//   state = {
//     count: 0,
//   };

//   handleIncrement = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <li className="habit">
//         <span className="habit-name">Reading</span>
//         <span className="habit-count">{this.state.count}</span>
//         <button
//           className="habit-button habit-increase"
//           onClick={this.handleIncrement}
//         >
//           <i className="fas fa-plus-square"></i>
//         </button>
//       </li>
//     );
//   }
// }

export default SimpleHabit;
