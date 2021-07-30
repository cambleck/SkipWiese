import React from "react";
import image from "../About/skip.jpeg";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "100px 30px",
        flexDirection: "column",
        fontSize: 15,
      }}
    >
      <div style={{ maxWidth: 800 }}>
        <img src={image} className="landing-about" />
        <p>
          Leroy “Skip” Wiese is a man of many talents. The diversity of his work
          is truly astounding. He defies category or simple explanation. Skip
          was a professional artist who managed to make a living full time with
          his art from his early years fresh out of high school right up to the
          day died. He was born in Chicago and was a Waukegan resident for more
          than 60 years. He retired from H & R Studio, Chicago as a Fashion
          Illustrator in 1980 in order to devote full time to his work as a
          freelance artist. The wellspring of Skip’s work is vast—almost endless
          in scope. He had literally hundreds of art pieces spanning over 60
          years work stashed in his home and garage studio. He worked in pencil,
          oil, watercolor, pastels, acrylic, mixed media, collage and many types
          of printmaking—you name it, the list goes on and on. He purposely
          didn't usually date his pieces, preferring instead to let them have a
          continuous life. And that is the purpose of this site; to continue on
          the life of his work and to share the many beautiful things he
          created. Enjoy!
        </p>
      </div>
      <a
        href="./about"
        className="black-text btn transparent"
        style={{ margin: "30px 10px" }}
      >
        See More →
      </a>
    </div>
  );
};

export default About;