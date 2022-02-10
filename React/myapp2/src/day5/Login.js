import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const Login = () => {
    const [usernm, setUser] = useState('')
    const [pass, setPass] = useState('')


    let user = useSelector(state => state.user)
    // setUser(username)
    const dispatch = useDispatch()
    const login = () => {
        if (usernm === 'IET' && pass === '1234') {
            console.log('hello');
            dispatch({ type: 'login', value: usernm })
        }
        console.log(user);
        console.log(pass);
    }
    return (<div>
        {user}
        <input type='text' onBlur={(e) => { setUser(e.target.value) }}></input>
        <input type='password' onBlur={(e) => { setPass(e.target.value) }}></input>

        <button onClick={login}>Login</button>
    </div>)
}
export default Login