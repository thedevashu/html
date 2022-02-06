import React from "react";

export default class AddProduct extends React.Component {
    state = { cost: 0, name: "", info: '', expDate: new Date(), data: [] }


    componentDidMount = () => {


    }

    sendData = (e) => {
        fetch("http://localhost:8080/prod/add", {
            "method": "POST",
            "headers": { 'Content-Type': 'application/json' },
            "body": JSON.stringify({
                cost: this.state.cost,
                name: this.state.name,
                info: this.state.info,
                expDate: this.state.expDate
            })

        })
    }

    getData = (e) => {
        var promise = fetch("http://localhost:8080/prod/showAll", { "method": "GET" })
        var anotherpromise = promise.then(response => { return response.json() })
        anotherpromise.then(resData => { this.setState({ data: resData }) })
        promise.catch(err => { console.log(err); })
        console.log("in get");

    }
    update = (i) => {
        console.log("Update", i);
        fetch("http://localhost:8080/prod/update", {
            "method": "POST",
            "headers": { 'Content-Type': 'application/json' },
            "body": JSON.stringify({
                id: i + 1,
                cost: this.state.cost,
                name: this.state.name,
                info: this.state.info,
                expDate: this.state.expDate
            })

        })

    }
    delete = (i) => {
        console.log("delete", i);
        fetch(`http://localhost:8080/prod/delete/${i}`, {
            "method": "Delete",
            "headers": { 'Content-Type': 'application/json' }
        })
    }
    render() {
        return (
            <div >
                Enter product name:<input type="text" onBlur={(e) => { this.setState({ name: e.target.value }) }}></input>
                Enter product desc:<input type="text" onBlur={(e) => { this.setState({ info: e.target.value }) }}></input>
                Enter product cost:<input type="number" onBlur={(e) => { this.setState({ cost: e.target.value }) }}></input>
                Enter product exp date:<input type="date" onBlur={(e) => { this.setState({ expDate: e.target.value }) }}></input>
                <br />
                <button onClick={this.sendData}>Add Product</button>
                <button onClick={this.getData}>Get Product</button>
                <table border={1}><tbody>{this.state.data.map((e, i) => {
                    return (<tr key={i} index={i}>
                        <td >
                            <input type="text" defaultValue={e.name} onBlur={(e) => { this.setState({ name: e.target.value }) }} />
                        </td>
                        <td>
                            <input type="number" defaultValue={e.cost} onBlur={(e) => { this.setState({ cost: e.target.value }) }} />
                        </td>
                        <td>
                            <input type="text" defaultValue={e.info} onBlur={(e) => { this.setState({ info: e.target.value }) }} />
                        </td>
                        <td>
                            <input type="date" defaultValue={e.expDate} onBlur={(e) => { this.setState({ expDate: e.target.value }) }} />
                        </td>
                        <button onClick={() => {
                            this.update(i)
                        }}>Update</button>
                        <button onClick={() => {
                            this.delete(i + 1)
                        }}>Delete</button></tr>)
                })}
                </tbody></table>
            </div>
        )
    }
}