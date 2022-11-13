import React from "react";

function CommentCard( {user, comment }) {
   
    return (
        <div>
         <h2>{user}</h2>
         <h3>{comment}</h3>
        </div>
    )
}

export default CommentCard