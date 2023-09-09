import React from "react";

const Hotel_Images = ({ photos }) => {
  return (
    <div className="hotel-images">
      {photos.map((photo) => (
        <div className="hotel-img-wrapper">
          <img src={photo.src} alt="img" className="hotel-img" />
        </div>
      ))}
    </div>
  );
};

export default Hotel_Images;
