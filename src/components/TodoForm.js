import { useState } from 'react';
import './TodoForm.css';

function TodoForm( { onTaskAdd }) {

	const [errors, setErrors] = useState([]);

	const handleSubmit = (event) => {
		event.preventDefault();
		onTaskAdd(event.target.task.value.trim());
		event.target.task.value = '';
	}

	const handleValidation = (event) => {
		const newErrors = [];
		const { name, value } = event.target;


		if (name === 'task' && value.trim() === '') {
			newErrors.push('Task cannot be empty');
		}
		setErrors(newErrors);
	}

	return (
		<>
			<form onSubmit={ handleSubmit }>
				<div className="form-group">
					<input
						type="text"
						name="task"
						placeholder="Type a new task here"
						onChange={handleValidation}
					/>

					<button type='submit' disabled={errors.length > 0}>Add&nbsp;Task</button>
				</div>
				{ errors.length > 0 && errors.map((error, index) => <li key={ index } className="error">{ error }</li> ) }
			</form>
		</>
	);
}

export default TodoForm;
