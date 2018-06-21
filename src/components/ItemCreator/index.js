import React, { Component } from 'react';
import styles from './styles.css';

class ItemCreator extends Component {
    render () {
        return (<div className={styles.itemCreator}>
            <input className={styles.itemCreator} type="text"/>
            <button className={styles.itemCreator} type="button">Add</button>
        </div>);
    }
}

export default ItemCreator