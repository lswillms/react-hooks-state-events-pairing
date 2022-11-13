import React, { useState } from "react";
import Comments from "./Comments";

function Video ({ videoDetails}) {

    const [ like, setLike] = useState(videoDetails)
    const [isVisible, setIsVisible] = useState("")
    
      
    function likeVideo () {
        let video = {...like}
        video.upvotes = video.upvotes + 1
         setLike(video)
    }
    
    function dislikeVideo () {
        let video = {...like}
        video.downvotes = video.downvotes - 1
        setLike(video)
    }

    const toggleComments = () => {
        setIsVisible(isVisible => !isVisible)
    }

    const handleComments = () => {
        toggleComments()
    }

    return (
        <div>
             <h1> {videoDetails.title}</h1>
            <span>{videoDetails.views} views | Uploaded: {videoDetails.createdAt} </span>
            
            <div className="likes">
            <button onClick = {likeVideo}> {like.upvotes}👍</button>
            <button onClick = {dislikeVideo}>{like.downvotes}👎 </button>
            </div>
            <div>
            <button onClick= {handleComments}>{isVisible ? "Comments" : "Show Comments"}</button>
            {isVisible ? <Comments comments= {videoDetails.comments} />: ""}
            </div>
            
        </div>
    )
}

export default Video