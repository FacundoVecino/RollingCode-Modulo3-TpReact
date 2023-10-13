//--------------Importaciones---------------
// Estilos
import './ToDoForm.css'

// Componentes
import { v4 as uuidv4 } from 'uuid'
import { useRef, useState } from 'react'


const ToDoForm = (props) => {
  
  const form = useRef()
  
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleShipping = (e) => {
    e.preventDefault();
    
    const newToDo = {
      id: uuidv4(),
      text: input,
      completed: false
    }

    
    form.current.reset()
    props.onSubmit(newToDo)
  }

  return (
    <form ref={form} className="to-do-form d-flex justify-content-center align-items-center" onSubmit={handleShipping}>
        <input className="to-do-input" type="text" placeholder="Ingrese una tarea" name="text" onChange={handleChange} />
        <button className={`to-do-button ${props.count === 6 ? 'd-none' : ''}`}>Agregar Tarea</button>
    </form>
  )
}

export default ToDoForm