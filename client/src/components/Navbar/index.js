import React from 'react'
import UserWidget from "../UserWidget"
import {Link} from "react-router-dom"
import "./navbar.scss"

export default function index() {
    return (
        <nav>
            <UserWidget username={"Scott Enock"} organisationName="Global Cyber Alliance" />
            <div className="navigational-buttons">
                <Link to="search"><i class="im im-home"></i>Home</Link>
                <Link to="search"><i class="im im-magnifier"></i>Search</Link>
                <Link to="search"><i class="im im-star"></i>Starred</Link>
                <Link to="search"><i class="im im-pencil"></i>Drafts</Link>
            </div>
            <div className="navigational-buttons">
                <span className="subheading">Collections</span>
            </div>
            <div className="navigational-buttons">
                <Link to="search"><i class="im im-archive"></i>Archive</Link>
                <Link to="search"><i class="im im-trash-can"></i>Trash</Link>
                <Link to="search"><i class="im im-users"></i>Invite People</Link>
            </div>
        </nav>
    )
}
