import { useState } from 'react';

const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	const handleOnChange = (e) => {
		setInputValue(e.target.value);
	};


	const handleOnClick = () => {
		setTodos([...todos, inputValue]);
		setInputValue("");
	};

	const handleDelete = (index) => {
		const updatedTodos = todos.filter((_, i) => i !== index);
		setTodos(updatedTodos);
	};

	return (
		<div className='container'>
			<h2>To do</h2>
			<div className='container__input'>
				<input
					type="text"
					value={inputValue}
					onChange={handleOnChange}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							handleOnClick();
						}
					}}
				/>
				<button className='btn-add' onClick={handleOnClick}>Add</button>
			</div>
			<ul>
				{todos.length > 0 ? (
					todos.map((todo, index) => (
						<li key={index}>
							{todo}
							<button className='btn-delete' onClick={() => handleDelete(index)}>
								Delete
							</button>
						</li>
					))
				) : (
					<p>No hay tareas aún</p>
				)}
			</ul>
		</div>
	);
};

export default Home