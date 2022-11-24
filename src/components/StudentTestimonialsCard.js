import React from "react";
import Radium from "radium";
import { MdFormatQuote } from "react-icons/md";

const WhatYouWillLearnCard = ({
  data: { name, profile, description },
  color,
}) => {
  const styles = {
    cardWrapper: {
      width: "360px",
      height: "700px",
      backgroundColor: color,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "Center",
      gap: "15px",
      textAlign: "center",
      "@media (max-width: 600px)": {
        width: "100%",
      },
    },
    description: {
      lineHeight: "25px",
      padding: "0px 80px",
      "@media (max-width: 600px)": {
        padding: "0px 60px",
      },
    },
    profile: {
      borderRadius: "50%",
      width: "50px",
      height: "50px",
      marginTop: "40px",
    },
  };

  return (
    <div style={styles.cardWrapper}>
      <h1>
        <MdFormatQuote style={{ fontSize: "40px", color: "rgb(233,40,80)" }} />
      </h1>
      <p style={styles.description}>{description}</p>
      <img style={styles.profile} src={profile} alt="Profile" />
      <h3>{name}</h3>
    </div>
  );
};

export default Radium(WhatYouWillLearnCard);
