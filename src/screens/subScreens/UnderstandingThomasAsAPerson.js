import React from "react";
import Radium from "radium";

const styles = {
  container: {
    width: "100%",
    backgroundColor: "rgb(245,245,245)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "170px 100px",
    "@media (max-width: 935px)": {
      padding: "170px 30px",
    },
  },
  heading: {
    fontSize: "45px",
    marginBottom: "60px",
    textAlign: "center",
    "@media (max-width: 1000px)": {
      fontSize: "40px",
    },
    "@media (max-width: 900px)": {
      fontSize: "33px",
    },
    "@media (max-width: 800px)": {
      fontSize: "28px",
    },
    "@media (max-width: 700px)": {
      fontSize: "23px",
    },
    "@media (max-width: 600px)": {
      fontSize: "22px",
    },
  },
  description: {
    marginBottom: "60px",
    textAlign: "center",
    // padding: "0px 250px",
    lineHeight: "25px",
    "@media (min-width: 1000px)": {
      padding: "0px 100px",
    },
  },
  content: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "40px",
    "@media (max-width: 800px)": {
      flexDirection: "column-reverse",
    },
  },
  columnLeft: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
    gap: "30px",
    flex: 1,
    padding: "50px 0px",
    "@media (max-width: 600px)": {
      padding: "0px 0px",
    },
  },
  columnRight: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  image: {
    "@media (max-width: 1200px)": {
      width: "100%",
      height: "auto",
    },
  },
  contentText: {
    lineHeight: "25px",
  },
  contentHeading: {
    "@media (max-width: 600px)": {
      fontSize: "18px",
    },
  },
};

const UnderstandingThomasAsAPerson = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Understanding Thomas As A Person</h1>
      <p style={styles.description}>
        Proin gravida nibh vel velit auctor aliquet aenean sollicitudin, lorem
        quis bibendum auctor nisi elit consequat ipsum.
      </p>
      <div style={styles.content}>
        <div style={styles.columnLeft}>
          <h2 style={styles.contentHeading}>Being A Teacher Is Who I Am...</h2>
          <p style={styles.contentText}>
            Proin gravida nibh vel velit auctor aliquet aenean sollicitudin,
            lorem bibendum auctor nivvsi elit consequat ipsum nec sagittis sem
            nibh id elit duis sed odio sit amet nibh vulputate cursus a sit amet
            mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
            auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu
            in elit.
          </p>
          <p style={styles.contentText}>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu
            felis dapibus condimentum sit amet a augue.
          </p>
        </div>
        <div style={styles.columnRight}>
          <img
            style={styles.image}
            src="https://websitedemos.net/ecourse-learn-photoshop-04/wp-content/uploads/sites/177/2020/01/instructor.jpg"
            alt="Thomas"
          />
        </div>
      </div>
    </div>
  );
};

export default Radium(UnderstandingThomasAsAPerson);
