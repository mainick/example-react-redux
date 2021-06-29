// named constants
export const ADD_TODO = "ADD_TODO";
export const TODO_REQUESTED = "TODO_REQUESTED";
export const TODO_LOADED = "TODO_LOADED";
export const API_ERRORED = "API_ERRORED";

// action creators
export function addTodo(payload) {
    return {
        type: ADD_TODO,
        payload
    }
}

export function getTodo(url) {
    return { type: TODO_REQUESTED, payload: { url } }
}