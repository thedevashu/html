import React from "react"
import Calculator from "./Calculator"
export default class Calc extends React.Component {
    state = { num1: 0, num2: 0, op: "+" }
    render() {
        return (
            <div>
                <input type="number" onBlur={(e) => { this.setState({ num1: e.target.value }) }} />
                <input type="number" onBlur={(e) => { this.setState({ num2: e.target.value }) }} />
                <select onBlur={(e) => { this.setState({ op: e.target.value }) }}>
                    <option>+</option>
                    <option>-</option>
                    <option>*</option>
                    <option>%</option>
                </select>
                <Calculator num1={this.state.num1} num2={this.state.num2} op={this.state.op}></Calculator>
            </div >
        )
    } s
}