import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const ReduxComponent = () => {
    const [enteredName, setEnteredName] = useState('')
    const counter = useSelector(state => state.counter)
    const username = useSelector(state => state.username)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();

    const setEnteredNameFun = (event) => {
        setEnteredName(event.target.value);
        console.log(enteredName);

    }

    const increaseCounter = () => {
        dispatch({ type: 'increase' })
    }

    const setEnteredNameAction = () => {
        dispatch({ type: 'setUserName', value: enteredName })
    }

    const decreassCounterAction = () => {
        dispatch({ type: 'decrement' })
    }

    return (<div>
        <h1>{username}{user}</h1>
        <h2>{counter}</h2>
        <input type='text' onBlur={setEnteredNameFun}></input>
        <button onClick={setEnteredNameAction}>Set name</button>
        <button onClick={increaseCounter}>Increment By 2</button>
        <button onClick={decreassCounterAction}>Decress</button>
    </div>)
}
export default ReduxComponent