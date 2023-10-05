//--------------Importaciones---------------
// Estilos
import './Exercise3.css'

// Componentes
import Swal from 'sweetalert2'
import FoundAnimation from '../../FoundAnimation/FoundAnimation'
import { useState } from 'react'

const Exercise3 = (props) => {
  const {message: propsMessage } = props;
  const [message, setMessage] = useState(propsMessage);
  const [count, setCount] = useState(1)
  const handleChange = (quantity) => {
    setMessage((state) => state + ' (mentira)')
    setCount(count + quantity)
    console.log(count)
    if(count === 7){
     return Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Basta, me vas a romper el css! Ahora refrescá',
            })
    }
  }

  return (
    <>
      <section className="gallery flex-wrap">
        <article className="exercise-gallery d-flex justify-content-center align-items-center p-3">
          <h1>I love you {message}</h1>
          <button type='button' onClick={() => handleChange(1)} className={`btn btn-danger mt-4 ${count === 8 ? 'd-none' : ''}`}>Click me</button>
        </article>
      </section>
      <FoundAnimation />
    </>
  )
}

export default Exercise3