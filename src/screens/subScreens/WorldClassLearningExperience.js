import React from "react";
import Radium from "radium";
import { EnrollInCourseBtn } from "../../components";

const styles = {
  container: {
    width: "100%",
    height: "600px",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  body: {
    width: "60%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: "center",
    padding: "150px 0px",
    "@media (max-width: 900px)": {
      width: "85%",
    },
    "@media (max-width: 600px)": {
      width: "90%",
      padding: "100px 0px",
    },
  },
  heading: {
    fontSize: "40px",
    "@media (max-width: 1100px)": {
      fontSize: "30px",
    },
    "@media (max-width: 600px)": {
      fontSize: "23px",
    },
  },
  description: {
    lineHeight: "25px",
  },
};

const WorldClassLearningExperience = () => {
  return (
    <div style={styles.container}>
      <div style={styles.body}>
        <h1 style={styles.heading}>World-Class Learning Experience</h1>
        <p style={styles.description}>
          Learn how to use Photoshop proin gravida nibh vel velit auctor
          aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
          consequat ipsum, nec sagittis sem nibh id elit duis sed odio sit amet
          nibh.
        </p>
        <EnrollInCourseBtn />
      </div>
    </div>
  );
};

export default Radium(WorldClassLearningExperience);
