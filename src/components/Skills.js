import meter1 from "../assets/meter1.svg";
import meter2 from "../assets/meter2.svg";
import meter3 from "../assets/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/arrow1.svg";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import colorSharp from "../assets/color-sharp.png";
import arrow2 from "../assets/arrow2.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                These are the skills that i have built up all these years.
                <br></br> I have mentioned the progress that i have made in the
                skills.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item" style={{ width: 135.5, height: 135.5 }}>
                  <CircularProgressbar value={70} text="ReactJs" />
                </div>
                <div className="item" style={{ width: 135.5, height: 135.5 }}>
                  <CircularProgressbar value={80} text="JS" />
                </div>
                <div className="item" style={{ width: 135.5, height: 135.5 }}>
                  <CircularProgressbar value={90} text="HTML" />
                </div>
                <div className="item" style={{ width: 135.5, height: 135.5 }}>
                  <CircularProgressbar value={90} text="CSS" />
                </div>
                <div className="item" style={{ width: 135.5, height: 135.5 }}>
                  <CircularProgressbar value={50} text="Firebase" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
