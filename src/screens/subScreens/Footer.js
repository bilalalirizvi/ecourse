import React from "react";
import Radium from "radium";

const styles = {
  container: {
    width: "100%",
    height: "80px",
    backgroundColor: "rgb(245,245,245)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 100px",
    "@media (max-width: 900px)": {
      height: "90px",
      flexDirection: "column",
      justifyContent: "center",
      padding: "0px 0px",
      gap: "10px",
      fontSize: "14px",
    },
  },
};

const Footer = () => {
  return (
    <div style={styles.container}>
      <p>Copyright © 2022 eCourse - Learn Photoshop</p>
      <p>Powered by eCourse - Learn Photoshop</p>
    </div>
  );
};

export default Radium(Footer);
