import { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../store/actions";

const mapDispatchToProps = dispatch => {
    return {
        addTodo: todo => dispatch(addTodo(todo))
    }
}

const ConnectedForm = (props) => {
    const [value, setValue] = useState("");

    const onChangeText = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim() === "") return;
        props.addTodo({ title: value });
        setValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="todo-title" value={value} placeholder="titolo attività" id="todo-title" onChange={onChangeText} />
            <button type="submit">aggiungi</button>
        </form>
    )
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
