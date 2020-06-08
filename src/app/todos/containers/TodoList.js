import React from 'react';
import ListItem from '../components/ListItem';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../duck/actions';
import types from '../../filter/duck/types';


const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch()
    const filtredTodos = filterList(todos, filter)

    return (
        <ul>
            {filtredTodos.map(todo => <ListItem text={todo.text} completed={todo.completed} key={todo.id} onClick={() => dispatch(actions.switchTodo(todo.id))} />)}
        </ul>
    );
}

const filterList = (todos, activeFilter) => {
    switch (activeFilter) {
        case types.FILTER.SHOW_ACTIVE:
            return todos.filter(todo => todo.completed === false);
        case types.FILTER.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed === true);
        default:
            return todos;
    }

}

export default TodoList;