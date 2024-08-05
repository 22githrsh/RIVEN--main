import React from "react";

function LeftImg({ img }) {
  return (
    <div className="w-full md:w-1/2 h-auto md:h-full overflow-hidden">
      <img className="w-full h-full object-cover" src={img} alt="" />
    </div>
  );
}

export default LeftImg;
