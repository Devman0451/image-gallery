import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchShowcaseProfile } from '../../store/profileActions';

import styles from './Profile.module.css';

const imgPath = process.env.PUBLIC_URL + '/assets/images/';

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
        return (
            <>
            <div className={styles["ProfileBanner"]}>
                <img src={imgPath + "artist.jpg"} alt="artist" className={styles["ProfileImage"]} />
                <h1>{title}</h1>
                <h3>{handle}</h3>
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