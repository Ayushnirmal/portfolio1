import { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import im111 from "../assets/img/im111.png"; // Spotify Clone image
import im2 from "../assets/img/im2.png"; // Netflix Clone image
import vi11 from "../assets/img/vi11.mp4"; // Video for Netflix Clone
import vi22 from "../assets/img/vi22.mp4"; // Video for Spotify Clone
import im4 from "../assets/img/im4.png"; // Tour & Travel image

export const Projects = () => {
  const videoRef = useRef(null); // Ref for the video element

  const handleProjectClick = (projectTitle) => {
    console.log(`Clicked on: ${projectTitle}`); // Log the project clicked
    if (videoRef.current) {
      if (projectTitle === "Spotify Clone") {
        videoRef.current.src = vi22; // Assign vi22 for Spotify Clone
      } else if (projectTitle === "Netflix Clone") {
        videoRef.current.src = vi11; // Assign vi11 for Netflix Clone
      }
      videoRef.current.play().catch(error => {
        console.error("Error trying to play the video:", error);
      });
    }
  };

  // Include all desired projects
  const projects = [
    {
      title: "Spotify Clone",
      description: "Essential features like music browsing, playlist creation, and playback controls. Designed a responsive, user-friendly interface for seamless streaming and intuitive navigation.",
      imgUrl: im111,
    },
    {
      title: "Netflix Clone",
      description: "Key functionalities like video browsing, personalized recommendations, and playback controls. Designed a responsive interface for smooth streaming and easy navigation.",
      imgUrl: im2,
    },
    {
      title: "Tour & Travel",
      description: "Dynamic platform that offers users an immersive experience in destination browsing, itinerary planning, and booking services. Designed with a user-friendly interface to facilitate seamless navigation and enhance the travel planning process.",
      imgUrl: im4,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>Click on a project to play the demo video.</p>
            <Row>
              {
                projects.map((project, index) => {
                  return (
                    <Col key={index} md={4} onClick={() => handleProjectClick(project.title)} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <ProjectCard {...project} style={{ width: '250px', height: '250px' }} /> {/* Increased size of project icons */}
                    </Col>
                  )
                })
              }
            </Row>
            <div style={{ marginTop: '20px', textAlign: 'center' }}> {/* Center the video below the icons */}
              <video
                ref={videoRef}
                controls
                muted
                style={{ width: "480px", height: "270px" }} // Increased video size
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
