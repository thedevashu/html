import React from "react";

export default class NameC extends React.Component {
    state = { names: "hello", uc: "" }
    upCase = () => {
        this.setState({ uc: this.state.names.toUpperCase() })
    }
    render() {

        return (
            <div>
                Enter name:<input type="text" onChange={(e) => {
                    this.setState({ names: e.target.value })
                    console.log(this.state.names);
                }}></input>
                <button onClick={this.upCase}>Click me</button>
                <h1>{this.state.uc}</h1>
            </div>
        )
    }
}