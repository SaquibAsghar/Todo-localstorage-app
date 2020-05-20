import React, { useState } from "react";
import {
	FormGroup,
	Input,
	Button,
	InputGroup,
	InputGroupAddon,
	Form,
	Container,
} from "reactstrap";
import { v4 } from "uuid";

const TodoForm = ({ addTodos }) => {
	const [todoString, setTodoString] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (todoString === "") {
			alert("Please enter some value");
		}
		const todo = {
			todoString,
			id: v4(),
		};

		addTodos(todo);

		setTodoString("");
	};
	return (
		<Form onSubmit={handleSubmit}>
			<FormGroup>
				<InputGroup>
					<Input
						type="text"
						name="todo"
						id="todo"
						placeholder="Enter a string"
						value={todoString}
						onChange={(e) => {
							setTodoString(e.target.value);
						}}
					/>
					<InputGroupAddon addonType="prepend">
						<Button color="success">Add ToDo</Button>
					</InputGroupAddon>
				</InputGroup>
			</FormGroup>
		</Form>
	);
};

export default TodoForm;
