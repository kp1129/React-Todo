
//<TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.

import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div>
            {props.list.map(item => {
                return <Todo data={item} />
            })}
        </div>
    )
}

export default TodoList;