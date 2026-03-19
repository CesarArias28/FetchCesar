import { useState, useEffect } from "react";

const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	const userName = "cesar_arias";
	const baseUrl = `https://playground.4geeks.com/todo/users/${userName}`;
	const todoUrl = `https://playground.4geeks.com/todo/todos`;

	const cargarTareas = () => {
		fetch(baseUrl)
			.then(resp => resp.json())
			.then(datos => setTodos(datos.todos))
			.catch(error => console.log(error)); }


const crearTarea = (texto) => {
	const crearNuevaTarea = { label: texto, is_done: false };

	fetch(`${todoUrl}/${userName}`, {
		method: "POST",
		body: JSON.stringify(crearNuevaTarea),
		headers: { "Content-Type": "application/json" }})
		.then(resp => {
			if (resp.ok) {
				cargarTareas();
			}
		})
		.catch(error => console.log(error))
}

const eliminarTarea = (id) => {
	fetch(`${todoUrl}/${id}`, {
		method: "DELETE",
	})
		.then(resp => {
			if (resp.ok) {
				cargarTareas();
			}
		})
		.catch(error => console.log(error));
};

  useEffect(() => {
        cargarTareas();
    }, []);


return (

	<div className="container mt-5 d-flex flex-column align-items-center">
		<h1 className="display-1 text-primary opacity-25 fw-light mb-0">TodoList</h1>
		<div className="todo-card-container w-100" style={{ maxWidth: '550px' }}>
			<div className="card border-0 shadow-sm rounded-0">
				<input
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter" && inputValue.trim() !== "") {
							crearTarea(inputValue);
							setInputValue("");
						}
					}}
					type="text"
					className="form-control text-secondary form-control-lg border-0 border-bottom rounded-0 py-3 px-4"
					placeholder="¿Qué hay que hacer?" />
				<ul className="list-group">
					{todos.map((item) => (
						<li key={item.id} className="list-group-item py-3 px-4 fs-4 fw-light text-secondary border-bottom d-flex justify-content-between align-items-center">
							{item.label}
							<button
								type="button"
								className="btn-close"
								onClick={() => eliminarTarea(item.id)}
							></button>
						</li>
					))}
				</ul>
				<div className="card-footer bg-white border-0 py-2 px-3 text-muted small fw-light">
					{todos.length} {todos.length === 1 ? "item" : "items"} restantes
				</div>
			</div>
			<div className="stack-decorator-1"></div>
			<div className="stack-decorator-2"></div>
		</div>
	</div>
);

}

export default Home;
