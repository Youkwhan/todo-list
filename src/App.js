import { useState } from "react";
import "./App.css";
import { Task } from "./Task";

function App() {
	// So every time we add a new item to our list we want to rerender it so we should use a State
	const [todoList, setTodoList] = useState([]);
	const [newTask, setNewTask] = useState("");

	const handleChange = (event) => {
		setNewTask(event.target.value);
	};

	const addTask = () => {
		// each task is an task object and has their own unique id
		const task = {
			id: todoList.length + 1,
			taskName: newTask,
			completed: false,
		};

		setTodoList([...todoList, task]);
	};

	const deleteTask = (id) => {
		const newTodoList = todoList.filter((task) => {
			if (task.id === id) {
				return false;
			} else {
				return true;
			}
		});

		setTodoList(newTodoList);
	};

	const completeTask = (id) => {
		setTodoList(
			todoList.map((task) => {
				if (task.id === id) {
					// keep the object the same but chcange the field completed
					return { ...task, completed: true };
				} else {
					return task;
				}
			})
		);
	};

	return (
		<div className="App">
			<div className="addTask">
				<input onChange={handleChange} />
				<button onClick={addTask}>Add Task</button>
			</div>
			<dic className="list">
				{todoList.map((task) => {
					return (
						<Task
							taskName={task.taskName}
							id={task.id}
              completed={task.completed}
							deleteTask={deleteTask}
							completeTask={completeTask}
						/>
					);
				})}
			</dic>
		</div>
	);
}

export default App;
