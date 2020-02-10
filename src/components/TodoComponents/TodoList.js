import React from 'react';
import './TodoList.css';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div className='centered'>
            <ul>
            {props.list.map(item => {
                return <Todo data={item} toggleCompleted={props.toggleCompleted} />
            })}
            </ul>
        </div>
    )
}

export default TodoList;