import React from "react";

const Hotel_Images = ({ photos, handleChange }) => {
  return (
    <div className="hotel-images">
      {photos.map((photo, i) => (
        <div className="hotel-img-wrapper">
          <img
            onClick={() => handleChange(i)}
            src={photo.src}
            alt="img"
            className="hotel-img"
          />
        </div>
      ))}
    </div>
  );
};

export default Hotel_Images;
