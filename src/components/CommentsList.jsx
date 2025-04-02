import React from "react";
import CommentCard from "./CommentCard"

const CommentsList = ({ comments, currentUser, onCommentDelete }) => {
    

   
    return (

        <div className="comments-list">
            {comments.length > 0 ? (
                comments.map((comment) => (
                    <CommentCard key={comment.comment_id} 
                    comment={comment} 
                            currentUser={currentUser}
                            onDelete={onCommentDelete}/>
                ))
            ):(
                <p>No comments available</p>
            )}
            
            </div>
    );
};
export default CommentsList