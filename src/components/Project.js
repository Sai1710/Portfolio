import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import DGSnap from "../assets/DiceGame.png";
import MSnap from "../assets/Mapty.png";
import FUSnap from "../assets/FeedbackUI.png";
import GFSnap from "../assets/GitHubFinder.png";
import HMSnap from "../assets/HouseMarketPlace.png";
import colorSharp2 from "../assets/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Mapty",
      description: "Leaflet Library",
      imgUrl: MSnap,
      Url: "https://mapty-project-lime.vercel.app/",
    },
    {
      title: "House Marketplace",
      description: "Firebase Database",
      imgUrl: HMSnap,
      Url: "https://house-marketplace-sai1710.vercel.app/",
    },
    {
      title: "Feedback UI",
      description: "ReactJs Components",
      imgUrl: FUSnap,
      Url: "https://feedback-app-six-xi.vercel.app/",
    },
    {
      title: "GitHub Finder",
      description: "Github REST API",
      imgUrl: GFSnap,
      Url: "https://github-finder-sai1710.vercel.app/",
    },
    {
      title: "Dice Game",
      description: "Vanilla Javascript",
      imgUrl: DGSnap,
      Url: "https://dice-game-sai1710.vercel.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    This is the list of few of the projects that i have made
                    using Javascript ,ReactJs, and Firebse's Firestore and also
                    a API using Website.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
