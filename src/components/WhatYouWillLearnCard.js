import React from "react";
import Radium from "radium";

const WhatYouWillLearnCard = ({
  data: { serial, title, description },
  color,
}) => {
  const styles = {
    cardWrapper: {
      width: "360px",
      height: "400px",
      backgroundColor: color,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "Center",
      gap: "25px",
      textAlign: "center",
      "@media (max-width: 600px)": {
        width: "100%",
      },
    },
    description: {
      lineHeight: "25px",
      padding: "0px 80px",
      "@media (max-width: 600px)": {
        padding: "0px 20px",
      },
    },
  };
  return (
    <div style={styles.cardWrapper}>
      <h3>{serial + "."}</h3>
      <h3>{title}</h3>
      <p style={styles.description}>{description}</p>
    </div>
  );
};

export default Radium(WhatYouWillLearnCard);
