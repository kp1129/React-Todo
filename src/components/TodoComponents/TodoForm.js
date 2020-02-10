// <TodoForm> will hold your input field and your Add Todo and Clear Completed buttons.

//Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
//Once a todo is submitted, the Todo List should re-render and show the added todo.

import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            userInput: ""
        }
    }

    handleChange = (event) => {
        this.setState({userInput: event.target.value});
      };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addToDo(this.state.userInput);
        this.setState({userInput: ""});
    }
    

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='add thing to do' value={this.state.userInput} onChange={this.handleChange}/>
                {console.log(this.state.userInput)}
                <input type='submit'/>
                <input type='button' value='Clear Completed' onClick={this.props.clearCompleted} />
                </form>
            </div>
        )
    }
    
}

export default TodoForm;