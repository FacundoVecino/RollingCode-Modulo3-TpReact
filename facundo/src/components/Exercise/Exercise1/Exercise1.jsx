//--------------Importaciones---------------
// Estilos
import './Exercise1.css'

// Componentes
import FoundAnimation from '../../FoundAnimation/FoundAnimation'

const Exercise1 = () => {
  return (
    <>
      <section className="gallery flex-wrap">
        <article className="exercise-gallery d-flex justify-content-center align-items-center p-3">
          <h1>Hello World</h1>
        </article>
      </section>
      <FoundAnimation />
    </>
    
  )
}

export default Exercise1