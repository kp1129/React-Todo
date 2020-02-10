import React from 'react';
import './TodoForm.css';

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
                <input className='userInput' type='text' placeholder='// add task to do' value={this.state.userInput} onChange={this.handleChange}/>
                {console.log(this.state.userInput)}
             
                <input className='submitBtn' type='submit' value='Add'/>
                <input className='clearBtn' type='button' value='Clear Completed' onClick={this.props.clearCompleted} />
                
                </form>
            </div>
        )
    }
    
}

export default TodoForm;