import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchShowcaseProfile } from '../../store/profileActions';
import ImageThumb from '../../components/ImageThumb/ImageThumb';

import styles from './Profile.module.css';

const imgPath = process.env.PUBLIC_URL + '/assets/images/';

class Profile extends Component {
    
    componentDidMount() {
        if(this.props.profile == null) {
            this.props.fetchProfile(this.props.match.params.profile_id);
        }
    }

    render() {
        const linksArr = [];
        if (this.props.profile !== null) {
            for(let image of Object.keys(this.props.profile.images)) {
                linksArr.push(this.props.profile.images[image]);
            }
        }

        const title = this.props.profile ? this.props.profile.name : "Profile";
        const handle = this.props.profile ? this.props.profile.handle : "@handle";
        const imgs =  this.props.profile ? linksArr.map(image => {
            return (
                <Link to={"/" + image.imageurl} key={image.imageurl}>
                    <ImageThumb
                        author=""
                        title={image.title}
                        imagePath={`${imgPath + image.imageurl.split("/")[1]}`} />
                </Link>
            )
        }) : "No Images";

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