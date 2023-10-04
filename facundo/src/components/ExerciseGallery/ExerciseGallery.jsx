import './ExerciseGallery.css'
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import '/node_modules/bootstrap/dist/js/bootstrap.js'

const ExerciseGallery = () => {
  return (
    <section className="gallery flex-wrap">
        <article className="exercise-gallery d-flex justify-content-center align-items-center p-3">
            <h1>Ejercicios Tp React</h1>
            <div className='exercise justify-content-center d-flex flex-wrap'>
                <button className="button button-exercise" type="button" name="button">
                    <a href="#">Ejercicio 1</a>
                </button>
                <button className="button button-exercise" type="button" name="button">
                    <a href="#">Ejercicio 2</a>
                </button>
                <button className="button button-exercise" type="button" name="button">
                    <a href="#">Ejercicio 3</a>
                </button>
                <button className="button button-exercise" type="button" name="button">
                    <a href="#">Ejercicio 4</a>
                </button>
                <button className="button button-exercise" type="button" name="button">
                    <a href="#">Ejercicio 5</a>
                </button>
                <button className="button button-exercise" type="button" name="button">
                    <a href="#">Ejercicio 6</a>
                </button>
                <button className="button button-exercise" type="button" name="button">
                    <a href="#">Ejercicio 7</a>
                </button>
                <button className="button button-exercise" type="button" name="button">
                    <a href="#">Ejercicio 8</a>
                </button>
                <button className="button button-exercise" type="button" name="button">
                    <a href="#">Ejercicio 9</a>
                </button>
                <button className="button button-exercise" type="button" name="button">
                    <a href="#">Ejercicio 10</a>
                </button>
                <button className="button button-exercise" type="button" name="button">
                    <a href="#">Ejercicio 11</a>
                </button>
                <button className="button button-exercise" type="button" name="button">
                    <a href="#">Ejercicio 12</a>
                </button>
                <button className="button button-exercise" type="button" name="button">
                    <a href="#">Ejercicio 13</a>
                </button>
                <button className="button button-exercise" type="button" name="button">
                    <a href="#">Ejercicio 14</a>
                </button>
            </div>
        </article>
    </section>
    
  )
}

export default ExerciseGallery