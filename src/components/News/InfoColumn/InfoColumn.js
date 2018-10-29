import React from 'react';

import styles from './InfoColumn.module.css';

const infoColumns = (props) => (
    <div className={styles['news-list']}>
        <h3>Popular Artists</h3>
        <ul>
            <li>RJ MacCready</li>
            <li>Bennings</li>
            <li>Windows</li>
            <li>Doc</li>
            <li>Palmer</li>
            <li>Childs</li>
            <li>Nauls</li>
        </ul>
    </div>
);

export default infoColumns;