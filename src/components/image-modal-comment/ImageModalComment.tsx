import React from "react";
import './ImageModalComment.css';

const ImageModalComment = ({comment}) => {
    const fullDate = new Date(comment.date),
            day = fullDate.getDay()+2>=10?`${fullDate.getDay()+2}`:`0${fullDate.getDay()+2}`,
            month = fullDate.getMonth()+2>=10?`${fullDate.getMonth()+1}`:`0${fullDate.getMonth()+1}`;
    const commentDate = `${day}.${month}.${fullDate.getUTCFullYear()}`
    return(
        <div className='image_modal_comment-container'>
            <div className="image_modal_comment-date">{commentDate}</div>
            <div className="image_modal_comment-text">{comment.text}</div>
        </div>
    )
};

export default ImageModalComment;
