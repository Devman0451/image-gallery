import React from 'react';

import styles from './InfoColumn.module.css';

const infoColumns = (props) => {

    const listItems = props.items.map(listItem => {
        return (
            <li key={listItem}>{listItem}</li>
        );
    });

    return (
        <div className={styles['news-list']}>
            <h3>{props.title}</h3>
            <ul>
                {listItems}
            </ul>
        </div>
    );
};

export default infoColumns;