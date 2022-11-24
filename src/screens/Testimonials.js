import React from "react";
import {
  StudentTestimonialsMain,
  HappyStudents,
  GetStartedNow,
  Footer,
} from "../screens";

const Testimonials = () => {
  return (
    <>
      <StudentTestimonialsMain />
      <HappyStudents />
      <GetStartedNow
        url={
          "https://websitedemos.net/ecourse-learn-photoshop-04/wp-content/uploads/sites/177/2018/04/bg-04-free-img.jpg"
        }
      />
      <Footer />
    </>
  );
};

export default Testimonials;
