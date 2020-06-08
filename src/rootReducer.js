import { combineReducers } from 'redux';
import todoReducer from './app/todos/duck/index';
import filterReducer from './app/filter/duck/index';


const rootReducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer,
});

export default rootReducer;

