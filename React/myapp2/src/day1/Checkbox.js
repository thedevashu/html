import { useState } from "react"

export default function Checkbox() {
    const [text, setText] = useState()
    const [ip, setIp] = useState()
    function toTitleCase(str) {
        return str.replace(
            /\w\S*/g,
            function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }
    return (<div>

        <input type="text" onBlur={(e) => { setText(e.target.value) }} />
        <br />
        toUpperCase:<input type="checkbox" onChange={() => { setIp(text.toUpperCase()) }}></input>
        toLowerCase:<input type="checkbox" onChange={() => { setIp(text.toLowerCase()) }}></input>
        toTitleCase:<input type="checkbox" onChange={() => { setIp(toTitleCase(text)) }}></input>

        <br />
        <h1>{ip}</h1>
    </div>)
}