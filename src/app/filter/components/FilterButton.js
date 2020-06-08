import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import actions from '../duck/actions'


const FilterButton = ({ children, filter }) => {
    const dispatch = useDispatch();
    const switchFilter = (filter) => dispatch(actions.switchFilter(filter));
    const activeFilter = useSelector(state => state.filter);

    return (
        <button disabled={activeFilter === filter} onClick={() => switchFilter(filter)}>{children}</button>
    );
}

export default FilterButton;