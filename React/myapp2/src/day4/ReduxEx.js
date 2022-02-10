import { createStore } from "redux"

const initialState = { counter: 0, username: 'Ashu' }
const exampleReducer = (state = initialState, action) => {
    if (action.type === 'increase') {

        return {
            counter: state.counter + 2,
            username: state.username
        }
    }

    else if (action.type === 'decrement') {
        return {
            counter: state.counter - Math.floor(Math.random() * 10),
            username: state.username
        }
    }

    else if (action.type === 'setUserName') {
        return {
            counter: 0,
            username: action.value
        }
    }
    return state
}

const store = createStore(exampleReducer);
export default store;