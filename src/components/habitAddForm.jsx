import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
    const inputRef = React.createRef()
    const onSubmit = event => {
        event.preventDefault()
        const name = inputRef.current.value
        name && props.onAdd(name)
        inputRef.current.value = ""
    }

    return (
        //함수이기 때문에 this로 접근하지 않아도 된다.
        <form className="add-form" onSubmit={onSubmit}>
            <input type="text" className="add-input" placeholder="Habit" ref={inputRef}/>
            <button className="add-button">Add</button>
        </form>
    );
})

export default HabitAddForm;