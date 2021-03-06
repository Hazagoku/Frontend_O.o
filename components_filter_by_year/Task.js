import React, { Component } from 'react';

class Task extends Component {
    render() {
        return <div>
            {this.props.task.title} 
            {this.props.task.done} 
            <input type="checkbox" />
            <button>
                X
            </button>
          
        </div>
    }
}

export default Task;