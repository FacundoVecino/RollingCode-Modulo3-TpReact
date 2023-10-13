import DisplayColor from '../DisplayColor/DisplayColor';
import './ColorDisplayItem.css'

const ColorDisplayItem = (props) => {
    const { color, handleDelete } = props;
  return (
    <article className="col d-flex justify-content-center my-3">
        <div className="card-item">
            <div className="card-header">
                <h3>{color.value}</h3>
            </div>
            <div className="card-body d-flex align-items-center gap-4 justify-content-center">
                <DisplayColor color={color.value} disabled />
            </div>
            <div className="card-footer text-end">
                <button className="btn btn-danger" type="button" onClick={() => handleDelete(color.id)}>Eliminar</button>
            </div>
        </div>
        
    </article>
        
  )
}

export default ColorDisplayItem