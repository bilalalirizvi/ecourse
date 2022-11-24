import React, { useState } from "react";
import Radium from "radium";
import { WhatYouWillLearnCard } from "../../components";

const _data = [
  {
    serial: 1,
    title: "Set Up Your Project",
    description:
      "Proin gravida nibh vel velit auctor aliquet aenean sollicitudin lorem quis bibendum auctor.",
  },
  {
    serial: 2,
    title: "Design Responsively",
    description:
      "Proin gravida nibh vel velit auctor aliquet aenean sollicitudin lorem quis bibendum auctor.",
  },
  {
    serial: 3,
    title: "Process",
    description:
      "Proin gravida nibh vel velit auctor aliquet aenean sollicitudin lorem quis bibendum auctor.",
  },
  {
    serial: 4,
    title: "Collaboration",
    description:
      "Proin gravida nibh vel velit auctor aliquet aenean sollicitudin lorem quis bibendum auctor.",
  },
  {
    serial: 5,
    title: "Image Considerations",
    description:
      "Proin gravida nibh vel velit auctor aliquet aenean sollicitudin lorem quis bibendum auctor.",
  },
  {
    serial: 6,
    title: "Export Assests",
    description:
      "Proin gravida nibh vel velit auctor aliquet aenean sollicitudin lorem quis bibendum auctor.",
  },
];

const WhatYouWillLearn = ({ color }) => {
  const [data, setData] = useState(_data);

  const styles = {
    container: {
      width: "100%",
      backgroundColor: color,
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
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "30px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>What You’ll Learn</h1>
      <p style={styles.description}>
        Learn how to use Photoshop proin gravida nibh vel velit auctor aliquet.
        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.
      </p>
      <div style={styles.cardBox}>
        {data.map((x, i) => {
          return (
            <WhatYouWillLearnCard
              key={i}
              data={x}
              color={color === "white" ? "rgb(245,245,245)" : "white"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Radium(WhatYouWillLearn);
