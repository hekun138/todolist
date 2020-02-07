import React, { Component } from 'react'

export default class AddTodo extends Component {

  handleClick = () => {
    this.props.addTodo(this.props.text);
  }

  handleChange = (e) => {
   this.props.setTodoText(e.target.value);
  }

  render() {
    return (
      <div>
        <input value={this.props .text} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Add</button>
      </div>
    )
  }
}
