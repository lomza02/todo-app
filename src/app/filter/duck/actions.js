import types from './types';

const switchFilter = (filter) => ({
    type: types.SWITCH_FILTER,
    filter,
})

export default { switchFilter };