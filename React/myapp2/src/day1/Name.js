import { useState } from "react"

const Name = () => {
    const [name, setName] = useState("")//intilaize variable
    const [uc, setUc] = useState("")
    var upCase = () => {
        setUc(name.toUpperCase())
    }
    return (
        <div>
            Enter name:<input type="text" onChange={(event) => {
                setName(event.target.value)
                console.log(name);
            }} />
            <button onClick={upCase}>toUpperCase</button>


            <h1>{//name.toUpperCase()}
                uc
            }</h1>
        </div>
    )
}
export default Name