import {ADD_TODO, TODO_LOADED} from "./actions"

const initialState = {
    todos: [],
    remoteTodos: []
}

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            //return {...state, todos: state.todos.concat(action.payload)};
            return Object.assign({}, state, {
                todos: state.todos.concat(action.payload.title)
            });
        case TODO_LOADED:
            return Object.assign({}, state, {
                remoteTodos: state.remoteTodos.concat(action.payload)
            });
        default:
            return state;
    }
}