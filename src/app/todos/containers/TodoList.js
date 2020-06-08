import React from 'react';
import ListItem from '../components/ListItem';
import { connect } from 'react-redux';
import actions from '../duck/actions';
import types from '../../filter/duck/types';


const TodoList = ({ todos, switchTodo }) => {
    return (
        <ul>
            {todos.map(todo => <ListItem text={todo.text} completed={todo.completed} key={todo.id} onClick={() => switchTodo(todo.id)} />)}
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

const mapStateToProps = state => ({
    todos: filterList(state.todos, state.filter),
})


const mapDispatchToProps = dispatch => ({
    switchTodo: (id) => dispatch(actions.switchTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);