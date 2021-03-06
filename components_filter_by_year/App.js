import React, { Component } from 'react'; //??
//import logo from './logo.svg';
import './App.css';
import tasks from './sample/tasks.json';

import Tasks from './components/Tasks';
// console.log(task);

class App extends Component {

  state = {
    tasks: tasks
  }

  render() {
    return <div>
      <Tasks tasks={this.state.tasks}/>

    </div>
  }
}


export default App;
