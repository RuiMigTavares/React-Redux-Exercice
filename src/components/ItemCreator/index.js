import React from 'react';
import styles from './styles.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createTask } from '../../actions';

const ItemCreator = ({onCreateTask}) => {
    let inputField;
    
    return (<div className={styles.itemCreator}>
        <input ref={(input)=>{inputField = input}} className={styles.itemCreator} type="text"/>
        <button onClick={()=>{ inputField.value && onCreateTask(inputField.value); inputField.value = ''; }} className={styles.itemCreator} type="button">Add</button>
    </div>);
}

ItemCreator.propTypes = {
    onCreateTask: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    onCreateTask: (newItem) => dispatch(createTask(newItem)),
});

export default connect(null, mapDispatchToProps)(ItemCreator);