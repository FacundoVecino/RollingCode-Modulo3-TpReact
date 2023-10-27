import { useState } from "react"
import { useRef } from "react"
import List from "./List"

const Exercise4 = () => {

const [contact, setContact] = useState([])

const inputRef = useRef()

  const handleSubmit = (e) =>{
    e.preventDefault()

    const input  = inputRef.current.value

    alert("Agregadoo")
    
    setContact([
      ...contact,
      {
        input: input,
        id: 1,
      }
    ])
  }
  return (
    <>
    <h1>Bienvenido</h1>
    <p>Ingresa una tarea jovenazo</p>
    <form onSubmit={handleSubmit}>
    <label htmlFor="inputTarea">
    Ingresar Tarea 
    </label>
        <input type="text" name="inputTarea" ref={inputRef} placeholder="Buscar al perro del jardín"/>
    </form>
<List contacts={contact}/>
    </>
  )
}
export default Exercise4