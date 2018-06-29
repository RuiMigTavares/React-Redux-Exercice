import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Item from '../Item/';

const ItemList = (props) => {
    const { todos } = props;
    return (
        <ul>
            { todos.map(item => <Item key={item.id}>{item.content}</Item>)}
        </ul>
    )
}
    
const mapStateToProps = (state) => {
    return { todos: state.todos.items }
}

ItemList.propTypes = {
    todos: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(ItemList);