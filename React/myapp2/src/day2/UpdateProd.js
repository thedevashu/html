import { useState } from "react";

function UpdateProd(props) {

    const [data, setdata] = useState(null)
    setdata(props.ids)

    return (<div>
        <select>

        </select>
        Select Id to:</div>)
}

export default UpdateProd 