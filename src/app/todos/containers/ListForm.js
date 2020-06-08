import React from 'react';
import { connect } from 'react-redux';
import actions from '../duck/actions';

const ListForm = ({ addTask }) => {
    const textInput = React.createRef();
    const handleSubmitTask = (event) => {
        event.preventDefault();
        const text = textInput.current.value
        if (text === '') return;
        addTask(text);
        textInput.current.value = '';
    }

    return (
        <form >
            <input type="text" ref={textInput} />
            <button onClick={handleSubmitTask} type="submit">Dodaj zadanie</button>
        </form>
    );
}
const mapDispatchToProps = dispatch => ({
    addTask: (text) => dispatch(actions.addTask(text))
})

export default connect(null, mapDispatchToProps)(ListForm);