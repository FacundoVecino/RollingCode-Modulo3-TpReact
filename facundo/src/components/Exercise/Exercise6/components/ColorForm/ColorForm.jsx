import { useState } from "react";
import DisplayColor from "../DisplayColor/DisplayColor";
import { v4 as uuidv4 } from 'uuid'
import './ColorForm.css'
import Swal from "sweetalert2";

const ColorForm = (props) => {
  const { setColors, colors } = props;
  const [color, setColor] = useState('#000000');
  const handleChange = (e) => {
    setColor(e.target.value);
    }
  const handleSubmit = (e) => {
    e.preventDefault()

    const newColor = {
      id: uuidv4(),
      value: color
    }

    if(colors.length === 3){
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Basta, me vas a romper el CSS! Ahora borrate algunos colores',
    })
    }

    setColors((prev) => [...prev, newColor])

    setColor('#000000')

  }

  return (
    <form className="card-input mb-3" onSubmit={handleSubmit}>
        <div className="card-header">
          Administrar Colores
        </div>
        <div className="card-body d-flex align-items-center gap-4 justify-content-center">
          <DisplayColor color={color} handleChange={handleChange} />
          <p className="color-text">{color}</p>
        </div>
        <div className="card-footer text-end">
          <button className="btn btn-primary" type="submit">{colors.length === 3 ? 'Stop' : 'Guardar'}</button>
        </div>
    </form>
  
  );
};

export default ColorForm;
