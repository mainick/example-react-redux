import {connect} from "react-redux";

const mapStateToProps = state => {
    return {todos: state.todos}
}

const ConnectedList = ({todos}) => (
    <ul id="list-todos">
        {todos.map((title,i) => (
            <li key={i}><strong>{title}</strong></li>
        ))}
    </ul>
)

const List = connect(mapStateToProps)(ConnectedList);

export default List;