import { useState } from "react";

const Exercise3 = (props) => {
    const {name} = props;

    const [message,setMessage] = useState("")

    const handleButton = ()=>{
        setMessage("(From Changed State!)")
    }

  return (
    <>
    <h1>
        Hello {name} {message}
    </h1>
    <button onClick={handleButton}>Tocame</button>
    </>
  )
}
export default Exercise3