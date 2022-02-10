import { useState } from "react"
import { Link } from "react-router-dom"

function Math() {
    let [num, setNum] = useState(0)
    return (
        <div>
            <input type='number' onBlur={(e) => {
                setNum(e.target.value)
            }}></input>
            <Link to={'/table' + num}>Show table</Link>
        </div>
    )
}
export default Math