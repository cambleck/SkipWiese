import React from "react";
import image from "./About.jpeg";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 30,
        marginTop: 60,
        fontSize: 16,
      }}
    >
      <div style={{ maxWidth: 800 }}>
        <img src={image} style={{ float: "left", height: 300, margin: 20 }} />
        <p>
          Leroy “Skip” Wiese is a man of many talents. The diversity of his work
          is truly astounding. He defies category or simple explanation. Skip is
          a professional artist who has managed to make a living full time with
          his art from his early years fresh out of high school right up to his
          death. He was born in Chicago and has been a Waukegan resident for
          more than 60 years. Skip was a founding and long time member of St.
          Dismas Church and Dandelion Gallery. He was an honorary board member
          of the Deer Path Art League, in addition he was a Golden Deeds
          recipient and member of the Waukegan Exchange Club. He retired from H
          & R Studio, Chicago as a Fashion Illustrator in 1980. He opened his
          own studio in Waukegan as an artist and teacher. Skip was a veteran of
          the United States Army during the Korean War. He is survived by his
          daughters, Carrie (James) Ware, Christina (Dennis) Heslin, Catherine
          (Jack) Herman, Corrinne (Michael) Bleck; sister, Patricia (Robert)
          Mitchell of Arizona; 11 grandchildren; extended family and dear
          friends in the art community. Skip is preceded in death by his wife of
          63 years, Antonia Wiese.
        </p>

        <p>
          Leroy “Skip” Wiese is a man of many talents. The diversity of his work
          is truly astounding. He defies category or simple explanation. Skip is
          a professional artist who has managed to make a living full time with
          his art from his early years fresh out of high school right up to his
          death. He was born in Chicago and has been a Waukegan resident for
          more than 60 years. Skip was a founding and long time member of St.
          Dismas Church and Dandelion Gallery. He was an honorary board member
          of the Deer Path Art League, in addition he was a Golden Deeds
          recipient and member of the Waukegan Exchange Club. He retired from H
          & R Studio, Chicago as a Fashion Illustrator in 1980. He opened his
          own studio in Waukegan as an artist and teacher. Skip was a veteran of
          the United States Army during the Korean War. He is survived by his
          daughters, Carrie (James) Ware, Christina (Dennis) Heslin, Catherine
          (Jack) Herman, Corrinne (Michael) Bleck; sister, Patricia (Robert)
          Mitchell of Arizona; 11 grandchildren; extended family and dear
          friends in the art community. Skip is preceded in death by his wife of
          63 years, Antonia Wiese.
        </p>

        <a
          href="./gallery"
          className="black-text btn transparent"
          style={{ margin: "30px 10px" }}
        >
          See his work →
        </a>
      </div>
    </div>
  );
};

export default About;
