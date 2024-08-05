import React from "react";

function Img({ src }) {
  return (
    <div className="img w-full md:w-1/3 h-auto overflow-hidden hover:opacity-80">
      <img className="w-full h-full object-cover" src={src} alt="" />
    </div>
  );
}

export default Img;
