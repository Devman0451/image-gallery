import React, { Component } from 'react';

import styles from './Showcase.module.css';

const imgPath = process.env.PUBLIC_URL + '/assets/images/';

class Showcase extends Component {
    render() {
        return (
            <div className={styles["Showcase"]}>
                <h1>Artist Spotlight</h1>
                <img src={imgPath + "artist.jpg"} alt="artist"/>
                <ul className={styles["ShowcaseList"]}>
                    <li><a>Image</a></li>
                    <li><a>Image</a></li>
                    <li><a>Image</a></li>
                    <li><a>Image</a></li>
                    <li><a>Image</a></li>
                    <li><a>Image</a></li>
                    <li><a>Image</a></li>
                </ul>
                <div className={styles["ArtistInfo"]}>
                    <h2>Jack Burton</h2>
                    <h2>@JackBurtonBTLC</h2>
                    <a className={styles["ShowcaseLink"]} href="#!">Gallery</a>
                    <a className={styles["ShowcaseLink"]} href="#!">Top Rated Images</a>
                </div>
            </div>
        );
    }
}

export default Showcase;