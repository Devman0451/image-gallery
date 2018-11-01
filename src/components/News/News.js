import React from 'react';

import styles from './News.module.css';

import InfoColumn from './InfoColumn/InfoColumn';

const imgPath = process.env.PUBLIC_URL + '/assets/images/';

const artists = [
    'RJ MacCready',
    'Bennings',
    'Windows',
    'Doc',
    'Palmer',
    'Childs',
    'Nauls'
]

const images = [
    'Paprika',
    'Neon Purple',
    'Blue Candles',
    'Opulent Giraffe',
    'Pleasing Puff',
    'Earmuffs',
    'Raccoon Friend'
]

const news = (props) => (
    <div className={styles['news']}>
        <InfoColumn title="Popular Artists" items={artists}/>
        <div className={styles['latest-submission']}>
            <h3>Latest Submission</h3>
            <img src={imgPath + 'img1.jpeg'} alt=""/>
        </div>
        <InfoColumn title="Popular Images" items={images}/>
    </div>
);

export default news;