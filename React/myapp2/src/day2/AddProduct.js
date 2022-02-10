import React from "react";

export default class AddProduct extends React.Component {
    state = { id: 0, cost: 0, name: "", info: '', expDate: new Date(), data: [] }


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
    uid = 0
    ucost = 0
    ucostflag = false
    uinfo = ""
    uinfoflag = false
    uname = ""
    unameflag = false
    uexpDate = new Date()
    uexpDateflag = false
    update = (i) => {
        console.log(this.state);
        if (!this.unameflag) {
            this.setState({ name: this.uname })
        }
        if (this.ucostflag) {
            this.setState({ cost: this.ucost })
        }
        if (!this.uinfoflag) {
            this.setState({ info: this.uinfo })
            console.log(this.uinfo);
            console.log(this.state.info);
        }
        if (this.uexpDateflag) {
            this.setState({ expDate: this.uexpDate })
        }

        console.log("Update", i);
        fetch("http://localhost:8080/prod/update", {
            "method": "POST",
            "headers": { 'Content-Type': 'application/json' },
            "body": JSON.stringify({
                id: i,
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
        var arr = this.state.data;
        arr.splice(i, 1);
        this.setState({ data: arr });

    }
    render() {
        return (
            <div >
                Enter product name:
                <input type="text" onChange={(e) => { this.setState({ name: e.target.value }) }}></input>
                Enter product desc:
                <input type="text" onChange={(e) => { this.setState({ info: e.target.value }) }}></input>
                Enter product cost
                <input type="number" onChange={(e) => { this.setState({ cost: e.target.value }) }}></input>
                Enter product exp date:
                <input type="date" onChange={(e) => { this.setState({ expDate: e.target.value }) }}></input>
                <br />
                <button onClick={this.sendData}>Add Product</button>
                <button onClick={this.getData}>Get Product</button>
                <table border={1}><tbody>{this.state.data.map((e, i) => {
                    return (<tr key={i} index={i}>
                        <td>
                            {e.id}
                        </td>
                        <td >
                            <input type="text" defaultValue={e.name} onBlur={(ev) => {
                                console.log(e.name);
                                this.uid = e.id;
                                this.uname = ev.target.value;
                                this.unameflag = true
                            }} />
                        </td>
                        <td>
                            <input type="number" defaultValue={this.ucost = e.cost} onBlur={(ev) => {
                                console.log(e.cost);
                                this.setState({ cost: ev.target.value })
                                this.costflag = true
                            }} />
                        </td>
                        <td>
                            <input type="text" defaultValue={this.uinfo = e.info} onBlur={(ev) => {

                                this.setState({ info: ev.target.value })

                                console.log(this.uinfo);
                                this.uinfoflag = true
                            }} />
                        </td>
                        <td>
                            <input type="date" defaultValue={e.expDate} onBlur={(ev) => {
                                console.log(e.expDate);
                                this.uexpDate = ev.target.value
                                this.uexpDateflag = true
                            }} />
                        </td>
                        <button onClick={() => {
                            this.update(e.id)
                        }}>Update</button>
                        <button onClick={() => {
                            this.delete(e.id)
                        }}>Delete</button></tr>)
                })}
                </tbody></table>
            </div>
        )
    }
}