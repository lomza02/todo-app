import React from 'react';

const ListItem = ({ text, id, completed, onClick }) => {
    return (
        <li style={{ textDecoration: completed ? 'line-through' : null }} id={id} onClick={onClick}>{text}</li>
    );
}


export default ListItem;