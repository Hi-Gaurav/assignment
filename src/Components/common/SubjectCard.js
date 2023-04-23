import React from "react";
import "./SubjectCard.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const SubjectCard = () => {
  return (
    <>
      <div className="sub-card-container">
        <div className="sub-card-heading">
          <h3>Business Management</h3>
          <div className="arrow">
            <AiOutlineArrowRight />
          </div>
        </div>
        <p>27058 documents</p>
      </div>
    </>
  );
};

export default SubjectCard;
