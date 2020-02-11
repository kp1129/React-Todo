import React from 'react';
import './TodoList.css';
import Todo from './Todo';

const TodoList = (props) => {

    let displayList = props.list;
    if(props.query !== ""){
        displayList = props.list.filter(item => 
            !item.completed && item.task.toLowerCase().includes(props.query.toLowerCase()));
    }

    return (
        <div className='centered'>
            <ul>
            {displayList.map(item => {
                return <Todo data={item} toggleCompleted={props.toggleCompleted} />
            })}
            </ul>
        </div>
    )
}

export default TodoList;