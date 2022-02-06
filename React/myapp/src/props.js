function Props(props) {
    var obj = JSON.parse(props.emp)
    return (
        <div>
            <p>{props.emp.name}{obj.name}</p>
        </div>
    )
}
export default Props