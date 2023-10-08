//--------------Importaciones---------------
// Estilos
import './ToDoForm.css'

// Componentes
import { v4 as uuidv4 } from 'uuid'
import { useRef, useState } from 'react'
import Swal from 'sweetalert2'

const ToDoForm = (props) => {
  
  const form = useRef()
  const [count, setCount] = useState(1);
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

    setCount(count + 1)
    console.log(count)
    if(count === 5){
     return Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Basta, me vas a romper el css! Ahora refrescá',
            })
    }
    form.current.reset()
    props.onSubmit(newToDo)
  }

  return (
    <form ref={form} className="to-do-form" onSubmit={handleShipping}>
        <input className="to-do-input" type="text" placeholder="Ingrese una tarea" name="text" onChange={handleChange} />
        <button className={`to-do-button ${count === 6 ? 'd-none' : ''}`}>Agregar Tarea</button>
    </form>
  )
}

export default ToDoForm