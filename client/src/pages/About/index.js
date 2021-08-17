import React from "react";
import image from "./skip.jpeg";
import image2 from "./skip_painting_mural.jpeg";

const ArtistStatement = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",

        borderLeft: "5px solid rgb(70,82,90)",
        padding: 20,
        borderRadius: 5,
        background: "rgb(255,255,255)",
        boxShadow: "0px 0px 5px rgb(220,220,220) inset",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          width: "90%",
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            textIndent: "0em",
            fontSize: 20,
          }}
        >
          Artist Statement{" "}
        </div>
        <div
          style={{
            color: "rgb(150, 150, 150)",
            fontSize: 12,
            marginTop: -5,
          }}
        >
          August 28, 1995
        </div>
      </div>
      <p>
        Since my student days at the Art Institute of Chicago, I had been an
        admirer of the "Impressionists", those wonderful painters, like Monet,
        Pissarro, Renoir, Degas and so many others, who captured the moments of
        their time, like a candid camera.
        <br />
        <p>
          Striving to create my own impressions of the moment, seems to be a
          theme in my work, for as long as I can remember. My pastel paintings
          are filled with broken color, filtering through other colors, into
          what may appear to be, say white, or any other general color, is
          really a display of pink lavenders, blues, yellows and everything in
          between with the hope of capturing the color mood of that moment.
        </p>
        <p>
          My black and white monotypes are silhouettes of life and action, not
          detail, but passing moment, the after image that remains in my mind's
          eye.
        </p>
      </p>
    </div>
  );
};

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textIndent: "1.5em",
      }}
      id="about"
    >
      <div className="about-container">
        <div style={{ maxWidth: 650, width: "90vw" }}>
          <img src={image} className="about-self-image" />
          <p style={{ textIndent: "0em" }}>
            Leroy “Skip” Wiese is a man of many talents. The diversity of his
            work is truly astounding. He defies category or simple explanation.
            Skip was a professional artist who managed to make a living full
            time with his art from his early years fresh out of high school
            right up to the day died. He was born in Chicago and was a Waukegan
            resident for more than 60 years. He retired from H & R Studio,
            Chicago as a Fashion Illustrator in 1980 in order to devote full
            time to his work as a freelance artist. Within a decade he opened
            his first studio and gallery on Genesee Street, as well as showing
            at various “pop-up” galleries over time. Eventually he moved his
            studio to the Genesee Theater building and had two storefront
            galleries there.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",

              borderLeft: "5px solid rgb(120,134,148)",
              padding: 20,
              borderRadius: 5,
              background: "rgb(255,255,255)",
              boxShadow: "0px 0px 5px rgb(220,220,220) inset",
            }}
          >
            <p style={{ margin: "20px auto", fontSize: 18, textIndent: "0em" }}>
              "Many people don't understand art. They'll look at a piece and say
              'My kid could do that.' Well, that might be true, but what they
              really need to ask themselves is what the artist is trying to
              say."
            </p>
          </div>
          <p>
            He showed artistic talent at an early age. When he was only seven
            years old he was already copying and sketching Smilin’ Jack comics.
            He always had in his own words “a natural knack for art.” He
            attended parochial school, which had at the time once–a-week art
            classes. He later attended Lane Technical High School and studied
            art three hours a day in various art classes offered there.  While
            still in high school he enrolled in The Famous Artist School
            correspondence course and managed to build a modest portfolio, which
            later helped land him his first job. In 1951, after graduating from
            Lane Tech, he attended The Art Institute part time while serving a
            two-year apprenticeship in commercial art at H & R Studio—a downtown
            Chicago fashion art studio. At the time H & R Studio was one of the
            largest commercial studios in Chicago employing over 30 artists.
          </p>
          <img
            src={image2}
            style={{ float: "right", width: 300, margin: 20 }}
          />
          <p>
            In the 1950s there were quite a number of art studios in Chicago
            employing scores of young artists eager to learn commercial art and
            land a full-paying job. Many of these artists, like Skip, would
            apprentice in a downtown studio while taking classes part time at
            the Art Institute. Skip worked first as an apprentice and then “on
            the board” as a commercial artist for such clients as Sears,
            Marshall Field’s, and Carson Pirie Scott to name but a few. He
            learned plenty about technique. This studio shop experience allowed
            a teaching environment without formality. As apprentice, he could
            ask questions of his fellow shop artists such as “how do you do
            shiny lapels on a tuxedo?” And he would learn just how. For instance
            he was told to think of himself as a weaver when drawing fabric. It
            was a very hands-on approach.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",

              borderLeft: "5px solid rgb(120,134,148)",
              padding: 20,
              borderRadius: 5,
              textIndent: "0em",
              background: "rgb(255,255,255)",
              boxShadow: "0px 0px 5px rgb(220,220,220) inset",
            }}
          >
            <p
              style={{
                margin: "20px auto",

                fontSize: 18,
              }}
            >
              “You can’t really steal the idea, you only can take it and run
              with it and turn it into your own interpretation.”
            </p>
          </div>
          <p>
            The wellspring of Skip’s work is vast—almost endless in scope. He
            had literally hundreds of art pieces spanning over 60 years work
            stashed in his home and garage studio. He worked in pencil, oil,
            watercolor, pastels, acrylic, mixed media, collage and many types of
            printmaking—you name it, the list goes on and on. He purposely
            didn't usually date his pieces, preferring instead to let them have
            a continuous life. And that is the purpose of this site; to continue
            on the life of his work and to share the many beautiful things he
            created. Enjoy!
          </p>
          <ArtistStatement />
        </div>
      </div>
    </div>
  );
};

export default About;
