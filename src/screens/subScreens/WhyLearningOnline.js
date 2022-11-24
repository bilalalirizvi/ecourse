import React from "react";
import Radium from "radium";

const styles = {
  overlay: {
    backgroundImage: `url("https://websitedemos.net/ecourse-learn-photoshop-04/wp-content/uploads/sites/177/2020/01/why-learning-bg.jpg")`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  container: {
    width: "100%",
    height: "800px",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: "170px 0px",
  },
  heading: {
    color: "white",
    fontSize: "45px",
    textAlign: "center",
    "@media (max-width: 600px)": {
      fontSize: "22px",
      marginBottom: "20px",
    },
    "@media (max-width: 900px)": {
      marginBottom: "20px",
    },
  },
  description: {
    color: "white",
    lineHeight: "25px",
    textAlign: "center",
    "@media (max-width: 600px)": {
      padding: "0px 30px",
    },
    "@media (max-width: 900px)": {
      padding: "0px 30px",
    },
  },
  cardBox: {
    display: "flex",
    justifyContent: "Center",
    flexDirection: "row",
    gap: "80px",
    flexWrap: "wrap",
    "@media (max-width: 600px)": {
      gap: "0px",
    },
  },
  card: {
    width: "280px",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    textAlign: "center",
    "@media (max-width: 600px)": {
      justifyContent: "center",
      padding: "0px 20px",
    },
  },
  cardHeading: {
    color: "white",
    fontSize: "20px",
    fontWeight: "700",
    textAlign: "center",
    "@media (max-width: 600px)": {
      marginBottom: "20px",
    },
  },
  cardDescription: {
    color: "white",
    lineHeight: "25px",
    textAlign: "center",
  },
};

const WhyLearningOnline = () => {
  return (
    <div style={styles.overlay}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Why Learning Online?</h1>
        <p style={styles.description}>
          Proin gravida nibh vel velit auctor aliquet aenean sollicitudin, lorem
          quis bibendum auctor nisi elit consequat ipsum.
        </p>
        <div style={styles.cardBox}>
          <div style={styles.card}>
            <p style={styles.cardHeading}>Save Money</p>
            <p style={styles.cardDescription}>
              Sollicitudin, lorem bibendum auctor, nisi elit consequat ipsum,
              nec sagittis sem nibh id elit duis sed odio sit.
            </p>
          </div>
          <div style={styles.card}>
            <p style={styles.cardHeading}>Save Time</p>
            <p style={styles.cardDescription}>
              Sollicitudin, lorem bibendum auctor, nisi elit consequat ipsum,
              nec sagittis sem nibh id elit duis sed odio sit.
            </p>
          </div>
          <div style={styles.card}>
            <p style={styles.cardHeading}>More Opportunities</p>
            <p style={styles.cardDescription}>
              Sollicitudin, lorem bibendum auctor, nisi elit consequat ipsum,
              nec sagittis sem nibh id elit duis sed odio sit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Radium(WhyLearningOnline);
