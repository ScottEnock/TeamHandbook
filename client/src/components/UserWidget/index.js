import React from 'react'
import "./userWidget.scss"
import avatar from "../../assets/images/avatar.png"

export default function index({username, profilePicture, organisationName}) {
    return (
        <div className="user-widget">
            <img src={profilePicture ? profilePicture : avatar } alt=""/>
            <div className="info">
                <h2>{organisationName}</h2>
                <span>{username}</span>
            </div>
        </div>
    )
}
