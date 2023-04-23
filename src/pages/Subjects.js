import React from "react";
import "./Subjects.css";
import SubjectDetails from "../Components/Subjects/SubjectDetails";
// import Search from "../Components/common/Search";

const Subjects = () => {
  return (
    <>
      <h1 className="heading">Study Resources via Subjects</h1>
      <p className="sub-heading" style={{ maxWidth: "50rem" }}>
        Find using our extensive subjects filters & get most out of it.
      </p>
      <div className="main-content">
        <SubjectDetails />
        <SubjectDetails />
        <SubjectDetails />
        <SubjectDetails />
        <SubjectDetails />
        <SubjectDetails />
        <SubjectDetails />
        <SubjectDetails />

        <div className="join-now-details">
          <h2>Join us and improve your grades with best deals.</h2>
          {/* <div className="join-now-btn">
            <h3>Join Now</h3>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Subjects;
