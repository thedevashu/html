import { useState } from "react"

export default function Datef() {
    const [myDate, setDate] = useState(new Date())
    const [d, setD] = useState()
    return (
        <div>
            <input type="date" onBlur={(e) => {
                setDate(e.target.valueAsDate)
                console.log(e.target.valueAsDate);
            }}></input>
            <span>{myDate.getDate()}-{myDate.getMonth() + 1}-{myDate.getFullYear()}</span>
            {/* <span>{myDate}</span> */}
        </div>
    )
}