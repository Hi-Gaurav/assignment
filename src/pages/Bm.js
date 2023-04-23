import React from "react";
import "./Bm.css";
import Search from "../Components/common/Search";
import SubjectCard from "../Components/common/SubjectCard";

const Bm = () => {
  return (
    <>
      <div className="heading-bm-container">
        <div className="headings-bm">
          <h1 className="heading">Business Management</h1>
          <p className="sub-heading" style={{ maxWidth: "50rem" }}>
            Get the best quality business management homework help and boost
            your academics grades and secure your bright shining future toward
            success.
          </p>
        </div>
        <Search />
      </div>
      <div className="subject-cards">
        <SubjectCard />
        <SubjectCard />
        <SubjectCard />
        <SubjectCard />
        <SubjectCard />
      </div>
    </>
  );
};

export default Bm;
