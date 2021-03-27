import { ADD_TODO } from "./actions"

const initialState = {
    todos: []
}

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            //return {...state, todos: state.todos.concat(action.payload)};
            return Object.assign({}, state, {
                todos: state.todos.concat(action.payload.title)
            });
        default:
            return state;
    }
}