import React from "react";
import Radium from "radium";
import { EnrollInCourseBtn } from "../../components";

const GetStartedNow = ({ url, color }) => {
  const styles = {
    overlay: {
      backgroundImage: `url(${url})`,
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    container: {
      width: "100%",
      height: "1000px",
      backgroundColor: color === "white" ? "white" : "rgba(0,0,0,0.5)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly",
      padding: "170px 100px",
      gap: "60px",
      "@media (max-width: 900px)": {
        height: "auto",
        padding: "100px 30px",
      },
    },
    heading: {
      color: color === "white" ? "black" : "white",
      fontSize: "45px",
      textAlign: "center",
      "@media (max-width: 600px)": {
        fontSize: "22px",
      },
    },
    description: {
      color: color === "white" ? "black" : "white",
      lineHeight: "25px",
      textAlign: "center",
      padding: "0px 250px",
      "@media (max-width: 1200px)": {
        padding: "0px 100px",
      },
      "@media (max-width: 900px)": {
        padding: "0px 10px",
      },
      "@media (max-width: 600px)": {
        padding: "0px 0px",
      },
    },
    cardBox: {
      display: "flex",
      flexDirection: "row",
      gap: "30px",
      flexWrap: "wrap",
    },
    column: {
      border: "1px solid rgb(150,150,150)",
      height: "600px",
      display: "flex",
      flexDirection: "column",
      flex: 1,
      "@media (max-width: 600px)": {
        height: "700px",
      },
    },
    rowUp: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "30px",
      height: "200px",
      borderBottom: "1px solid rgb(150,150,150)",
    },
    rowDown: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
      padding: "0px 110px",
      "@media (max-width: 1200px)": {
        padding: "0px 30px",
      },
      "@media (max-width: 900px)": {
        padding: "0px 30px",
      },
    },
    cardHeading: {
      color: color === "white" ? "black" : "white",
      fontSize: "40px",
      "@media (max-width: 600px)": {
        fontSize: "22px",
      },
    },
    price: {
      color: color === "white" ? "black" : "white",
    },
    cardDescription: {
      color: color === "white" ? "black" : "white",
      lineHeight: "35px",
    },
  };
  return (
    <div style={styles.overlay}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Get Started Now</h1>
        <p style={styles.description}>
          Proin gravida nibh vel velit auctor aliquet aenean sollicitudin, lorem
          quis bibendum auctor nisi elit consequat ipsum.
        </p>
        <div style={styles.cardBox}>
          <div style={styles.column}>
            <div style={styles.rowUp}>
              <h1 style={styles.cardHeading}>Master Class</h1>
              <h3 style={styles.price}>$247</h3>
            </div>
            <div style={styles.rowDown}>
              <p style={styles.cardDescription}>
                Proin gravida nibh vel velit auctor sollicitudin Lorem quis
                bibendum auctor nisi elit consequat Nec sagittis sem nibh id
                elit duis sed Odio sit amet bibendum auctor nisi consequat Ipsum
                nec sagittis sem nibh id elit Duis sed odio sit amet
              </p>
              <EnrollInCourseBtn />
            </div>
          </div>
          <div style={styles.column}>
            <div style={styles.rowUp}>
              <h1 style={styles.cardHeading}>The Essentials</h1>
              <h3 style={styles.price}>$197</h3>
            </div>
            <div style={styles.rowDown}>
              <p style={styles.cardDescription}>
                Proin gravida nibh vel velit auctor sollicitudin Lorem quis
                bibendum auctor nisi elit consequat Nec sagittis sem nibh id
                elit duis sed Odio sit amet bibendum auctor nisi consequat Ipsum
                nec sagittis sem nibh id elit Duis sed odio sit amet
              </p>
              <EnrollInCourseBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Radium(GetStartedNow);
