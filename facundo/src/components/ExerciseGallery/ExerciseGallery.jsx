//--------------Importaciones---------------
// Estilos
import './ExerciseGallery.css'

// Componentes
import FoundAnimation from '../FoundAnimation/FoundAnimation'
import { Link } from 'react-router-dom'


const ExerciseGallery = () => {
  return (
    <>
      <section className="gallery flex-wrap">
          <article className="exercise-gallery d-flex justify-content-center align-items-center p-3">
              <h1>Ejercicios Tp React</h1>
              <div className='exercise justify-content-center d-flex flex-wrap'>
                  <button className="button button-exercise" type="button" name="button">
                      <Link to="/exercise1">Ejercicio 1</Link>
                  </button>
                  <button className="button button-exercise" type="button" name="button">
                      <Link to="/exercise2">Ejercicio 2</Link>
                  </button>
                  <button className="button button-exercise" type="button" name="button">
                      <Link to="#">Ejercicio 3</Link>
                  </button>
                  <button className="button button-exercise" type="button" name="button">
                      <Link to="#">Ejercicio 4</Link>
                  </button>
                  <button className="button button-exercise" type="button" name="button">
                      <Link to="#">Ejercicio 5</Link>
                  </button>
                  <button className="button button-exercise" type="button" name="button">
                      <Link to="#">Ejercicio 6</Link>
                  </button>
                  <button className="button button-exercise" type="button" name="button">
                      <Link to="#">Ejercicio 7</Link>
                  </button>
                  <button className="button button-exercise" type="button" name="button">
                      <Link to="#">Ejercicio 8</Link>
                  </button>
                  <button className="button button-exercise" type="button" name="button">
                      <Link to="#">Ejercicio 9</Link>
                  </button>
                  <button className="button button-exercise" type="button" name="button">
                      <Link to="#">Ejercicio 10</Link>
                  </button>
                  <button className="button button-exercise" type="button" name="button">
                      <Link to="#">Ejercicio 11</Link>
                  </button>
                  <button className="button button-exercise" type="button" name="button">
                      <Link to="#">Ejercicio 12</Link>
                  </button>
                  <button className="button button-exercise" type="button" name="button">
                      <Link to="#">Ejercicio 13</Link>
                  </button>
                  <button className="button button-exercise" type="button" name="button">
                      <Link href="#">Ejercicio 14</Link>
                  </button>
              </div>
          </article>
      </section>
      <FoundAnimation/>
    </>
    
    
  )
}

export default ExerciseGallery