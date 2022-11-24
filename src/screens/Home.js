import React from "react";
import {
  LearnPhotoshop,
  WorldClassLearningExperience,
  WhyLearningOnline,
  WhatYouWillLearn,
  AboutTheAuthor,
  StudentTestimonials,
  GetStartedNow,
  Footer,
} from "./index";

const Home = () => {
  return (
    <>
      <LearnPhotoshop />
      <WorldClassLearningExperience />
      <WhyLearningOnline />
      <WhatYouWillLearn color={"rgb(245,245,245)"} />
      <AboutTheAuthor
        url={
          "https://websitedemos.net/ecourse-learn-photoshop-04/wp-content/uploads/sites/177/2020/01/about-bg.jpg"
        }
      />
      <StudentTestimonials />
      <GetStartedNow
        url={
          "https://websitedemos.net/ecourse-learn-photoshop-04/wp-content/uploads/sites/177/2018/04/bg-04-free-img.jpg"
        }
      />
      <Footer />
    </>
  );
};

export default Home;
