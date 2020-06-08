import type from './types'

const initialState = []

const todos = (state = initialState, action) => {
    switch (action.type) {
        case type.ADD_TODO:
            return [
                ...state,
                {
                    completed: action.completed,
                    id: action.id,
                    text: action.text,
                }
            ]
        case type.SWITCH_TODO:
            return state.map(todo => {
                const isToggled = todo.id === action.id;
                console.log(todo.id, action.id)
                return {
                    ...todo,
                    completed: isToggled ? !todo.completed : todo.completed,
                }
            });
        default:
            return state;
    }

}

export default todos;