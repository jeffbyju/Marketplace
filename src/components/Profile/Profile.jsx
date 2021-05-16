import React from 'react';
import './Profile.css'
import {Link} from 'react-router-dom'

const Profile = props => {
    return ( 
        <div className="profile">
            <img className="profile-image" src={props.imgURL} alt=""/>
            <div class="profile-title">
                <span>{props.name}</span>
                <Link to={`/profiles/${props.id}`}>See Page</Link>
            </div>
        </div>
     );
}
 
export default Profile;