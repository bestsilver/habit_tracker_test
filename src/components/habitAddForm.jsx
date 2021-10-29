import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
    inputRef = React.createRef()
    onSubmit = event => {
        event.preventDefault()
        const name = this.inputRef.current.value
        name && this.props.onAdd(name)
        this.inputRef.current.value = ""
    }

    render() {
        return (
            <form className="add-form" onSubmit={this.onSubmit}>
                <input type="text" className="add-input" placeholder="Habit" ref={this.inputRef}/>
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAddForm;