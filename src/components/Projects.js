import React, { Component } from "react";
import SingleProject from "./SingleProject";
import ProjectsList from "../constants/ProjectsList";

class Projects extends Component {
  render() {
    return (
      <div>
        {ProjectsList.map((item, index) => 
          <SingleProject
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            paragraph={item.paragraph}
            imageLeft={item.imageLeft}
            image1={item.image1}
            image2={item.image2}
          />
        )}
      </div>
    );
  }
}
export default Projects;
