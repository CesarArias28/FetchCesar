import { use } from "react";
import { useState, useEffect } from "react";

const Home = () => 
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	const userName = "cesar_arias";
	const baseUrl = `https://playground.4geeks.com/todo/users/${userName}`;
	const todoUrl = `https://playground.4geeks.com/todo/todos`;
	
const cargarTareas = () => {
    fetch(baseUrl)
        .then(resp => resp.json())
        .then(datos => setTodos(datos.todos))
        .catch(error => console.log(error));
};

useEffect(() => {
    cargarTareas();
}, []);


const crearTarea = (texto) => {
const crearNuevaTarea = {label: texto, is_done: false};

	 fetch(`${todoUrl}/${userName}`, {
            method: "POST",
            body: JSON.stringify(crearNuevaTarea),
            headers: { "Content-Type": "application/json" }
        }) 
	}

	