import React, { useState } from "react";
import Radium from "radium";
import { StudentTestimonialsCard } from "../../components";

const styles = {
  container: {
    width: "100%",
    // backgroundColor: "rgb(245,245,245)",
    backgroundColor: "white",
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
    padding: "0px 350px",
    lineHeight: "25px",
    "@media (max-width: 1200px)": {
      padding: "0px 200px",
    },
    "@media (max-width: 1100px)": {
      padding: "0px 200px",
    },
    "@media (max-width: 900px)": {
      padding: "0px 100px",
    },
    "@media (max-width: 600px)": {
      padding: "0px 00px",
    },
  },
  cardBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "30px",
  },
};

const _data = [
  {
    profile:
      "https://websitedemos.net/ecourse-learn-photoshop-04/wp-content/uploads/sites/177/2020/01/testimonial-1.jpg",
    name: "Raymond Patel",
    description:
      "Proin gravida nibh vel velit auctor aliquet aenean sollicitudin lorem quis ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat.",
  },
  {
    profile:
      "https://websitedemos.net/ecourse-learn-photoshop-04/wp-content/uploads/sites/177/2020/01/testimonial-2.jpg",
    name: "Tammy Santos",
    description:
      "Proin gravida nibh vel velit auctor aliquet aenean sollicitudin lorem quis ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat.",
  },
  {
    profile:
      "https://websitedemos.net/ecourse-learn-photoshop-04/wp-content/uploads/sites/177/2020/01/testimonial-3.jpg",
    name: "Julia Holland",
    description:
      "Proin gravida nibh vel velit auctor aliquet aenean sollicitudin lorem quis ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat.",
  },
  {
    profile:
      "https://websitedemos.net/ecourse-learn-photoshop-04/wp-content/uploads/sites/177/2020/01/testimonial-4.jpg",
    name: "Ann Carroll",
    description:
      "Proin gravida nibh vel velit auctor aliquet aenean sollicitudin lorem quis ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat.",
  },
  {
    profile:
      "https://websitedemos.net/ecourse-learn-photoshop-04/wp-content/uploads/sites/177/2020/01/testimonial-5.jpg",
    name: "Martha Jones",
    description:
      "Proin gravida nibh vel velit auctor aliquet aenean sollicitudin lorem quis ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat.",
  },
  {
    profile:
      "https://websitedemos.net/ecourse-learn-photoshop-04/wp-content/uploads/sites/177/2020/01/testimonial-6.jpg",
    name: "Angela George",
    description:
      "Proin gravida nibh vel velit auctor aliquet aenean sollicitudin lorem quis ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat.",
  },
  {
    profile:
      "https://websitedemos.net/ecourse-learn-photoshop-04/wp-content/uploads/sites/177/2020/01/testimonial-7.jpg",
    name: "Kenneth Hill",
    description:
      "Proin gravida nibh vel velit auctor aliquet aenean sollicitudin lorem quis ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat.",
  },
  {
    profile:
      "https://websitedemos.net/ecourse-learn-photoshop-04/wp-content/uploads/sites/177/2020/01/testimonial-8.jpg",
    name: "Justin Chavez",
    description:
      "Proin gravida nibh vel velit auctor aliquet aenean sollicitudin lorem quis ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat.",
  },
  {
    profile:
      "https://websitedemos.net/ecourse-learn-photoshop-04/wp-content/uploads/sites/177/2020/01/testimonial-9.jpg",
    name: "Christine Patterson",
    description:
      "Proin gravida nibh vel velit auctor aliquet aenean sollicitudin lorem quis ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat.",
  },
];

const HappyStudents = () => {
  const [data, setData] = useState(_data);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Because It's All About Happy Students...</h1>
      <p style={styles.description}>
        Learn how to use Photoshop proin gravida nibh vel velit auctor aliquet.
        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.
      </p>
      <div style={styles.cardBox}>
        {data.map((x, i) => {
          return (
            <StudentTestimonialsCard
              key={i}
              data={x}
              color={"rgb(245,245,245)"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Radium(HappyStudents);
