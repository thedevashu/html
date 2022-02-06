function Calculator(props) {
    var ans
    console.log(props);
    if (props.op === "*") {
        ans = <h3>{props.num1} * {props.num2} = {props.num1 * props.num2}</h3>
    }
    else if (props.op === "+") {
        ans = <h3>{props.num1} + {props.num2} = {props.num1 + props.num2}</h3>
    }
    else if (props.op === "-") {
        ans = <h3>{props.num1} - {props.num2} = {props.num1 - props.num2}</h3>
    }
    else if (props.op === "%") {
        ans = <h3>{props.num1} % {props.num2} = {props.num1 % props.num2}</h3>
    }
    else
        ans = <p>Khahi tari chuktay bhava tuza</p>
    return (ans)
}
export default Calculator