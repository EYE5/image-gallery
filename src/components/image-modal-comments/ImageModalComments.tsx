import React from "react";
//components
import ImageModalComment from "../image-modal-comment/ImageModalComment";
//styles
import './ImageModalComments.css';

const updateComments = (comments:Array<object>) => {
    console.log(comments)
    if(comments.length!==0) {
        return comments.map((comment, index) => <ImageModalComment key={index} comment={comment}/>);
    } else {
        return [<h4 key='none' className="image_modal_comments-empty_comments">Comments section is empty. Write comment first!</h4>]
    }
}

const ImageModalComments = ({comments}) => {
    comments = updateComments(comments);
    return(
        <div className="image_modal_comments-container">
            {comments}
        </div>
    )
};

export default ImageModalComments;
