

import { useDispatch, useSelector } from 'react-redux';
import React, {useState } from 'react';
// import "../modal/Modal.css"
import './imageUpload.css'
import "../styles.module.css"
import {setImageUrl} from '../../reducers/imageUploadReducer'


const ImageUpload = ({ activeImage, setModalImage }) => {
  const defaultImage = useSelector(state => state.imageUrl.imageUrl)
  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState(defaultImage);
  const dispatch = useDispatch()
  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setImageURL(fileReader.result);
  };
  const handleOnChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];
      setImage(file);
      fileReader.readAsDataURL(file);
    }
  };

 

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files.length) {
      setImage(e.dataTransfer.files[0]);
      fileReader.readAsDataURL(e.dataTransfer.files[0]);
    }
  };

  const handleDragEmpty = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  
  const setImgUrl = (imageUrl1) => {
  
    
    dispatch(setImageUrl(imageUrl1));
  }
  return (
    <div className={activeImage ? "modalImage active" : "modalImage"} onClick={() => setModalImage(false)}>
      <div className={activeImage ? "modalImage_content active" : "modalImage_content"} onClick={e => e.stopPropagation()}>
            <form className="file-uploader">
                      <label
                        htmlFor="file-loader-button"
                        className="file-uploader__custom-button"
                      >
                        Выберете файл
                      </label>

                      <label className="file-uploader__custom-button" onClick={() => setImgUrl(imageURL)}>Загрузить аватарку</label>
                        
                      

                      <input
                        id="file-loader-button"
                        type="file"
                        className="file-uploader__upload-button"
                        onChange={handleOnChange}
                      />

                      <img
                        src={imageURL ? imageURL : "no_photo.jpg"}
                        className="file-uploader__preview"
                        alt="preview"
                        onDrop={handleDrop}
                        onDragEnter={handleDragEmpty}
                        onDragOver={handleDragEmpty}
                      />

                      <div className="file-uploader__file-name">{image ? image.name : ""}</div>
            </form>
      </div>
    </div>
  );
};

export default ImageUpload;
