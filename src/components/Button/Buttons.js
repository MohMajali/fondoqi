import React from "react";

const Buttons = ({ className, text, onClick, number }) => {
  return (
    <button className={className} onClick={onClick} disabled={number <= 1}>
      {text}
    </button>
  );
};

export default Buttons;
