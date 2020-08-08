import React, {FormEvent, useEffect, useState} from "react";

//Api
import Api from "../../api/api";
//styles
import './ImageModalAddCommentForm.css';
import Loader from "../loader/Loader";

interface IImageModalAddCommentFormProps {
    itemID:String,
    setItemData:Function
}

const addComment = async (event : FormEvent<HTMLFormElement>, itemID:String, commentData:any, setItemData:Function, setLoader:Function) => {
    event.preventDefault();
    setLoader(true)
    const api = new Api();
    const res = await api.postComment(itemID, commentData);
    if (res !== undefined) {
        if (res.status === 204) {
            setItemData((prev) => {
                const newComments = [...prev.comments, {date: Number(new Date()), text: commentData.comment}]
                return {id: prev.id, url: prev.url, comments: newComments}
            })
        }
        setLoader(false);
    }

}

const ImageModalAddCommentForm = ({itemID,setItemData}:IImageModalAddCommentFormProps) => {

    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [loader, setLoader] = useState(false);
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
        <form className="image_modal_addcomment_form-container" onSubmit={(event)=>addComment(event, itemID, commentObject, setItemData, setLoader)}>
            <input className="image_modal_addcomment_form-input" required type="text" placeholder="Ваше имя" value={username} onChange={(event => setUsername((event.target as HTMLInputElement).value))}/>
            <input className="image_modal_addcomment_form-input" required type="text" placeholder="Ваш комментарий" value={message} onChange={(event => setMessage((event.target as HTMLInputElement).value))}/>
            <input className="image_modal_addcomment_form-button" type="submit" value="Оставить комментарий" />
            {loader ? <Loader/> : ''}
        </form>
    )
}

export default ImageModalAddCommentForm;
