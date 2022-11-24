import React from "react";
import {
  ILoveTeaching,
  AboutTheAuthor,
  WhatRecommendsHim,
  UnderstandingThomasAsAPerson,
  GetStartedNow,
  Footer,
} from "../screens";

const About = () => {
  return (
    <>
      <ILoveTeaching />
      <AboutTheAuthor color={"white"} />
      <WhatRecommendsHim />
      <UnderstandingThomasAsAPerson />
      <GetStartedNow
        url={
          "https://websitedemos.net/ecourse-learn-photoshop-04/wp-content/uploads/sites/177/2018/04/bg-04-free-img.jpg"
        }
      />
      <Footer />
    </>
  );
};

export default About;
