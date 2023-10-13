//--------------Importaciones---------------
// Estilos
import './Exercise5.css'

// Componentes
import FoundAnimation from "../../FoundAnimation/FoundAnimation"
import ListToDo from './components/ListToDo/ListToDo'

const Exercise5 = () => {
  return (
    <>
      <section className="gallery flex-wrap">
        <article className="exercise-gallery d-flex p-3">
            <div className="list-to-do mt-2">
                <h1>Bienvenido</h1>
                <h2>Ingrese sus tareas</h2>
                <ListToDo />
            </div>
        </article>
      </section>
      <FoundAnimation />
    </>
  )
}

export default Exercise5