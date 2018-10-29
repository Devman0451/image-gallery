import React from 'react';

import styles from './News.module.css';

import InfoColumn from './InfoColumn/InfoColumn';

const news = (props) => (
    <div className={styles['news']}>
        <InfoColumn/>
        <div>
            <h3>Latest Submission</h3>
            <img src="" alt=""/>
        </div>
        <InfoColumn/>
    </div>
);

export default news;