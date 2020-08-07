import React, {useEffect, useState} from "react";

//Api
import Api from "../../api/api";
//styles
import './ImageModalAddCommentForm.css';

const addComment = async (event, itemID, commentData, setItemData) => {
    event.preventDefault();
    const api = new Api();
    const res = await api.postComment(itemID,commentData);
    if(res!==undefined){
        if(res.status===204){
            setItemData((prev)=>{
                const newComments = [...prev.comments,{date:Number(new Date()), text:commentData.comment}]
                return {id:prev.id,url:prev.url,comments:newComments}})

        }
    }

}

const ImageModalAddCommentForm = ({itemID,setItemData}) => {

    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    let commentObject = {
        id:1,
        name:username,
        comment:message
    }
    useEffect(()=>{
        commentObject = {
            id:++commentObject.id,
            name: username,
            comment: message
        }
    },[username,message])
    return(
        <form className="image_modal_addcomment_form-container">
            <input className="image_modal_addcomment_form-input" type="text" placeholder="Ваше имя" value={username} onChange={(event => setUsername((event.target as HTMLInputElement).value))}/>
            <input className="image_modal_addcomment_form-input" type="text" placeholder="Ваш комментарий" value={message} onChange={(event => setMessage((event.target as HTMLInputElement).value))}/>
            <button className="image_modal_addcomment_form-button" onClick={(event)=>addComment(event,itemID,commentObject,setItemData)}> Оставить комментарий </button>
        </form>
    )
}

export default ImageModalAddCommentForm;
