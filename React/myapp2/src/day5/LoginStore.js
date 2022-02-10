import { createStore } from "redux"

const initialState = { user: 'ashu', pass: '1234' }
const LoginStore = (state = { user: 'ashu', pass: '1234' }, action) => {
    console.log('AAA');
    if (action.type === 'login') {

        return {
            user: action.value,
            pass: state.pass
        }
    }
    else
        return { user: state.user, pass: state.pass }
}
const lstore = createStore(LoginStore)
export default lstore