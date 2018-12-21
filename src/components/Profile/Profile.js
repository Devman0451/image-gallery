import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchShowcaseProfile } from '../../store/profileActions';
import ImageThumb from '../../components/ImageThumb/ImageThumb';

import styles from './Profile.module.css';

const imgPath = process.env.PUBLIC_URL + '/assets/images/';
const images = ["img10.jpeg", "img11.jpeg", "img12.jpeg", "img13.jpeg", "img14.jpeg"];

class Profile extends Component {
    
    componentDidMount() {
        if(this.props.profile == null) {
            this.props.fetchProfile(this.props.match.params.profile_id);
        }
        console.log(this.props.profile);
    }

    render() {
        const title = this.props.profile ? this.props.profile.name : "Profile";
        const handle = this.props.profile ? this.props.profile.handle : "@handle";
        const imgs = images.map(image => {
            return (
                <Link to={"/images/" + image} key={image}>
                    <ImageThumb
                        author=""
                        title={image}
                        imagePath={`${imgPath + image}`} />
                </Link>
            )
        });

        return (
            <>
            <div className={styles["ProfileBanner"]}>
                <img src={imgPath + "artist.jpg"} alt="artist" className={styles["ProfileImage"]} />
                <h1>{title}</h1>
                <h3>{handle}</h3>
            </div>
            <div className={styles['ProfileGallery']}>
                {imgs}
            </div>
            </>
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
        fetchProfile: (profile) => {dispatch(fetchShowcaseProfile(profile))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);