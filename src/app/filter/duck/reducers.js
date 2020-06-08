import types from './types';


const filter = (state = types.FILTER.SHOW_ALL, actions) => {
    switch (actions.type) {
        case types.SWITCH_FILTER:
            return actions.filter;
        default:
            return state;
    }
}

export default filter;