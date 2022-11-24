import React from "react";
import Radium from "radium";
import { GetStartedBtn } from "../components";

const CoursesIncludedCard = ({ data: { name, description, photoUrl } }) => {
  const styles = {
    card: {
      width: "100%",
      minHeight: "300px",
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      "@media (max-width: 750px)": {
        flexDirection: "column",
      },
    },
    imageOverlay: {
      "@media (max-width: 750px)": {
        padding: "20px",
      },
    },
    image: {
      backgroundImage: `url(${photoUrl})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "32vw",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)",
      "@media (max-width: 750px)": {
        width: "100%",
        height: "50vw",
      },
    },
    content: {
      flex: 1,
      padding: "40px 40px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      "@media (max-width: 750px)": {
        paddingRight: "20px",
        paddingBottom: "20px",
        paddingLeft: "20px",
        paddingTop: "0px",
      },
    },
    heading: {
      lineHeight: "25px",
      "@media (max-width: 900px)": {
        fontSize: "18px",
      },
    },
    description: {
      lineHeight: "25px",
      "@media (max-width: 750px)": {
        marginTop: "20px",
        marginBottom: "20px",
      },
    },
  };
  return (
    <div style={styles.card}>
      <div style={styles.imageOverlay}>
        <div style={styles.image}></div>
      </div>
      <div style={styles.content}>
        <h2 style={styles.heading}>{name}</h2>
        <p style={styles.description}>{description}</p>
        <GetStartedBtn />
      </div>
    </div>
  );
};

export default Radium(CoursesIncludedCard);
