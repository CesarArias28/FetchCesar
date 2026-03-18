import { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";



const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	let conteo = todos.length;
	const eliminarTarea = (indiceAEliminar) => {
		const nuevosTodos = todos.filter((item, index) => index !== indiceAEliminar);
		setTodos(nuevosTodos);
	}; return (


		<div className="container mt-5 d-flex flex-column align-items-center">
			<h1 className="display-1 text-primary opacity-25 fw-light mb-0">TodoList</h1>

			<div className="todo-card-container w-100" style={{ maxWidth: '550px' }}>
				<div className="card border-0 shadow-sm rounded-0">
					<input
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								setTodos([...todos, inputValue]);
								setInputValue("");
							}
						}}

						type="text"
						className="form-control text-secondary  form-control-lg  border-0 border-bottom rounded-0 py-3 px-4"
						placeholder="Escribe tus tareas acá" />
					<ul className="list-group">

						{todos.map((item, index) => (
							<li key={index} className="list-group-item py-3 px-4 fs-4 fw-light text-secondary border-bottom d-flex justify-content-between">
								{item}
								<button type="button" class="btn-close " aria-label="Close"
									onClick={() => eliminarTarea(index)}></button>

							</li>
						))}
					</ul>



					<div className="card-footer bg-white border-0 py-2 px-3 text-muted small fw-light">
						{todos.length} {todos.length === 1 ? "restantes" : "items"} restantes
					</div>
				</div>

				<div className="stack-decorator-1"></div>
				<div className="stack-decorator-2"></div>
			</div>
		</div >
	);
};

export default Home;