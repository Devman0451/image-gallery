import React from 'react';

import styles from './Loader.module.css';

const loader = () => (
    <div className={styles["lds-ring"]}><div></div><div></div><div></div><div></div></div>
);

export default loader;