//--------------Importaciones---------------
// Estilos
import './ListToDo.css'

// Componentes
import ToDoForm from "../ToDoForm/ToDoForm"
import { useState } from 'react'
import ToDo from '../ToDo/ToDo';

const ListToDo = () => {

    const [todos, setToDos] = useState([]);

    const addToDo = (todo) => {
        if(todo.text.trim()) {
            todo.text = todo.text.trim();
            const updatedToDos = [todo, ...todos];
            setToDos(updatedToDos);
        }
    }

    const deleteToDo = (id) => {
        const updatedToDos = todos.filter(todo => todo.id !== id);
        setToDos(updatedToDos)
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
    <ToDoForm onSubmit={addToDo}/>
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