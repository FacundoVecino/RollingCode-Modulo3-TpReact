//--------------Importaciones---------------
// Estilos
import './ListToDo.css'

// Componentes
import ToDoForm from "../ToDoForm/ToDoForm"
import { useState } from 'react'
import ToDo from '../ToDo/ToDo';
import Swal from 'sweetalert2'

const ListToDo = () => {

    const [todos, setToDos] = useState([]);
    const [count, setCount] = useState(1);

    const addToDo = (todo) => {
        if(todo.text.trim()) {
            todo.text = todo.text.trim();
            const updatedToDos = [todo, ...todos];
            setToDos(updatedToDos);

            setCount(count + 1)
            if(count === 5){
                return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Basta, me vas a romper el css! Ahora refrescá',
                    })
            }
        }
    }

    const deleteToDo = (id) => {
        const updatedToDos = todos.filter(todo => todo.id !== id);
        setToDos(updatedToDos)
        setCount(count - 1)
    }

    const completedToDo = (id) => {
        const updatedToDos = todos.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setToDos(updatedToDos);
    } 


  return (
    <>
    <ToDoForm onSubmit={addToDo} count={count} />
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