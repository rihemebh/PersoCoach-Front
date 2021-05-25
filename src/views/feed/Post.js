import React from 'react';
import {Avatar} from "@material-ui/core";
import ThumbIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutlineIcon" ;
import NearMeIcon from "@material-ui/icons/NearMeIcon";
import AccountCircleIcon from "@material-ui/icons/AccountCircleIcon";
import {ExpandMoreOutlined} from "@material-ui/icons" ;
function Post({profilePic, image,username, timestamp,message}) {
    return (
        <div className="post">
            <div className="post_top">
                <Avatar src={profilePic} className="post_avatar"/>
                <div className="post_topInfo" >
                    <h5>{username}</h5>
                    <p>Timestamp...</p>
                </div>
            </div>
            <div className="post_bottom">
                <p>{message}</p>
            </div>
            <div className="post_image">
                <img src={image} alt=""/>
            </div>
            <div className="post_options">
                <div className="post_option">
                    <ThumbIcon />
                    <p>Like</p>
                </div>
                <div className="post_option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post_option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post_option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlined/>
                    
                </div>
            </div>
        </div>
    );
}

export default Post;
