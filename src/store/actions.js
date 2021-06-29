// named constants
export const ADD_TODO = "ADD_TODO";
export const TODO_LOADED = "TODO_LOADED";

// action creators
export function addTodo(payload) {
    return {
        type: ADD_TODO,
        payload
    }
}

export function getTodo() {
    return function (dispatch) {
        return fetch("https://jsonplaceholder.typicode.com/todos")
          .then(response => {
            if (!response.ok) throw Error(response.statusText);
            return response.json()
          })
          .then(json => {
              dispatch({ type: TODO_LOADED, payload: json })
          })
    }
}