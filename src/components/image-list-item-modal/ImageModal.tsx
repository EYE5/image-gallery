import React,{useState,useEffect} from "react";

//api
import Api from "../../api/api";

//components
import ImageModalComments from "../image-modal-comments/ImageModalComments";
import ImageModalAddCommentForm from "../image-modal-addcomment-form/ImageModalAddCommentForm";
//styles
import './ImageModal.css';

const getItemData = async (id) => {
    const api = new Api();
    const res = await api.getItemData(id);
    if(res!==undefined){
        return {
            id:res.data.id,
            url:res.data.url,
            comments:res.data.comments,
        }
    }

};

const ImageModal = (props) => {
    const [itemData,setItemData] = useState({id:'',url:'',comments:[]});
    useEffect(()=>{
        getItemData(props.match.params.itemID).then(r => {
            if(r!==undefined)
            setItemData(r);
        })
    },[]);
  return(
      <div className="image_modal-flex_align_center">
          <div className="image_modal-container">
            <img alt={itemData.id} src={itemData.url} className="image_modal-img" />
                <ImageModalComments comments={itemData.comments}/>
                <ImageModalAddCommentForm itemID={itemData.id} setItemData={setItemData}/>
          </div>
      </div>
  )
};

export default ImageModal;
