import React from "react";

const styles = {
  container: {
    width: "100%",
    height: "1000px",
  },
};

const Wrapper = (props) => {
  console.log(props);
  return (
    <div style={{ ...styles.container, backgroundColor: props.color }}>
      {props.children}
    </div>
  );
};

export default Wrapper;
