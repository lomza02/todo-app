import React from 'react';
import { useDispatch } from 'react-redux';
import actions from '../duck/actions';

const ListForm = () => {
    const dispatch = useDispatch();
    const addTask = (text) => dispatch(actions.addTask(text))

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

export default ListForm;