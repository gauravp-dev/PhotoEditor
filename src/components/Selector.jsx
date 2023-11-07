import React, { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import "./ImageEditor.css";

function Selector(props) {
  const [crop, setCrop] = useState({
    unit: "%",
    x: 20,
    y: 10,
    width: 30,
    height: 10,
  });
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  function onCropComplete(croppedAreaPixels) {
    console.log("Croped Are:", croppedAreaPixels);
    setCroppedAreaPixels(croppedAreaPixels);
    props.makeSelection(croppedAreaPixels);
  }

  function onCropChange(crop) {
    setCrop(crop);
  }
  return (
    <ReactCrop
      className="cropper"
      ruleOfThirds
      crop={crop}
      onChange={onCropChange}
      onComplete={onCropComplete}
    >
      <img src={props.imgFile} />
    </ReactCrop>
  );
}

export default Selector;
