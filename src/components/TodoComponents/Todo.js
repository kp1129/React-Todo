//<Todo /> is a component that takes in the todo data and displays the task to the screen.
import React from 'react';
import './Todo.css';

const Todo = (props) => {
    return (
        <div 
        onClick={() => props.toggleCompleted(props.data.id)}
        className={props.data.completed ? 'completed' : ""}>
            <p>{props.data.task}</p>
            </div>
    )
}

export default Todo;