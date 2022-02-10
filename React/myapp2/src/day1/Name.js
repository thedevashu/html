import { useState } from "react"
import { useSelector } from "react-redux"

const Name = () => {
    const [name, setName] = useState("")//intilaize variable
    const [uc, setUc] = useState("")
    const user = useSelector(state => state.user)
    var upCase = () => {
        setUc(name.toUpperCase())
    }
    return (
        <div><h2>UserNmae:{user}</h2>
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