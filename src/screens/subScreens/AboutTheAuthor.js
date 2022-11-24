import React from "react";
import Radium from "radium";

const AboutTheAuthor = ({ url, color }) => {
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
      height: "800px",
      backgroundColor: color === "white" ? "white" : "rgba(0,0,0,0.5)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly",
      padding: "100px 70px",
      "@media (max-width: 600px)": {
        padding: "100px 20px",
        height: "1300px",
      },
    },
    heading: {
      color: color === "white" ? "black" : "white",
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
    heading2: {
      color: color === "white" ? "black" : "white",
      fontSize: "22px",
      textAlign: "center",
      "@media (max-width: 900px)": {
        fontSize: "18px",
        marginBottom: "20px",
        marginTop: "20px",
      },
    },
    description: {
      color: color === "white" ? "black" : "white",
      lineHeight: "25px",
      textAlign: "center",
      "@media (max-width: 600px)": {
        padding: "0px 30px",
      },
      "@media (max-width: 900px)": {
        padding: "0px 30px",
      },
    },
    descriptionBox: {
      display: "flex",
      flexDirection: "row",
      gap: "40px",
      "@media (max-width: 900px)": {
        flexDirection: "column",
      },
    },
    column: {
      display: "flex",
      flexDirection: "column",
      gap: "40px",
    },
    columnDescription: {
      color: color === "white" ? "black" : "white",
      lineHeight: "25px",
      "@media (max-width: 600px)": {
        padding: "0px 20px",
      },
      "@media (max-width: 900px)": {
        padding: "0px 20px",
        textAlign: "center",
      },
    },
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.container}>
        <h1 style={styles.heading}>About The Author</h1>
        <p style={styles.description}>
          Proin gravida nibh vel velit auctor aliquet aenean sollicitudin, lorem
          quis bibendum aucto.
        </p>
        <h2 style={styles.heading2}>Thomas Mills</h2>
        <div style={styles.descriptionBox}>
          <div style={styles.column}>
            <p style={styles.columnDescription}>
              Proin gravida nibh vel velit auctor aliquet aenean sollicitudin,
              lorem bibendum auctor nivvsi elit consequat ipsum nec sagittis sem
              nibh id elit duis sed odio sit amet nibh vulputate cursus a sit
              amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
              tincidunt auctor a ornare odio. Sed non mauris vitae erat
              consequat auctor eu in elit.
            </p>
            <p style={styles.columnDescription}>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac
              urna eu felis dapibus condimentum sit amet a augue.
            </p>
          </div>
          <div style={styles.column}>
            <p style={styles.columnDescription}>
              Gravida nibh vel velit auctor aliquet aenean sollicitudin,
              bibendum auctor nivvsi elit consequat ipsum nec sagittis sem nibh
              id elit duis sed odio sit amet nibh vulputate cursus a sit amet
              mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
              tincidunt auctor a ornare odio. Sed non mauris vitae erat
              consequat auctor eu in elit class aptent taciti.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Radium(AboutTheAuthor);
