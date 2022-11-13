import React from "react";
import CommentCard from "./CommentCard";

function Comments ( { comments }) {
    
  
    return(
    <div>
            {comments.map((com) => (
                <CommentCard
                    key = {com.id}
                   user = {com.user}
                comment = {com.comment}/>
            ))}

        
    </div>
    )
}

export default Comments