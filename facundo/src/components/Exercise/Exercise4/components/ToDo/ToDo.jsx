//--------------Importaciones---------------
// Estilos
import './ToDo.css'

// Componentes
import { AiOutlineCloseCircle } from "react-icons/ai";

const ToDo = ({ id, text, completed, completedToDo, deleteToDo }) => {
  return (
    <>
    <div className={completed ? "to-do-container completed" : "to-do-container"}>
        <div className="to-do-text" onClick={() => completedToDo(id)}>
            {text}
        </div>
        <div className="to-do-container-icons" onClick={() => deleteToDo(id)}>
            <AiOutlineCloseCircle className='to-do-icon'/>
        </div>
    </div>
    </>
  )
}

export default ToDo