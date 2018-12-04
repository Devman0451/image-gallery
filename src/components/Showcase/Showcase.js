import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchShowcaseProfile } from '../../store/profileActions';

import styles from './Showcase.module.css';

const imgPath = process.env.PUBLIC_URL + '/assets/images/';

class Showcase extends Component {

    componentDidMount() {
        this.props.fetchProfile('JackBurton');
    }

    render() {

        const linksArr = [];

        if (this.props.profile !== null) {
            for(let image of Object.keys(this.props.profile.images)) {
                linksArr.push(this.props.profile.images[image]);
            }
        }

        const links = linksArr.length === 0 ? null : (
            linksArr.map(image => (
                <li key={image.title}><a href={image.imageurl}>{image.title}</a></li>
            ))
        )

        const profile = this.props.profile === null ? null : (
            <div className={styles["ArtistInfo"]}>
                <h2>{this.props.profile.name}</h2>
                <h2>{this.props.profile.handle}</h2>
                <a className={styles["ShowcaseLink"]} href={this.props.profile.galleryurl}>Gallery</a>
                <a className={styles["ShowcaseLink"]} href={this.props.profile.topimagesurl}>Top Rated Images</a>
            </div>
        );
        return (
            <div className={styles["Showcase"]}>
                <h1>Artist Spotlight</h1>
                <img src={imgPath + "artist.jpg"} alt="artist" />
                <ul className={styles["ShowcaseList"]}>
                    {links}
                </ul>
                {profile}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        profile: state.profile.showcaseProfile
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProfile: (profile) => { dispatch(fetchShowcaseProfile(profile)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Showcase);