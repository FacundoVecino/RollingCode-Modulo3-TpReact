//--------------Importaciones---------------
// Estilos
import './ListToDo.css'

// Componentes
import ToDoForm from "../ToDoForm/ToDoForm"
import { useState, useEffect } from 'react'
import ToDo from '../ToDo/ToDo'
import Swal from 'sweetalert2'

const ListToDo = () => {
    const [todos, setToDos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

    useEffect(() => {
        console.log("Guardando tareas en el localStorage");
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addToDo = (todo) => {
        if (todo.text.trim()) {
            todo.text = todo.text.trim();
            const updatedToDos = [todo, ...todos];
            setToDos(updatedToDos);

            if (todos.length === 5) {
                return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Basta, me vas a romper el CSS! Ahora borrate algunas tareas',
                })
            }
        }
    }

    const deleteToDo = (id) => {
        const updatedToDos = todos.filter(todo => todo.id !== id);
        setToDos(updatedToDos);
    }

    const completedToDo = (id) => {
        const updatedToDos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setToDos(updatedToDos);
    }

    return (
        <>
            <ToDoForm onSubmit={addToDo} />
            <div className="list-to-do-container">
                {
                    todos.map((todo) =>
                        <ToDo
                            key={todo.id}
                            id={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                            deleteToDo={deleteToDo}
                            completedToDo={completedToDo}
                        />
                    )
                }
            </div>
        </>
    )
}

export default ListToDo
