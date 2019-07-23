import React from 'react';
import PropsTypes from 'prop-type';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => (
	<ul>
		{
			todos.map((todo, index) => (
				<Todo key={index} {...todo} onClick={() => onTodoClick(index)}/>
			))
		}
	</ul>
)

TodoList.propTypes = {
	todos: PropsTypes.arrayOf(
		PropsTypes.shape({
			id: PropsTypes.number.isRequired,
			completed: PropsTypes.bool.isRequired,
			text: PropsTypes.string.isRequired
		}).isRequired
	).isRequired,
	onTodoClick: PropsTypes.func.isRequired
}

export default TodoList