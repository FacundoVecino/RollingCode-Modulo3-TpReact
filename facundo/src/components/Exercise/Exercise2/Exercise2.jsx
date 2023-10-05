//--------------Importaciones---------------
// Estilos
import './Exercise2.css'

// Componentes
import FoundAnimation from '../../FoundAnimation/FoundAnimation'

const Exercise2 = (props) => {
    const {message} = props
  return (
    <>
      <section className="gallery flex-wrap">
        <article className="exercise-gallery d-flex justify-content-center align-items-center p-3">
          <h1>Hello {message}</h1>
        </article>
      </section>
      <FoundAnimation />
    </>
    
  )
}

export default Exercise2