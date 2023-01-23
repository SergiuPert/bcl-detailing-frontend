import React from 'react';

const PhotoModal = (props) => {

    const closeWhenClickedOutside = (target) => {
        if (target.nodeName != "IMG") {
            props.setPhotoName("0")
        }
    }

    return (
        <div className={"modal"} onClick={(e) => closeWhenClickedOutside(e.target)}>
            <span className="close" onClick={() => props.setPhotoName(0)}>&times;</span>
            <img className={"modalContent"} src={require(`../images/gallery/${props.photoName}.jpg`)}/>
        </div>
    );
};

export default PhotoModal;