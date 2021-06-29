import {connect} from "react-redux";
import { getTodo } from "../store/actions";
import {useEffect} from "react";

const mapStateToProps = state => {
    return {todos: state.remoteTodos.slice(0, 10)}
}

const List = (props) => {
    useEffect(() => {
        props.getTodo("https://jsonplaceholder.typicode.com/todos");
    }, [])

    return (
      <ul id="list-todos">
          {props.todos.map((todo,i) => (
            <li key={i}><strong>{todo.title}</strong></li>
          ))}
      </ul>
    )
}

export default connect(mapStateToProps, {getTodo})(List);