import Item from "./Item.jsx"

const List = (props) => {
  const { contacts } = props

  return (

    <ul>
        {
          contacts.map((contact) => (
            <Item key={contact.id} contact={contact}/>
          ))
        }
    </ul>

)
}
export default List