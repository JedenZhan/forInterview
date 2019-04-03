import { createStore } from 'redux'

function counter(state=0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        
        default:
            return state + 1

    }
}

const store = createStore(counter)

