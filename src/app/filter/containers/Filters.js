import React from 'react';
import FilterButton from '../components/FilterButton'
import types from '../duck/types';


const Filters = () => {
    return (
        <div>
            <FilterButton filter={types.FILTER.SHOW_ALL}>All</FilterButton>
            <FilterButton filter={types.FILTER.SHOW_ACTIVE}>Active</FilterButton>
            <FilterButton filter={types.FILTER.SHOW_COMPLETED}>Completed</FilterButton>
        </div>
    );
}

export default Filters;