import ColorDisplayItem from "../ColorDisplayItem/ColorDisplayItem";

const ListColors = (props) => {
    const { colors, setColors } = props;

    const handleDelete = (id) => {
        const newList = colors.filter((item) => item.id !== id);
        setColors(newList);
    }

  return <section className="row">
    {
        colors.map((color) => <ColorDisplayItem color={color} key={color.id} handleDelete={handleDelete} />)
    }
  </section>
}

export default ListColors