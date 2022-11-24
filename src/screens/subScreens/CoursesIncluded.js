import React, { useState } from "react";
import Radium from "radium";
import { CoursesIncludedCard } from "../../components";

const styles = {
  container: {
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "170px 0px",
    "@media (max-width: 600px)": {
      padding: "170px 30px",
    },
  },
  heading: {
    fontSize: "45px",
    marginBottom: "60px",
    textAlign: "center",
    "@media (max-width: 600px)": {
      fontSize: "22px",
    },
  },
  description: {
    marginBottom: "60px",
    textAlign: "center",
    padding: "0px 40px",
    lineHeight: "25px",
  },
  cardBox: {
    width: "100%",
    padding: "0px 100px",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    "@media (max-width: 900px)": {
      padding: "0px 30px",
    },
    "@media (max-width: 600px)": {
      padding: "0px 0px",
    },
  },
};

const coursesData = [
  {
    photoUrl:
      "https://websitedemos.net/ecourse-learn-photoshop-04/wp-content/uploads/sites/177/2018/04/courses-01-free-img.jpg",
    name: "Photoshop CC Selections",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    photoUrl:
      "https://websitedemos.net/ecourse-learn-photoshop-04/wp-content/uploads/sites/177/2018/04/courses-02-free-img.jpg",
    name: "Photoshop CC Working With Type",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    photoUrl:
      "https://websitedemos.net/ecourse-learn-photoshop-04/wp-content/uploads/sites/177/2018/04/courses-03-free-img.jpg",
    name: "Understanding The Pen Tool In Photoshop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    photoUrl:
      "https://websitedemos.net/ecourse-learn-photoshop-04/wp-content/uploads/sites/177/2018/04/courses-04-free-img.jpg",
    name: "Photoshop CC Smart Objects",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    photoUrl:
      "https://websitedemos.net/ecourse-learn-photoshop-04/wp-content/uploads/sites/177/2018/04/courses-05-free-img.jpg",
    name: "Creating Templates In Photoshop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    photoUrl:
      "https://websitedemos.net/ecourse-learn-photoshop-04/wp-content/uploads/sites/177/2018/04/courses-06-free-img.jpg",
    name: "Retouching Photos And Adding Visual Effects In Photoshop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    photoUrl:
      "https://websitedemos.net/ecourse-learn-photoshop-04/wp-content/uploads/sites/177/2018/04/courses-07-free-img.jpg",
    name: "Creating Photo Manipulations For Advertising With Photoshop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
];

const CoursesIncluded = () => {
  const [data, setData] = useState(coursesData);
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Courses Included</h1>
      <p style={styles.description}>
        Proin gravida nibh vel velit auctor aliquet aenean sollicitudin, lorem
        quis bibendum auctor nisi elit consequat ipsum.
      </p>
      <div style={styles.cardBox}>
        {data.map((x, i) => {
          return <CoursesIncludedCard key={i} data={x} />;
        })}
      </div>
    </div>
  );
};

export default Radium(CoursesIncluded);
