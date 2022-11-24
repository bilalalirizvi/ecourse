import React from "react";

const styles = {
  button: {
    border: "none",
    outline: "none",
    backgroundColor: "rgb(233,40,80)",
    color: "white",
    width: "220px",
    height: "45px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
  },
};

const EnrollInCourseBtn = () => {
  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
      style={styles.button}
    >
      ENROLL IN COURSE
    </button>
  );
};

export default EnrollInCourseBtn;
