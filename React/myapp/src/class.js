import React from "react";
import Square from "./Square";
import Calculator from "./Calculator";
import MessageRepeater from "./MessageRepeater";
import Props from "./props";
class MyClass extends React.Component {
    render() {
        console.log(this.props.num);
        var tab = [];
        for (var i = 1; i <= 10; i++) {
            var tb = <tr><td>{this.props.num} * {i} = {i * this.props.num}</td></tr>
            tab.push(tb)
        }
        var obj = { name: "arun" }
        var str = JSON.stringify(obj)
        return (
            <div>



                <Calculator num1={12} num2={2} op="*" />
                <Calculator num1={12} num2={2} op="+" />
                <Calculator num1={12} num2={2} op="-" />
                <Calculator num1={13} num2={2} op="0" />
                <Square num={101234}></Square>
                <br></br>

                {/*  
                    <Props emp={str} /><Props emp={obj} />
                <Props emp={{ name: "arun" }} /> 
             <MessageRepeater num={5} msg="ram ram pavna_/\_" />
            <h1>Namaskaram!</h1>
                <table border='1'> <tbody>{tab}</tbody></table>
            */}

            </div>)
    }
}
export default MyClass