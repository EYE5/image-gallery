import React, {useEffect, useState} from "react";
import ImageListItem from "../image-list-item/ImageListItem";
import './ImageList.css';
import Api from '../../api/api';



const getImageList = async () => {
    const api = new Api();
    const items = await api.getItems();
    let imageList:Array<JSX.Element> = [];
    if ( items !== undefined ) {
        for (const [index,item] of items.data.entries()) {
            imageList.push(<ImageListItem key={index} id={item.id} image={item.url}/>)
        }
    }
    return imageList;
}

const ImageList = () => {
    const [imageList,setImageList] = useState([]);
    useEffect(()=>{
         getImageList().then((res:any)=>{
             setImageList(res);
         })
    },[]);

    return (
    <div className="image_list">
        {imageList}
    </div>
    )
};
export default ImageList;
