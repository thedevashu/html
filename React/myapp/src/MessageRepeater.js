function MessageRepeater(props) {
    var arr = []
    for (var i = 0; i < props.num; i++) {
        let ol = <ol>{props.msg}</ol>
        arr.push(ol);
    }
    return (<ul>{arr}</ul>)
}
export default MessageRepeater