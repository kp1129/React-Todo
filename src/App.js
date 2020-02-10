import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      userInput: "test test",
      todos: [
        {
          task: 'cook dinner',
          id: Date.now(),
          completed: false
        },
        {
          task: 'prepare for tomorrow\'s lecture',
          id: Date.now(),
          completed: false
        }    
      ]   
    } 
  }

 addToDo = (task) => {
    this.setState((state, newItem) => {
      return [...state, newItem]
    })
  }

 handleChange = (event) => {
    this.setState({userInput: event.target.value});
  };
 
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <h3>{this.state.userInput}</h3>
        <TodoList list={this.state.todos}/>
        <TodoForm addToDo={this.addToDo} handleChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;
