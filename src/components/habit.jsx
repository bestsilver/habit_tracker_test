// import React, { PureComponent } from 'react';
import React, { memo } from 'react';

const Habit = memo((props) => {
    const handleIncrement = () => {
        props.onIncrement(props.habit);
    }
    const handleDecrement = () => {
        props.onDecrement(props.habit);
    }
    const handleDelete = () => {
        props.onDelete(props.habit);
    }

    //habit안에 있는 동일한 이름을 써야함
    const {name, count} = props.habit
    return (
        <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button className="habit-button habit-increase" onClick={handleIncrement}>
            <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={handleDecrement}>
            <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete" onClick={handleDelete}>
            <i className="fas fa-trash"></i>
        </button>
        </li>
    );
}
)
export default Habit;

// class Habit extends PureComponent {

//     handleIncrement = () => {
//         this.props.onIncrement(this.props.habit);
//     }
//     handleDecrement = () => {
//         this.props.onDecrement(this.props.habit);
//     }
//     handleDelete = () => {
//         this.props.onDelete(this.props.habit);
//     }
//     render() {
//         //habit안에 있는 동일한 이름을 써야함
//         const {name, count} = this.props.habit
//         return (
//             <li className="habit">
//             <span className="habit-name">{name}</span>
//             <span className="habit-count">{count}</span>
//             <button className="habit-button habit-increase" onClick={this.handleIncrement}>
//                 <i className="fas fa-plus-square"></i>
//             </button>
//             <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
//                 <i className="fas fa-minus-square"></i>
//             </button>
//             <button className="habit-button habit-delete" onClick={this.handleDelete}>
//                 <i className="fas fa-trash"></i>
//             </button>
//             </li>
//         );
//     }
// }
// export default Habit;