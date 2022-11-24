import React from "react";
import {
  WhatYouWillLearn1,
  CoursesIncluded,
  GetStartedNow,
  Footer,
} from "../screens";

const Courses = () => {
  return (
    <>
      <WhatYouWillLearn1 />
      <CoursesIncluded />
      <GetStartedNow
        url={
          "https://websitedemos.net/ecourse-learn-photoshop-04/wp-content/uploads/sites/177/2018/04/bg-04-free-img.jpg"
        }
      />
      <Footer />
    </>
  );
};

export default Courses;
