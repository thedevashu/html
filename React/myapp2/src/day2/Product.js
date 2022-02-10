import React from "react";
import './Blog.css'
import UpdateProd from "./UpdateProd";
import AddProduct2 from "./AddProduct2";
export default class Product extends React.Component {
    state = { id: 0, name: '', info: '', cost: 0, expDate: new Date(), data: [], isActive: false, disp: null }
    
    getData = () => {
        fetch('http://localhost:8080/prod/showAll', { 'method': 'GET' })
            .then(response => { return response.json() })
            .then(resData => {
                console.log(resData);
                this.setState({ data: resData })
                console.log(this.state.data);
            })

        this.setState({ isActive: true })

    }
    updateDisp = () => {
        if (this.state.isActive)
            return (<UpdateProd ids={this.state.data}></UpdateProd>)
        else
            return (<div>Get the data first</div>)
    }
    render() {
        return (
            <div>
                <AddProduct2></AddProduct2>
                <button onClick={() => {
                    this.getData();
                    this.setState({ isActive: true }
                    )
                }}>GET</button>
                <table border={2}>
                    <thead>
                        <tr>
                            <th>Product Id</th>
                            <th>Product Name</th>
                            <th>Product Desc</th>
                            <th>Product Cost</th>
                            <th>Expire Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((ele, i) => {
                                return (<tr key={i}>
                                    <td>{ele.id}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.info}</td>
                                    <td>{ele.cost}</td>
                                    <td>{ele.expDate}</td>
                                </tr>)
                            })

                        }
                    </tbody>
                </table>

                {this.updateDisp()}

            </div>
        )
    }
}
