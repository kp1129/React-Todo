import React from 'react';
import './App.css';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import SearchForm from './components/TodoComponents/SearchForm';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      query: "",
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

  handleSearch = (event) => {
    if(event.target.value.trim() !== "" ){
      this.setState({query: event.target.value});
    } else {
      this.setState({query: ""})
    }    
  }

 
  render() {
    return (
      <div className="app">
        <h1>to do list</h1>
        <SearchForm handleSearch={this.handleSearch}/>
        <div className={this.state.todos.length === 0 ? "" : "instructions"}>
        <p>- add tasks you need to get done</p>
        <p>- click on finished items to cross them off</p>
        <p>- clear completed items off the list</p>
        </div>

        <TodoList list={this.state.todos} query={this.state.query} toggleCompleted={this.toggleCompleted}/>
        <TodoForm addToDo={this.addToDo} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
