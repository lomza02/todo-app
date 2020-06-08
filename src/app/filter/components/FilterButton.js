import React from 'react'
import { connect } from 'react-redux';
import actions from '../duck/actions'


const FilterButton = ({ children, filter, switchFilter, activeFilter }) => {
    const handleFilter = () => {
        switchFilter(filter)
    }
    return (
        <button disabled={activeFilter === filter} onClick={handleFilter}>{children}</button>
    );
}

const mapStateToProps = (state) => ({
    activeFilter: state.filter,
})

const mapDispatchToProps = (dispatch) => ({
    switchFilter: (filter) => dispatch(actions.switchFilter(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);