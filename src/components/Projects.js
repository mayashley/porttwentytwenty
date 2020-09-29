import React, { Component } from "react";
import SingleProject from "./SingleProject";
import ProjectsList from "../constants/ProjectsList";

class Projects extends Component {
  render() {
    return (
      <div id="projects">
        {ProjectsList.map((item, index) => (
          <SingleProject
            key={index}
            design={item.design}
            code={item.code}
            live={item.live}
            title={item.title}
            subtitle={item.subtitle}
            paragraph={item.paragraph}
            imageLeft={item.imageLeft}
            image1={item.image1}
            image2={item.image2}
            image3={item.image3}
          />
        ))}
      </div>
    );
  }
}
export default Projects;
