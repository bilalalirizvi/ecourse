import React from "react";
import Radium from "radium";
import { NavBar, EnrollInCourseBtn } from "../../components";

const styles = {
  container: {
    backgroundImage: `url("https://websitedemos.net/ecourse-learn-photoshop-04/wp-content/uploads/sites/177/2018/04/bg-01-free-img.jpg")`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  overlay: {
    width: "100%",
    height: "800px",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  body: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "space-evenly",
    padding: "100px 0px 150px 0px",
    "@media (max-width: 1200px)": {
      width: "70%",
    },
    "@media (max-width: 900px)": {
      width: "70%",
    },
    "@media (max-width: 600px)": {
      width: "90%",
      padding: "150px 0px 200px 0px",
    },
  },
  heading: {
    color: "white",
    fontSize: "75px",
    "@media (max-width: 900px)": {
      fontSize: "50px",
    },
    "@media (max-width: 600px)": {
      fontSize: "28px",
    },
  },
  description: {
    color: "white",
    lineHeight: "25px",
  },
};

const LearnPhotoshop = () => {
  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <NavBar />
        <div style={styles.body}>
          <h1 style={styles.heading}>Learn Photoshop</h1>
          <p style={styles.description}>
            Working in Photoshop proin gravida nibh vel velit auctor aliquet
            aenean sollicitudin, lorem quis bibendum auctor nisi elit consequat.
          </p>
          <EnrollInCourseBtn />
        </div>
      </div>
    </div>
  );
};

export default Radium(LearnPhotoshop);
