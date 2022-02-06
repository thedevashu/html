import React from "react";
import "./Blog.css"
export default class Blog extends React.Component {

    state = { comments: [] }

    componentDidMount = () => {
        var cm = [{ cmt: "Thoen qern erj is is guda", name: "chin chong" },
        { cmt: "your good name loadk hfuedb lad f", name: "add abdul" },
        { cmt: "ram ahfd ljah  eiu  eihr erif qieucram", name: "veer nav" },
        { cmt: "ramdfv qieucram", name: "vedf v" },
        { cmt: "dff df ervb rif qieucram", name: "vfbr nav" }]


        this.setState({ comments: cm });
        console.log("hello");
        // this.state.comments.forEach(e => {
        //     console.log(e);
        // });
    }
    delete = (i) => {
        console.log("delete called", i);
        var temp = this.state.comments;
        temp.splice(i, 1)
        this.setState({ comments: temp })

    }
    comment = ""
    name = ""
    addComment = () => {
        console.log(this.comment, this.name);
        var tmp = { cmt: this.comment, name: this.name }
        var arr = this.state.comments
        arr.push(tmp)

        this.setState({ comments: arr })
    }
    update = (c, i) => {
        console.log("update called", c + i);
        var arr = this.state.comments
        arr[i].cmt = c
        this.setState({ comments: arr })

        arr.forEach((e) => {
            console.log(e.cmt);
        })
    }

    render() {

        return (<div >

            {this.state.comments.map((e, i) => {
                return (
                    <div key={i}>
                        <Comment
                            key={i}
                            indx={i}
                            comment={e.cmt}
                            name={e.name}
                            del={this.delete}
                            update={this.update}
                        >
                        </Comment>

                    </div>
                )
            })}

            <div className="fancy-box-with-button">
                Enter new comment:<input type="text" onBlur={(e) => { this.comment = e.target.value }} />
                <br />
                Enter name:<input type="text" onBlur={(e) => { this.name = e.target.value }} />
                <button onClick={this.addComment}>comment</button><br />
                <button onClick={() => {

                    this.setState({ comments: [] })
                }} >delete all</button>
            </div>
        </div>)
    }
}

class Comment extends React.Component {


    render() {
        var comment = "";
        var name = ""
        return (
            <div>
                <div className="fancy-box-with-button">
                    <input type="text" defaultValue={this.props.comment} onBlur={(e) => { comment = e.target.value }} />
                    <p>--{this.props.name}</p>
                    <button onClick={() => { this.props.del(this.props.indx) }}>delete</button>
                    <button onClick={() => { this.props.update(comment, this.props.indx) }}>update</button>
                </div>

            </div>)
    }
}