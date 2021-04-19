import {connect} from "react-redux";

const mapStateToProps = state => {
    return {todos: state.todos}
}

const List = ({todos}) => (
    <ul id="list-todos">
        {todos.map((title,i) => (
            <li key={i}><strong>{title}</strong></li>
        ))}
    </ul>
)

export default connect(mapStateToProps)(List);