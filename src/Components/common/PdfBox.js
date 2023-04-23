import React from "react";
import "./PdfBox.css";

const PdfBox = () => {
  return (
    <>
      <div className="pdf-box-container">
        <div className="pdf-box-cover">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968517.png"
            alt=""
          />
        </div>
        <h3>Importance of Training and Development Programs</h3>
        <div className="pdf-box-info-div">
          <div className="box1">1</div>
          <div className="box1">2</div>
          <div className="box1">3</div>
        </div>
        <button>View Document</button>
      </div>
    </>
  );
};

export default PdfBox;
