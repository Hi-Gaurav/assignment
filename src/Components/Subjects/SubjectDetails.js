import React from "react";
import "./SubjectDetails.css";
import { Link } from "react-router-dom";

const SubjectDetails = () => {
  return (
    <>
      <div className="sub-details-container">
        <Link to={"/business-development"}>
          <h3 style={{ color: "#405fbd" }}>Business Management</h3>
        </Link>
        <p>
          Well, nothing to worry about business management homework help, we are
          willing to help you.
        </p>
        <div className="sub-details-container-item">
          <Link to={"/business-development"}>
            <h3 style={{ fontWeight: "500" }}>Business Development</h3>
          </Link>
          <p style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.3)" }}>
            27058 documents
          </p>
        </div>
        <div className="sub-details-container-item">
          <Link to={"/business-development"}>
            <h3 style={{ fontWeight: "500" }}>Finance</h3>
          </Link>
          <p style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.3)" }}>
            27058 documents
          </p>
        </div>
        <div className="sub-details-container-item">
          <Link to={"/business-development"}>
            <h3 style={{ fontWeight: "500" }}>Leadership Management</h3>
          </Link>
          <p style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.3)" }}>
            27058 documents
          </p>
        </div>
        <div className="sub-details-container-item">
          <Link to={"/business-development"}>
            <h3 style={{ fontWeight: "500" }}>Entrepreneurship</h3>
          </Link>
          <p style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.3)" }}>
            27058 documents
          </p>
        </div>
      </div>
    </>
  );
};

export default SubjectDetails;
