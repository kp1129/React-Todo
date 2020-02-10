import React from 'react';
import './App.css';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: []   
    } 
  }
  
 addToDo = (task) => {

    const newTask = {
      id: Date.now(),
      completed: false,
      task: task
    }

    this.setState({todos: [...this.state.todos, newTask]})
  };
  
  toggleCompleted = (id) => {
    const newList = this.state.todos.map(item => {
      if (item.id === id){
        return {
          ...item,
          completed: !item.completed
        }
      } else {
        return item;
      }
    });
    this.setState({todos: newList});
  };

  clearCompleted = () => {
    const filtered = this.state.todos.filter(item => {
      return item.completed === false;
    })
    this.setState({todos: filtered})
  }

 
  render() {
    return (
      <div className="app">
        <h1>to do list</h1>

        <TodoList list={this.state.todos} toggleCompleted={this.toggleCompleted}/>
        <TodoForm addToDo={this.addToDo} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
