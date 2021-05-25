import React, {useState} from 'react';
import {Avatar} from "material-ui/core";
import "./MessageSender.css";
import VideocamIcon from "materi-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function MessageSender() {
    const [input, setInput]= useState('');
    const [imageUrl, setImageUrl]= useState('');
    const handleSubmit = e =>{
     e.preventDefault();
     setImageUrl('');
     setInput('');
    };
    return (
        <div className="messageSender">
            <div className="messageSender_top">
            <Avatar/>
            <form>
                <input 
                value={input}
                onChange={ (e) => setInput(e.target.value)}
                className="messageSender_input" 
                placeholder={"What's on your mind Persocoacher?"} />
                <input 
                value={imageUrl}
                onChange={(e)=> setImageUrl(e.target.value)}
                placeholder="image URL (Optional)"/>
                <button onClick={handleSubmit} type="submit">
                  Hidden submit
                </button>
            </form>
            </div>
            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideocamIcon style={{color:'#E83136'}}/>
                    <h5 style={{marginLeft:'10px'}}>Live video</h5>
                </div>
                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{color:'#2BB645'}}/>
                    <h5 style={{marginLeft:'10px'}}>Photo/video</h5>
                </div>
                <div className="messageSender_option">
                    <InsertEmoticonIcon style={{color:'#067FEF'}}/>
                    <h5 style={{marginLeft:'10px'}}>Feeling/Activity</h5>
                </div>
            </div>
        </div>
    );
}

export default MessageSender;
