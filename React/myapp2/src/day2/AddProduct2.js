import React from "react";
import './Blog.css'
class AddProduct2 extends React.Component {
    state = { prodName: '', prodCost: 0, prodDesc: '', expDate: new Date() }


    addProd = () => {
        fetch(`http://localhost:8080/prod/add`, {
            'method': 'POST',
            'headers': { 'Content-type': 'application/json' },
            'body': JSON.stringify({
                name: this.state.prodName,
                info: this.state.prodDesc,
                cost: this.state.prodCost,
                expDate: this.state.expDate
            })
        }
        )
    }
    render() {
        return (<div className="wrapper">
            <input type='text' onBlur={(e) => {
                this.setState({ prodName: e.target.value })
            }}
                placeholder='Enter Product Name'></input>
            <input type='text' onBlur={(e) => {
                this.setState({ prodDesc: e.target.value })
            }}
                placeholder='Enter Product Desc'></input>
            <input type='number' onBlur={(e) => {
                this.setState({ prodCost: e.target.value })
            }}
                placeholder='Enter Product Cost'></input>
            <input type='date' onBlur={(e) => {
                this.setState({ expDate: e.target.valueAsDate })
            }}
                placeholder='Enter Product Exp Date'></input>
            <button onClick={this.addProd}>Add</button>
        </div>)
    }
}
export default AddProduct2;