import type from './types'
let currentId = 0;

const addTask = (text) => ({
    type: type.ADD_TODO,
    completed: false,
    id: currentId++,
    text,
})
const switchTodo = (id) => ({
    type: type.SWITCH_TODO,
    id,
})

export default {
    addTask,
    switchTodo,
}