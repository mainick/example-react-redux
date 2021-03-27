// named constants
export const ADD_TODO = "ADD_TODO";

// action creators
export function addTodo(payload) {
    return {
        type: ADD_TODO,
        payload
    }
}