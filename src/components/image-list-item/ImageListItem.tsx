import React from 'react';
import {Link} from 'react-router-dom'
import './ImageListItem.css';

interface IImageListItem {
    id:Number,
    image:string
}

const ImageListItem = ({id,image}) => {

    return(
        <div className="image_list_item">
            <Link to={{pathname:`/image/${id}`}}>
            <img alt={id} src={image}/>
            </Link>
        </div>
    )
}

export default ImageListItem;
