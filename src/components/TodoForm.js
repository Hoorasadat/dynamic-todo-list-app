import './TodoForm.css';

function TodoForm( { onTaskAdd }) {

	const handleSubmit = (event) => {
		event.preventDefault();
		onTaskAdd(event.target.task.value);
		event.target.task.value = '';
	}

	return (
		<>
			<form onSubmit={ handleSubmit }>
				<input type="text" name="task" placeholder="Type a new task here"/>
				<button>Add&nbsp;Task</button>
			</form>
		</>
	);
}

export default TodoForm;
