import { useState } from "react"

export default function IncDec() {
    const [x, setX] = useState(0)
    let temp = x
    var im = function inc() {


        setX(temp + 1)
        console.log(x, temp);
    }
    var dm = () => {


        setX(temp - 1)
        console.log(x, temp);
    }
    return (
        <div>
            <button onClick={im}>++</button>
            <button onClick={dm}>--</button>
            <h1>{x}</h1>
        </div>
    )
}