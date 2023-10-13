import './Exercise6.css'
import FoundAnimation from "../../FoundAnimation/FoundAnimation"
import ColorForm from "./components/ColorForm/ColorForm"
import ListColors from "./components/ListColors/ListColors"
import { useEffect, useState } from 'react'

const colorsLS = JSON.parse(localStorage.getItem('colors')) || [];

const Exercise6 = () => {
  const [colors, setColors] = useState(colorsLS);
  useEffect(() => {
    localStorage.setItem('colors', JSON.stringify(colors))
  }, [colors])

  return (
    <>
      <section className="gallery flex-wrap">
        <article className="exercise-gallery container d-flex p-3">
            <ColorForm setColors={setColors} colors={colors}/>
            <ListColors colors={colors} setColors={setColors} />
        </article>
      </section>
      <FoundAnimation />
    </>
  )
}

export default Exercise6